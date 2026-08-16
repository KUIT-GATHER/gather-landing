import Image from "next/image";

import type { ResultActivity, VolunteerResultData } from "@/data/volunteer-results";

type ResultContentProps = {
  result: VolunteerResultData;
  matchCount: number | null;
  exportMode?: boolean;
  includeCampaigns?: boolean;
};

function ResultSectionHeading({ icon, title, exportMode = false }: { icon: string; title: string; exportMode?: boolean }) {
  return (
    <div className="flex items-center gap-5">
      <Image src={icon} alt="" width={28} height={28} className="h-7 w-7 shrink-0" />
      <h2 className={`${exportMode ? "text-[28px]" : "text-xl sm:text-2xl xl:text-[28px]"} font-semibold leading-normal tracking-[-0.03em] text-[#0a0a0a]`}>{title}</h2>
    </div>
  );
}

function ActivityList({ items, result, exportMode = false }: { items: readonly ResultActivity[]; result: VolunteerResultData; exportMode?: boolean }) {
  return (
    <div className="flex flex-col gap-6">
      {items.map((item) => (
        <article key={item.title} className={`w-full rounded-[40px] border bg-white ${exportMode ? "px-10 py-8" : "px-5 py-6 sm:px-8 xl:px-10 xl:py-8"}`} style={{ borderColor: result.accent }}>
          <div className="flex flex-col gap-4">
            <h3 className={`${exportMode ? "text-[26px]" : "text-xl sm:text-2xl xl:text-[26px]"} font-medium leading-normal tracking-[-0.03em] text-[#0a0a0a]`}>{item.title}</h3>
            <p className={`${exportMode ? "text-2xl" : "text-base sm:text-xl xl:text-2xl"} leading-normal text-[#5e5e5d]`}>{item.description}</p>
          </div>
          <p className={`mt-5 inline-flex max-w-full items-center gap-3 rounded-[10px] px-4 py-2 ${exportMode ? "text-xl" : "text-sm sm:text-base xl:text-xl"} font-semibold leading-normal`} style={{ backgroundColor: result.background, color: result.strong }}>
            <span
              className="h-5 w-5 shrink-0"
              aria-hidden="true"
              style={{
                backgroundColor: result.strong,
                maskImage: "url(/assets/icons/result-check.svg)",
                maskPosition: "center",
                maskRepeat: "no-repeat",
                maskSize: "20px 20px",
                WebkitMaskImage: "url(/assets/icons/result-check.svg)",
                WebkitMaskPosition: "center",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskSize: "20px 20px",
              }}
            />
            {item.fit}
          </p>
        </article>
      ))}
    </div>
  );
}

export function ResultContent({
  result,
  matchCount,
  exportMode = false,
  includeCampaigns = true,
}: ResultContentProps) {
  const sectionPadding = exportMode ? "px-10 py-8" : "px-5 py-7 sm:px-8 xl:px-10 xl:py-8";
  const bodyText = exportMode ? "text-2xl" : "text-base sm:text-xl xl:text-2xl";

  return (
    <div className="mt-10 flex flex-col gap-10">
      <section className="min-h-[245px] rounded-[20px] pl-[9px]" style={{ backgroundColor: result.accent }}>
        <div className={`flex min-h-[245px] flex-col justify-center gap-6 rounded-[20px] bg-white ${sectionPadding}`}>
          <div className="flex items-center gap-5">
            <Image src="/assets/icons/result-reason.svg" alt="" width={28} height={28} className="h-7 w-7" />
            <h2 className={`${exportMode ? "text-[28px]" : "text-xl sm:text-2xl xl:text-[28px]"} font-bold leading-normal tracking-[-0.03em]`} style={{ color: result.strong }}>왜 이 결과가 나왔을까요?</h2>
          </div>
          <div className="flex flex-col gap-4">
            <p className={`${bodyText} leading-normal text-[#0a0a0a]`}>{result.reason}</p>
            <p className={`${exportMode ? "text-lg" : "text-sm sm:text-base xl:text-lg"} leading-normal text-[#545454]`}>
              {matchCount === null
                ? "이 유형의 특성이 가장 두드러졌어요."
                : `6개 답변 중 ${matchCount}개가 이 유형과 일치했어요.`}
            </p>
          </div>
        </div>
      </section>

      <section className={`rounded-[20px] bg-white ${sectionPadding}`}>
        <ResultSectionHeading icon="/assets/icons/result-strength.svg" title="주요 강점" exportMode={exportMode} />
        <ol className="mt-6 flex flex-col gap-4">
          {result.strengths.map((strength, index) => (
            <li key={strength} className={`flex items-center gap-5 ${bodyText} leading-normal text-[#0a0a0a]`}>
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-[#fafaf8]" style={{ backgroundColor: result.accent }}>{index + 1}</span>
              <span>{strength}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className={`flex flex-col gap-8 rounded-[20px] bg-white ${sectionPadding}`}>
        <ResultSectionHeading icon={result.volunteerExampleIcon} title="대표 봉사 예시" exportMode={exportMode} />
        <ActivityList items={result.examples} result={result} exportMode={exportMode} />
      </section>

      {includeCampaigns ? (
        <section className={`flex flex-col gap-8 rounded-[20px] bg-white ${sectionPadding}`}>
          <div className="flex flex-col gap-4">
            <ResultSectionHeading icon="/assets/icons/result-campaign.svg" title="추천 캠페인 및 공익활동" exportMode={exportMode} />
            <p className={`${exportMode ? "text-[22px]" : "text-base sm:text-xl xl:text-[22px]"} font-medium leading-normal tracking-[-0.03em] text-[#5e5e5d]`}>봉사 예시와 다른, 인식 개선 · 캠페인 영역의 활동이에요</p>
          </div>
          <ActivityList items={result.campaigns} result={result} exportMode={exportMode} />
        </section>
      ) : null}
    </div>
  );
}
