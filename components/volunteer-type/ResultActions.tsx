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
    const node = document.getElementById(`result-export-${type}`);
    if (!node) {
      setToast("결과 카드를 저장하지 못했어요. 다시 시도해 주세요.");
      return;
    }

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
    }
  };

  const restart = () => {
    resetVolunteerTestSession();
    router.push("/volunteer-type/test");
  };

  return (
    <>
      <section className="rounded-[20px] bg-white px-5 py-7 sm:px-10 sm:py-8">
        <h2 className="text-xl font-bold sm:text-[28px]">📨&nbsp; 결과 공유 및 저장</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <button type="button" onClick={copyResult} className="flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-[#deded9] bg-white px-5 font-semibold transition hover:bg-[#f7f8f6]">
            <Image src="/assets/icons/share.svg" alt="" width={20} height={20} />
            친구에게 공유
          </button>
          <button type="button" onClick={saveResult} className="flex min-h-14 items-center justify-center gap-2 rounded-2xl px-5 font-semibold text-white transition hover:brightness-95" style={{ backgroundColor: "var(--result-accent)" }}>
            <Image src="/assets/icons/download.svg" alt="" width={20} height={20} />
            결과 카드 저장
          </button>
        </div>
      </section>

      <div className="grid gap-3 sm:grid-cols-2">
        <button type="button" onClick={restart} className="min-h-14 rounded-xl border border-[#dcdcd7] bg-white px-5 font-semibold hover:bg-[#f7f8f6]">다시 테스트하기</button>
        <button type="button" onClick={() => router.push("/")} className="min-h-14 rounded-xl border border-[#dcdcd7] bg-white px-5 font-semibold hover:bg-[#f7f8f6]">홈으로 가기</button>
      </div>

      <div className="pointer-events-none fixed inset-x-5 bottom-6 z-50 flex justify-center" aria-live="polite" aria-atomic="true">
        {toast ? <p className="rounded-full bg-[#202320] px-5 py-3 text-sm font-semibold text-white shadow-lg">{toast}</p> : null}
      </div>
    </>
  );
}

