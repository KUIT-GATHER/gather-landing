import type { ReactNode } from "react";
import Image from "next/image";

import { interestCategories } from "@/components/landing/landing-data";

function JourneyStepCard({
  number,
  title,
  description,
  className,
  children,
}: {
  number: string;
  title: string;
  description: string;
  className: string;
  children?: ReactNode;
}) {
  return (
    <article
      className={`w-full shrink-0 rounded-2xl border border-[#e8ebe7] bg-white p-[25px] ${className}`}
      data-motion="journey-step"
      data-journey-side={number === "01" || number === "03" ? "right" : "left"}
    >
      <div className="h-6 pt-[5px] text-[10px] font-black leading-[15px] text-brand">STEP {number}</div>
      <div className="h-8 pt-2">
        <h3 className="text-base font-bold leading-6 text-[#101110]">{title}</h3>
      </div>
      <div className="pt-2">
        <p className="text-xs leading-[19.8px] text-[#70746f]">{description}</p>
      </div>
      {children}
    </article>
  );
}

export function JourneySection() {
  return (
    <section id="how-it-works" className="relative scroll-mt-24 overflow-hidden py-20 xl:h-[1785px] xl:py-0" data-motion-section="journey">
      <div className="pointer-events-none absolute left-[calc(50%-750px)] top-0 hidden h-[928px] w-[928px] rounded-full bg-[radial-gradient(circle,rgba(232,250,244,.55)_0%,rgba(232,250,244,.2)_48%,transparent_72%)] xl:block" aria-hidden="true" />
      <div className="relative mx-auto w-[calc(100%-40px)] max-w-[1232px] xl:h-full">
        <div className="text-center xl:absolute xl:left-1/2 xl:top-[72px] xl:-translate-x-1/2">
          <span className="inline-flex h-[29px] items-center justify-center rounded-[20px] bg-[#e8faf4] px-5 text-sm font-semibold leading-[16.5px] text-brand" data-motion="journey-heading">이용 방법</span>
          <h2 className="mt-[23px] text-[30px] font-bold leading-[46px] text-[#101110] sm:text-4xl xl:whitespace-nowrap" data-motion="journey-heading">Gather에서 시작하는 방법</h2>
        </div>

        <div className="mt-14 flex flex-col items-center gap-8 xl:mt-0 xl:block">
          <JourneyStepCard
            number="01"
            title="관심 분야 선택하기"
            description="환경, 교육, 복지 등 내가 관심 있는 분야를 선택해요."
            className="max-w-[310px] xl:absolute xl:left-[665px] xl:top-[258px] xl:h-[232px] xl:w-[310px]"
          >
            <div className="mt-[17px] flex flex-wrap gap-x-[6px] gap-y-[13px]">
              {interestCategories.map((category) => (
                <span key={category.label} className={`flex h-[34px] items-center justify-center gap-[3px] rounded-[23px] border-[0.8px] ${category.width}`} style={{ backgroundColor: category.background, borderColor: category.border }} data-motion="journey-chip">
                  <Image src={category.icon} alt="" width={14} height={14} className="h-[14px] w-[14px]" />
                  <span className="whitespace-nowrap text-[10.8px] font-semibold leading-3 text-[#5e5e5d]">{category.label}</span>
                </span>
              ))}
            </div>
          </JourneyStepCard>

          <JourneyStepCard
            number="02"
            title="나에게 맞는 봉사 찾기"
            description="가능한 날짜와 지역, 관심 분야를 입력하면 맞춤 봉사를 보여드려요."
            className="max-w-[310px] xl:absolute xl:left-[257px] xl:top-[580px] xl:h-[268px] xl:w-[310px]"
          >
            <div className="relative mt-[15px] h-[100px] w-[260px] max-w-full rounded-[9px] border-[0.8px] border-brand bg-[rgba(240,246,240,.58)] p-[9px]" data-motion="journey-volunteer-card">
              <div className="relative h-[77px] w-[66px] overflow-hidden rounded-[7px]">
                <Image src="/assets/landing/step-volunteer-plogging.png" alt="한강공원 플로깅 활동" fill sizes="66px" className="object-cover" />
              </div>
              <div className="absolute left-[86px] top-[11px]">
                <h4 className="text-[13px] font-semibold leading-[14.5px] text-[#0a0a0a]">한강공원 플로깅 🌿</h4>
                <p className="mt-[6px] text-[10.9px] leading-[11.6px] text-[#5e5e5d]">같이 한강 걸으면서 줍깅해요</p>
                <p className="mt-[3px] text-[10.2px] leading-[11.6px] text-[#5e5e5d]">여의도 · 26.00.00 · <strong className="font-semibold text-[#f76073]">D-4</strong></p>
              </div>
              <span className="absolute bottom-[9px] left-[86px] inline-flex h-[17px] items-center rounded-full border-[0.8px] border-[#fade9e] bg-[#fffbf1] px-[8px] text-[10px] text-[#5e5e5d]">문화</span>
            </div>
          </JourneyStepCard>

          <JourneyStepCard
            number="03"
            title="함께할 팀 만나기"
            description="비슷한 관심사를 가진 사람들과 팀을 만들어 함께 신청해요."
            className="max-w-[327px] xl:absolute xl:left-[665px] xl:top-[938px] xl:h-[232px] xl:w-[327px]"
          >
            <div className="mt-3 h-[85px] rounded-[14px] bg-[rgba(244,240,255,.79)] p-3">
              <p className="flex items-center gap-[3px] text-[13.6px] font-semibold leading-[21px] text-[#0a0a0a]">팀원 <span className="text-[10.6px] font-medium text-[#5b5b5b]">(12명)</span></p>
              <div className="mt-[6px] flex gap-[9px]">
                {[["김", "#78d997"], ["이", "#f76073"], ["박", "#7fc1fa"], ["최", "#f8d27d"], ["정", "#dc95d7"], ["+7", "#d9d9d9"]].map(([name, color]) => (
                  <span key={name} className="flex h-[33px] w-[33px] shrink-0 items-center justify-center rounded-full text-[10.6px] font-semibold text-[#fafaf8]" style={{ backgroundColor: color }} data-motion="journey-avatar">{name}</span>
                ))}
              </div>
            </div>
          </JourneyStepCard>

          <JourneyStepCard
            number="04"
            title="참여하고 경험 기록하기"
            description="활동 후 소감과 경험을 기록하고 다음 봉사로 이어가요."
            className="max-w-[310px] xl:absolute xl:left-[257px] xl:top-[1237px] xl:h-[353px] xl:w-[310px]"
          >
            <Image src="/assets/landing/journey-record-puzzle.png" alt="분야별 봉사 활동 기록" width={261} height={135} className="mt-3 h-auto w-[260px] max-w-full object-contain" data-motion="journey-record-puzzle" />
            <div className="mt-5 flex h-[53px] w-[260px] max-w-full items-start justify-between rounded-[9px] border-[0.8px] border-[#6270bc] px-[9px] py-[8px]" data-motion="journey-record-card">
              <div>
                <p className="text-[10.9px] font-semibold leading-[14.5px] text-[#0a0a0a]">어린이 독서 지도</p>
                <p className="mt-[6px] text-[10.1px] leading-[11.6px] text-[#a4a4a4]">2026.04.10 (토)&nbsp; 책읽는 친구들</p>
              </div>
              <span className="rounded-full bg-[#5e5e5d] px-[6px] py-[1px] text-[10.1px] leading-[14.5px] text-[#fafaf8]">시간 인증</span>
            </div>
          </JourneyStepCard>
        </div>

        <div className="pointer-events-none hidden xl:block" aria-hidden="true">
          <Image src="/assets/icons/timeline-line-step-2.svg" alt="" width={2} height={207} className="absolute left-[617px] top-[354px] h-[207px] w-0.5" data-motion="journey-line" />
          <Image src="/assets/icons/timeline-line-step-3.svg" alt="" width={1} height={280} className="absolute left-[616px] top-[676px] h-[280px] w-px" data-motion="journey-line" />
          <Image src="/assets/icons/timeline-line-step-4.svg" alt="" width={1} height={194} className="absolute left-[616px] top-[1034px] h-[194px] w-px" data-motion="journey-line" />
          {[
            ["/assets/icons/timeline-interest.svg", "left-[592px] top-[291px] bg-[#e2f8ee]", 26],
            ["/assets/icons/timeline-search.svg", "left-[592px] top-[613px]", 48],
            ["/assets/icons/timeline-team.svg", "left-[592px] top-[971px]", 48],
            ["/assets/icons/timeline-participate.svg", "left-[592px] top-[1243px]", 48],
          ].map(([icon, position, size]) => (
            <span key={String(icon)} className={`absolute z-10 flex h-12 w-12 items-center justify-center rounded-full ${position}`} data-motion="journey-icon">
              <Image src={String(icon)} alt="" width={Number(size)} height={Number(size)} className="object-contain" style={{ width: Number(size), height: Number(size) }} />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
