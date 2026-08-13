import Image from "next/image";

import type { VolunteerResultData } from "@/data/volunteer-results";

type ResultSummaryProps = {
  result: VolunteerResultData;
  exportMode?: boolean;
};

export function ResultSummary({ result, exportMode = false }: ResultSummaryProps) {
  return (
    <section
      className={`relative overflow-hidden text-center ${exportMode ? "h-[515px] rounded-[20px] px-16 py-10" : "rounded-[20px] px-5 py-10 sm:px-10 sm:py-12"}`}
      style={{ backgroundColor: result.background }}
    >
      <span
        className="absolute -bottom-24 -left-24 h-52 w-52 rounded-full opacity-90"
        style={{ backgroundColor: result.accent }}
        aria-hidden="true"
      />
      <span
        className="absolute -right-24 -top-24 h-52 w-52 rounded-full opacity-90"
        style={{ backgroundColor: result.accent }}
        aria-hidden="true"
      />
      <div className="relative z-10 flex flex-col items-center">
        <p className={`${exportMode ? "text-[32px]" : "text-xl sm:text-2xl"} font-bold`} style={{ color: result.accent }}>
          나의 봉사 유형
        </p>
        <Image
          src={result.icon}
          alt=""
          width={175}
          height={162}
          unoptimized
          className={`${exportMode ? "mt-8 h-[162px] w-[175px]" : "mt-7 h-28 w-32 sm:h-36 sm:w-40"} object-contain`}
          loading="eager"
        />
        <h1 className={`${exportMode ? "mt-6 text-[36px]" : "mt-5 text-[clamp(2rem,5vw,2.5rem)]"} font-bold tracking-[-0.03em]`}>
          {result.name}
        </h1>
        <p className={`${exportMode ? "mt-4 text-2xl" : "mt-3 text-base sm:text-xl"} text-muted`}>
          {result.subtitle}
        </p>
        <div className={`${exportMode ? "mt-8 gap-6" : "mt-7 flex-wrap gap-2 sm:gap-3"} flex justify-center`}>
          {result.keywords.map((keyword) => (
            <span
              key={keyword}
              className={`${exportMode ? "px-4 py-2 text-xl" : "px-3 py-1.5 text-sm sm:text-base"} rounded-[10px] font-semibold`}
              style={{ backgroundColor: result.background, color: result.strong }}
            >
              {keyword}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
