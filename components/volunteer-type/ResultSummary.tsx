import Image from "next/image";

import type { VolunteerResultData } from "@/data/volunteer-results";

type ResultSummaryProps = {
  result: VolunteerResultData;
  exportMode?: boolean;
};

export function ResultSummary({ result, exportMode = false }: ResultSummaryProps) {
  const exactFrame = exportMode ? "h-[480px]" : "min-h-[560px] xl:h-[515px] xl:min-h-0";
  const eyebrowClass = exportMode ? "text-[28px]" : "text-2xl sm:text-[28px] xl:text-[32px]";
  const nameClass = exportMode ? "text-[32px]" : "text-[30px] sm:text-[34px] xl:text-[36px]";
  const subtitleClass = exportMode ? "text-xl" : "text-lg sm:text-xl xl:text-2xl";
  const keywordClass = exportMode ? "text-lg" : "text-base sm:text-lg xl:text-xl";

  return (
    <section
      className={`relative overflow-hidden rounded-[20px] px-5 text-center ${exactFrame}`}
      style={{ backgroundColor: result.background }}
    >
      <Image
        src={result.decoration}
        alt=""
        width={337}
        height={337}
        unoptimized
        className="absolute -left-[126px] top-[363px] h-[337px] w-[337px] max-w-none"
      />
      <Image
        src={result.decoration}
        alt=""
        width={337}
        height={337}
        unoptimized
        className="absolute left-[1027px] -top-[118px] h-[337px] w-[337px] max-w-none"
      />

      <div className={`relative z-10 flex h-full flex-col items-center ${exportMode ? "pt-8" : "pb-10 pt-10 xl:pb-0 xl:pt-[43px]"}`}>
        <p className={`${eyebrowClass} font-bold leading-normal tracking-[-0.03em]`} style={{ color: result.accent }}>
          나의 봉사 유형
        </p>
        <div className={`${exportMode ? "mt-8 h-[140px] w-[160px]" : "mt-11 h-[162px] w-[175px]"} flex items-center justify-center`}>
          <Image
            src={result.icon}
            alt=""
            width={result.iconWidth}
            height={result.iconHeight}
            unoptimized
            className={`${exportMode ? "max-h-[140px]" : "max-h-[162px]"} w-auto object-contain`}
            loading="eager"
          />
        </div>
        <h1 className={`${exportMode ? "mt-6" : "mt-8"} ${nameClass} font-bold leading-[41.6px] tracking-[-0.03em] text-[#101110]`}>
          {result.name}
        </h1>
        <p className={`${exportMode ? "mt-4" : "mt-5"} ${subtitleClass} leading-normal text-[#5e5e5d]`}>{result.subtitle}</p>
        <div className={`${exportMode ? "mt-4 gap-4" : "mt-5 gap-6"} flex flex-wrap justify-center`}>
          {result.keywords.map((keyword) => (
            <span
              key={keyword}
              className={`rounded-[10px] px-4 py-2 ${keywordClass} font-semibold leading-normal`}
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
