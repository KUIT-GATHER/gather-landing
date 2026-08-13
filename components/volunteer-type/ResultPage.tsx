import Link from "next/link";

import type { VolunteerType } from "@/data/volunteer-test";
import { volunteerResultData } from "@/data/volunteer-results";
import { ResultActions } from "./ResultActions";
import { ResultContent } from "./ResultContent";
import { ResultSummary } from "./ResultSummary";
import { VolunteerTypeHeader } from "./VolunteerTypeHeader";

type ResultPageProps = {
  type: VolunteerType;
  matchCount: number | null;
};

export function ResultPage({ type, matchCount }: ResultPageProps) {
  const result = volunteerResultData[type];

  return (
    <main className="min-h-screen bg-background" style={{ "--result-accent": result.accent } as React.CSSProperties}>
      <VolunteerTypeHeader backHref="/volunteer-type" />
      <div className="mx-auto w-full max-w-[1232px] px-5 py-10 sm:px-8 sm:py-14">
        <ResultSummary result={result} />
        <ResultContent result={result} matchCount={matchCount} />

        <section className="mt-6 rounded-[20px] bg-white px-5 py-7 sm:px-10 sm:py-8">
          <h2 className="text-xl font-bold sm:text-[28px]">지금 <span className="text-brand">Gather</span>에서 함께할 수 있어요</h2>
          <p className="mt-3 text-sm text-muted sm:text-base">당신의 유형과 잘 맞는 활동을 찾아봤어요.</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {result.tags.map((tag) => <span key={tag} className="rounded-lg px-3 py-2 text-sm font-semibold" style={{ backgroundColor: result.background, color: result.strong }}># {tag}</span>)}
          </div>
          <div className="mt-6 rounded-2xl px-6 py-10 text-center" style={{ backgroundColor: result.background }}>
            <p className="font-semibold">추천 공고를 불러오고 있어요.</p>
            <p className="mt-2 text-sm text-muted">잠시 후 이 유형과 맞는 활동을 확인할 수 있어요.</p>
          </div>
          <Link href={`/volunteers?category=${result.apiCategory}`} className="mt-5 inline-flex min-h-12 items-center justify-center rounded-xl border px-5 font-semibold" style={{ borderColor: result.accent, color: result.strong }}>
            추천 카테고리 둘러보기 →
          </Link>
        </section>

        <div className="mt-6 space-y-6">
          <ResultActions type={type} />
        </div>
      </div>

      <div aria-hidden="true" className="fixed left-[-10000px] top-0 w-[1233px] bg-background">
        <div id={`result-export-${type}`} className="w-[1233px] bg-background pb-10">
          <ResultSummary result={result} exportMode />
          <ResultContent result={result} matchCount={matchCount} exportMode includeCampaigns={false} />
        </div>
      </div>
    </main>
  );
}

