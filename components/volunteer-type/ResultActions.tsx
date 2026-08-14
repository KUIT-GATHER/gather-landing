"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import type { VolunteerType } from "@/data/volunteer-test";
import { resetVolunteerTestSession } from "@/lib/volunteer-test";

type ResultActionsProps = {
  type: VolunteerType;
};

export function ResultActions({ type }: ResultActionsProps) {
  const router = useRouter();
  const [toast, setToast] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(""), 2_500);
    return () => clearTimeout(timer);
  }, [toast]);

  const copyResult = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setToast("링크를 복사했어요.");
    } catch {
      setToast("링크를 복사하지 못했어요. 다시 시도해 주세요.");
    }
  };

  const saveResult = async () => {
    if (isSaving) return;

    const node = document.getElementById(`result-export-${type}`);
    if (!node) {
      setToast("결과 카드를 저장하지 못했어요. 다시 시도해 주세요.");
      return;
    }

    setIsSaving(true);
    try {
      await document.fonts.ready;
      await Promise.all(
        Array.from(node.querySelectorAll("img")).map((image) =>
          image.complete ? Promise.resolve() : image.decode(),
        ),
      );
      const { getFontEmbedCSS, toPng } = await import("html-to-image");
      const fontEmbedCSS = await getFontEmbedCSS(node);
      const dataUrl = await toPng(node, {
        cacheBust: true,
        pixelRatio: 2,
        backgroundColor: "#fafaf8",
        fontEmbedCSS,
      });
      const link = document.createElement("a");
      link.download = `gather-volunteer-type-${type}.png`;
      link.href = dataUrl;
      link.click();
      setToast("결과 카드를 저장했어요.");
    } catch {
      setToast("결과 카드를 저장하지 못했어요. 다시 시도해 주세요.");
    } finally {
      setIsSaving(false);
    }
  };

  const restart = () => {
    resetVolunteerTestSession();
    router.push("/volunteer-type/test");
  };

  return (
    <>
      <section className="mt-10 flex flex-col gap-8 rounded-[20px] bg-white px-5 py-7 sm:px-8 xl:px-10 xl:py-8">
        <div className="flex items-center gap-5">
          <Image src="/assets/icons/result-share-heading.svg" alt="" width={28} height={28} className="h-7 w-7" />
          <h2 className="text-xl font-semibold leading-normal tracking-[-0.03em] text-[#0a0a0a] sm:text-2xl xl:text-[28px]">결과 공유 및 저장</h2>
        </div>
        <div className="grid gap-4 lg:grid-cols-2 lg:gap-6">
          <button type="button" onClick={copyResult} className="flex min-h-[62px] items-center justify-center gap-4 rounded-[40px] border border-[#d9d9d9] bg-white px-6 py-4 text-lg font-bold leading-normal text-[#0a0a0a] transition hover:bg-[#f7f8f6] sm:text-xl xl:min-h-[69px] xl:py-5 xl:text-2xl">
            <Image src="/assets/icons/share.svg" alt="" width={24} height={24} className="h-6 w-6" />
            친구에게 공유
          </button>
          <button type="button" onClick={saveResult} disabled={isSaving} aria-busy={isSaving} className="flex min-h-[62px] items-center justify-center gap-4 rounded-[40px] px-6 py-4 text-lg font-bold leading-normal text-[#fafaf8] transition hover:brightness-95 disabled:cursor-wait disabled:opacity-70 sm:text-xl xl:min-h-[69px] xl:py-5 xl:text-2xl" style={{ backgroundColor: "var(--result-accent)" }}>
            <Image src="/assets/icons/download.svg" alt="" width={24} height={24} className="h-6 w-6" />
            {isSaving ? "저장 중" : "결과 카드 저장"}
          </button>
        </div>
      </section>

      <div className="mt-20 grid gap-4 lg:grid-cols-2 lg:gap-6">
        <button type="button" onClick={restart} className="min-h-[62px] rounded-[20px] border-[1.5px] border-[#d9d9d9] bg-transparent px-8 py-4 text-lg font-bold leading-normal text-[#545454] hover:bg-white sm:text-xl xl:min-h-[69px] xl:py-5 xl:text-2xl">다시 테스트하기</button>
        <button type="button" onClick={() => router.push("/")} className="min-h-[62px] rounded-[20px] border-[1.5px] border-[#d9d9d9] bg-transparent px-8 py-4 text-lg font-bold leading-normal text-[#545454] hover:bg-white sm:text-xl xl:min-h-[69px] xl:py-5 xl:text-2xl">홈으로 가기</button>
      </div>

      <div className="pointer-events-none fixed inset-x-5 bottom-6 z-50 flex justify-center" aria-live="polite" aria-atomic="true">
        {toast ? <p className="rounded-full bg-[#202320] px-5 py-3 text-sm font-semibold text-white shadow-lg">{toast}</p> : null}
      </div>
    </>
  );
}
