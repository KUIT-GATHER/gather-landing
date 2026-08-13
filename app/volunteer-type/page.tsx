import type { Metadata } from "next";
import Image from "next/image";

import { StartTestButton } from "@/components/volunteer-type/StartTestButton";
import { VolunteerTypeHeader } from "@/components/volunteer-type/VolunteerTypeHeader";

export const metadata: Metadata = {
  title: "봉사 유형 테스트 | Gather",
  description: "6가지 질문으로 나와 잘 맞는 봉사 유형을 알아보세요.",
};

const typeCards = [
  { label: "따뜻한 동행가", image: "/assets/illustrations/landing/puzzle-companion.svg", tone: "#fff6df" },
  { label: "지식 나눔가", image: "/assets/illustrations/landing/puzzle-knowledge.svg", tone: "#e8f3ff" },
  { label: "변화를 만드는 행동가", image: "/assets/illustrations/landing/puzzle-action.svg", tone: "#e7faf7" },
  { label: "든든한 지원가", image: "/assets/illustrations/landing/puzzle-support.svg", tone: "#f8ebf8" },
] as const;

export default function VolunteerTypePage() {
  return (
    <main className="min-h-screen bg-background">
      <VolunteerTypeHeader backHref="/#volunteer-type" />
      <section className="mx-auto flex w-full max-w-[860px] flex-col items-center px-5 py-12 text-center sm:px-8 sm:py-16">
        <span className="rounded-full bg-brand-soft px-5 py-2 text-sm font-bold text-brand">
          Gather 봉사 유형 테스트
        </span>
        <h1 className="mt-5 text-[clamp(2rem,5vw,2.75rem)] font-bold leading-[1.25] tracking-[-0.04em]">
          나와 꼭 맞는 봉사 유형은<br />무엇일까요?
        </h1>
        <p className="mt-5 text-base leading-7 text-muted sm:text-lg">
          6개의 간단한 질문에 답하고, 내가 가장 즐겁게 참여할 수 있는<br className="hidden sm:block" /> 봉사 방식과 활동을 발견해 보세요.
        </p>

        <div className="mt-10 grid w-full grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {typeCards.map((card) => (
            <div key={card.label} className="rounded-[18px] border border-[#e6e6e1] bg-white px-3 py-5 shadow-[0_8px_25px_rgba(24,78,55,.04)]">
              <div className="mx-auto flex aspect-square w-[84px] items-center justify-center rounded-full" style={{ backgroundColor: card.tone }}>
                <Image src={card.image} alt="" width={70} height={70} className="h-[70px] w-[70px] object-contain" />
              </div>
              <p className="mt-3 text-sm font-bold leading-5">{card.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex w-full max-w-[520px] items-center justify-center gap-8 rounded-2xl bg-[#f2f4f1] px-6 py-5 text-sm text-muted sm:gap-14">
          <span><strong className="block text-base text-foreground">6개</strong>간단한 질문</span>
          <span className="h-9 w-px bg-[#d4d8d2]" />
          <span><strong className="block text-base text-foreground">약 60초</strong>예상 소요 시간</span>
          <span className="h-9 w-px bg-[#d4d8d2]" />
          <span><strong className="block text-base text-foreground">4가지</strong>봉사 유형</span>
        </div>
        <StartTestButton />
        <p className="mt-4 text-sm text-subtle">로그인 없이 바로 시작할 수 있어요</p>
      </section>
    </main>
  );
}

