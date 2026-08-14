import Image from "next/image";

import { siteConfig } from "@/config/site";

export function BottomCtaSection() {
  return (
    <section className="bg-[#fafaf8] py-16 xl:h-[579px] xl:py-[90px]" data-motion-section="bottom-cta">
      <div className="mx-auto flex min-h-[399px] w-[calc(100%-40px)] max-w-[949px] flex-col items-center justify-center rounded-[20px] bg-[linear-gradient(114.284deg,#fafafa_32.074%,#d4fddc_102.25%)] px-5 py-12 text-center sm:px-10 xl:py-0" data-motion="bottom-cta-panel">
        <div className="flex flex-col items-center gap-9">
          <div className="flex h-[46px] items-center gap-2" aria-hidden="true">
            <Image src="/assets/icons/cta-discover.svg" alt="" width={46} height={46} className="h-[46px] w-[46px]" data-motion="bottom-cta-icon" />
            <Image src="/assets/icons/cta-connect.svg" alt="" width={46} height={46} className="h-[46px] w-[46px]" data-motion="bottom-cta-icon" />
            <span className="flex h-[46px] w-[46px] items-center justify-center rounded-[10px] bg-[#fff3ff]" data-motion="bottom-cta-icon">
              <Image src="/assets/icons/cta-participate.svg" alt="" width={26} height={26} className="h-[26px] w-[26px]" />
            </span>
            <span className="flex h-[46px] w-[46px] items-center justify-center rounded-[10px] bg-[#f1f8ff]" data-motion="bottom-cta-icon">
              <Image src="/assets/icons/cta-grow.svg" alt="" width={21} height={26} className="h-[26px] w-[21px]" />
            </span>
          </div>
          <div>
            <h2 className="text-[30px] font-bold leading-[1.3] text-[#101110] sm:text-4xl sm:leading-[normal]" data-motion="bottom-cta-copy">
              나와 맞는 첫 봉사를<br />
              <span className="text-brand">시작해볼까요?</span>
            </h2>
            <p className="mt-3 text-base font-medium leading-normal text-[#18bd77] sm:text-lg" data-motion="bottom-cta-copy">작은 관심이 새로운 만남과 변화의 시작이 될 수 있어요.</p>
          </div>
          <div className="flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row">
            <a href={siteConfig.gatherWebUrl} className="inline-flex h-[62px] w-full items-center justify-center rounded-[10px] bg-brand text-lg font-semibold leading-[22px] text-white transition hover:bg-brand-strong sm:w-[174px]" data-motion="bottom-cta-action">봉사 찾아보기</a>
            <a href="#volunteer-type" className="inline-flex h-[62px] w-full items-center justify-center rounded-[10px] border-2 border-brand bg-white/40 text-lg font-semibold leading-[22px] text-brand sm:w-[216px]" data-motion="bottom-cta-action">봉사 유형 알아보기</a>
          </div>
        </div>
      </div>
    </section>
  );
}
