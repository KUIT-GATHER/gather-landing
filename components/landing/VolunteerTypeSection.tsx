import Image from "next/image";
import Link from "next/link";

export function VolunteerTypeSection() {
  return (
    <section id="volunteer-type" className="scroll-mt-24 bg-[linear-gradient(90deg,#e3f7eb_0%,#f5fbf7_68%,#fff_100%)] py-20 xl:h-[609px] xl:py-0" data-motion-section="volunteer-type">
      <div className="relative mx-auto flex w-[calc(100%-40px)] max-w-[1232px] flex-col gap-14 xl:h-full xl:block">
        <div className="text-center xl:absolute xl:left-0 xl:top-[133px] xl:h-[347px] xl:w-[610px] xl:text-left">
          <div className="h-auto xl:h-[226px]">
            <span className="inline-flex h-[29px] w-fit items-center justify-center rounded-[20px] bg-[#f6fffc] px-5 text-sm font-semibold leading-[16.5px] text-brand" data-motion="type-copy">봉사 유형 테스트</span>
            <div className="mt-2 h-auto pt-5 xl:h-[112px]">
              <h2 className="text-[30px] font-bold leading-[1.35] text-[#0a0a0a] sm:text-4xl sm:leading-[46px]" data-motion="type-copy">나는 어떤 방식으로<span className="hidden xl:inline"><br /></span> <span className="text-brand">세상을 돕는 사람일까?</span></h2>
            </div>
            <div className="mt-2 h-auto py-2.5 xl:h-[69px]">
              <p className="text-xl leading-[30px] text-[#5e5e5d]" data-motion="type-copy">몇 가지 질문에 답하고 나에게 잘 맞는 봉사 방식과<span className="hidden xl:inline"><br /></span> 추천 활동을 확인해 보세요.</p>
            </div>
          </div>
          <div className="mt-0 flex min-h-[61px] flex-wrap items-center justify-center gap-x-4 gap-y-3 text-sm text-[#5e5e5d] xl:justify-start">
            {[
              ["/assets/icons/type-test-clock.svg", "약 60초 소요"],
              ["/assets/icons/type-test-unlock.svg", "로그인 없이 시작"],
              ["/assets/icons/type-test-save.svg", "결과 카드 저장 가능"],
            ].map(([icon, label]) => <span key={label} className="flex items-center gap-3" data-motion="type-copy"><Image src={icon} alt="" width={24} height={24} className="h-6 w-6" />{label}</span>)}
          </div>
          <Link href="/volunteer-type" className="flex h-[56px] w-[220px] mx-auto mt-6 items-center justify-center rounded-[15px] bg-brand text-[15px] font-bold leading-[22px] text-white transition hover:bg-brand-strong xl:mx-0 xl:mt-0" data-motion="type-action">나의 봉사 유형 알아보기 →</Link>
        </div>

        <div className="relative mx-auto h-[367px] w-full max-w-[420px] xl:absolute xl:left-[856px] xl:top-[141px]" aria-hidden="true">
          <div className="absolute left-1/2 top-0 h-[367px] w-[420px] origin-top -translate-x-1/2 scale-[.66] min-[375px]:scale-[.78] sm:scale-100">
            <div
              className="absolute left-[68.81px] top-[25.28px] flex h-[331.05px] w-[331.06px] items-center justify-center"
              style={{ filter: "drop-shadow(1px 4px 3px rgba(0, 0, 0, 0.12))" }}
              data-motion="type-puzzle-piece"
              data-motion-x="24"
              data-motion-y="10"
            >
              <div className="relative h-[290.75px] w-[290.84px] flex-none -scale-x-100 rotate-[-171.38deg]">
                <Image src="/assets/illustrations/landing/type-test-piece-right.svg" alt="" width={298} height={298} className="absolute left-[-3.46px] top-0 h-[297.68px] w-[297.68px] max-w-none" />
              </div>
            </div>
            <div
              className="absolute left-0 top-[16.18px] flex h-[339.8px] w-[339.8px] items-center justify-center"
              style={{ filter: "drop-shadow(1px 4px 3px rgba(0, 0, 0, 0.12))" }}
              data-motion="type-puzzle-piece"
              data-motion-x="-24"
              data-motion-y="8"
            >
              <div className="relative h-[290.75px] w-[290.84px] flex-none -scale-x-100 rotate-[169.27deg]">
                <Image src="/assets/illustrations/landing/type-test-piece-back.svg" alt="" width={298} height={298} className="absolute left-[-3.46px] top-0 h-[297.67px] w-[297.68px] max-w-none" />
              </div>
            </div>
            <div
              className="absolute left-[50.91px] top-0 z-10 flex h-[331.06px] w-[331.14px] items-center justify-center"
              style={{ filter: "drop-shadow(2px 6px 4px rgba(0, 0, 0, 0.14))" }}
              data-motion="type-puzzle-piece"
              data-motion-x="0"
              data-motion-y="21"
            >
              <div className="relative h-[290.75px] w-[290.84px] flex-none -scale-y-100 rotate-[8.62deg]">
                <Image src="/assets/illustrations/landing/type-test-piece-front.svg" alt="" width={305} height={307} className="absolute left-[-4.42px] top-0 h-[306.91px] w-[305.11px] max-w-none" />
              </div>
            </div>
            <div className="absolute left-[147.95px] top-[108.85px] z-20 flex h-[40.73px] w-[93.26px] items-center justify-center" data-motion="type-puzzle-answer">
              <span className="flex h-[35.97px] w-[90.19px] rotate-[7.77deg] items-start justify-center text-center text-[15.63px] font-medium leading-[23.45px] text-[#bbb]">든든한 지원가</span>
            </div>
            <div className="absolute left-[135px] top-[138px] z-20 flex h-[83.68px] w-[99.11px] items-center justify-center" data-motion="type-puzzle-answer">
              <div className="relative h-[72.15px] w-[90.19px] rotate-[7.77deg]">
                <span className="absolute left-1/2 top-[-4.41px] -translate-x-1/2 text-[60.99px] font-black leading-[91.49px] text-brand">?</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
