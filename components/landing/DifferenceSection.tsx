import Image from "next/image";

const differenceItems = [
  "지역, 관심 분야를 기준으로 간편하게 검색",
  "관심사가 비슷한 사람들과 봉사 팀 구성",
  "참여 경험을 기록하고 지속적인 활동으로 연결",
  "따뜻한 봉사 커뮤니티에서 경험과 정보 공유",
] as const;

const journeyItems = [
  ["발견", "/assets/icons/journey-discover.svg"],
  ["연결", "/assets/icons/journey-connect.svg"],
  ["참여", "/assets/icons/journey-participate.svg"],
  ["성장", "/assets/icons/journey-grow.svg"],
] as const;

export function DifferenceSection() {
  return (
    <section className="relative z-0 py-20 xl:h-[696px] xl:py-0" data-motion-section="difference">
      <div className="relative mx-auto grid w-[calc(100%-40px)] max-w-[1232px] items-start gap-14 xl:block xl:h-full">
        <Image src="/assets/illustrations/landing/service-difference-glow.svg" alt="" width={847} height={847} className="pointer-events-none absolute left-[-270px] top-[-170px] h-auto w-[720px] max-w-none -rotate-15 -scale-y-100 xl:hidden" aria-hidden="true" />
        <div className="pointer-events-none absolute left-[-330px] top-[-232.03px] hidden h-[927.897px] w-[927.893px] items-center justify-center xl:flex" aria-hidden="true">
          <div className="flex-none -rotate-15 -scale-y-100">
            <div className="relative h-[757.626px] w-[757.62px]">
              <div className="absolute inset-[-5.87%]">
                <Image src="/assets/illustrations/landing/service-difference-glow.svg" alt="" fill sizes="847px" className="max-w-none" />
              </div>
            </div>
          </div>
        </div>
        <div className="text-center xl:absolute xl:left-0 xl:top-[143px] xl:h-[370px] xl:w-[610px] xl:text-left">
          <div className="h-auto xl:h-[226px]">
            <span className="inline-flex h-[29px] w-fit items-center justify-center rounded-[20px] bg-[#e8faf4] px-5 text-sm font-semibold leading-[16.5px] text-brand" data-motion="difference-copy">서비스 차별점</span>
            <div className="mt-2 h-auto pt-5 xl:h-[112px]">
              <h2 className="text-[30px] font-bold leading-[1.35] text-[#0a0a0a] sm:text-4xl sm:leading-[46px]" data-motion="difference-copy">공고를 보여주는 데서<span className="hidden xl:inline"><br /></span> 멈추지 않아요</h2>
            </div>
            <div className="mt-2 h-auto py-2.5 xl:h-[69px]">
              <p className="text-xl leading-[30px] text-[#5e5e5d]" data-motion="difference-copy">단순히 봉사 공고를 나열하는 포털이 아닙니다.<span className="hidden xl:inline"><br /></span> Gather는 발견부터 성장까지 이어지는 참여형 커뮤니티예요.</p>
            </div>
          </div>
          <ul className="mx-auto mt-8 w-fit max-w-full text-left text-sm leading-[21px] text-[#101110] xl:mx-0">
            {differenceItems.map((item, index) => <li key={item} className={`flex items-start gap-3 ${index === 0 ? "h-auto xl:h-[22px]" : "h-auto pt-2 xl:h-[30px]"}`} data-motion="difference-item"><span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e2f8ee] font-bold text-[11px] leading-[16.5px] text-brand">✓</span>{item}</li>)}
          </ul>
        </div>
        <div className="rounded-2xl border border-brand p-[33px] xl:absolute xl:right-0 xl:top-[207px] xl:h-[303px] xl:w-[498px]" data-motion="difference-journey">
          <h3 className="text-center text-lg font-semibold leading-6 text-[#101110]">봉사 경험의 전체 여정</h3>
          <div className="mt-6 grid grid-cols-4 text-center">
            {journeyItems.map(([label, icon]) => (
              <div key={label} className="flex flex-col items-center gap-2" data-motion="difference-icon">
                <Image src={icon} alt="" width={48} height={48} className="h-12 w-12" />
                <p className="text-[13px] font-semibold leading-[16.5px] text-[#70746f]">{label}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex h-[77px] items-center justify-center rounded-[14px] bg-white p-4 text-center text-sm font-medium leading-[22.1px] text-[#70746f]">
            <p>단순 공고 포털이 아닌,<br /><strong className="font-semibold text-brand">발견 → 연결 → 참여 → 성장</strong>으로</p>
          </div>
        </div>
      </div>
    </section>
  );
}
