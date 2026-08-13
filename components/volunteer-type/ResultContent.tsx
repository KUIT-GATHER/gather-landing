import type { VolunteerResultData, ResultActivity } from "@/data/volunteer-results";

type ResultContentProps = {
  result: VolunteerResultData;
  matchCount: number | null;
  exportMode?: boolean;
  includeCampaigns?: boolean;
};

function ActivityList({ items, result, exportMode }: { items: readonly ResultActivity[]; result: VolunteerResultData; exportMode?: boolean }) {
  return (
    <div className="mt-7 space-y-4">
      {items.map((item) => (
        <article
          key={item.title}
          className={`${exportMode ? "rounded-[40px] px-10 py-7" : "rounded-[24px] px-5 py-5 sm:px-8 sm:py-6"} border bg-white`}
          style={{ borderColor: result.accent }}
        >
          <h3 className={`${exportMode ? "text-[26px]" : "text-lg sm:text-xl"} font-semibold`}>{item.title}</h3>
          <p className={`${exportMode ? "mt-3 text-2xl" : "mt-2 text-base"} leading-relaxed text-muted`}>{item.description}</p>
          <p
            className={`${exportMode ? "mt-4 text-xl" : "mt-4 text-sm sm:text-base"} inline-flex rounded-[10px] px-4 py-2 font-semibold`}
            style={{ backgroundColor: result.background, color: result.strong }}
          >
            ✓&nbsp; {item.fit}
          </p>
        </article>
      ))}
    </div>
  );
}

export function ResultContent({ result, matchCount, exportMode = false, includeCampaigns = true }: ResultContentProps) {
  const cardClass = exportMode
    ? "rounded-[20px] bg-white px-10 py-8"
    : "rounded-[20px] bg-white px-5 py-7 sm:px-10 sm:py-8";
  const headingClass = exportMode ? "text-[28px]" : "text-xl sm:text-[28px]";

  return (
    <div className={`${exportMode ? "mt-10 space-y-10" : "mt-10 space-y-6"}`}>
      <section className={cardClass} style={{ boxShadow: `-8px 0 0 ${result.accent}` }}>
        <h2 className={`${headingClass} font-bold tracking-[-0.025em]`} style={{ color: result.strong }}>🔍&nbsp; 왜 이 결과가 나왔을까요?</h2>
        <p className={`${exportMode ? "mt-6 text-2xl" : "mt-5 text-base sm:text-lg"} leading-[1.7]`}>{result.reason}</p>
        <p className={`${exportMode ? "mt-4 text-lg" : "mt-3 text-sm"} text-muted`}>
          {matchCount === null
            ? "이 유형의 특성이 가장 두드러졌어요."
            : `6개 답변 중 ${matchCount}개가 이 유형과 일치했어요.`}
        </p>
      </section>

      <section className={cardClass}>
        <h2 className={`${headingClass} font-bold tracking-[-0.025em]`}>⭐&nbsp; 주요 강점</h2>
        <ol className={`${exportMode ? "mt-6 space-y-4 text-2xl" : "mt-6 space-y-4 text-base sm:text-lg"}`}>
          {result.strengths.map((strength, index) => (
            <li key={strength} className="flex items-start gap-4">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white" style={{ backgroundColor: result.accent }}>{index + 1}</span>
              <span className="leading-relaxed">{strength}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className={cardClass}>
        <h2 className={`${headingClass} font-bold tracking-[-0.025em]`}>🤝&nbsp; 대표 봉사 예시</h2>
        <ActivityList items={result.examples} result={result} exportMode={exportMode} />
      </section>

      {includeCampaigns ? (
        <section className={cardClass}>
          <h2 className={`${headingClass} font-bold tracking-[-0.025em]`}>📣&nbsp; 추천 캠페인 및 공익활동</h2>
          <p className="mt-3 text-sm text-muted sm:text-base">봉사 예시와 다른, 인식 개선 · 캠페인 영역의 활동이에요</p>
          <ActivityList items={result.campaigns} result={result} />
        </section>
      ) : null}
    </div>
  );
}

