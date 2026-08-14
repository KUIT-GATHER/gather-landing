import Image from "next/image";

import { siteConfig } from "@/config/site";

export function HeroSection() {
  return (
    <section id="top" className="scroll-mt-24 pt-header xl:h-[810px]" data-motion-section="hero">
      <div className="relative mx-auto w-[calc(100%-40px)] max-w-[1232px] pb-[60px] pt-[72px] xl:h-[738px] xl:py-0 xl:pt-[132px]">
        <div className="relative z-10 w-full max-w-[545px]">
          <span className="inline-flex items-center justify-center rounded-[20px] bg-[#e8faf4] px-5 py-1.5 text-xs font-semibold leading-[16.5px] text-brand" data-motion="hero-badge">봉사 커뮤니티 플랫폼</span>
          <h1 className="mt-[34px] text-[clamp(42px,5vw,54px)] font-bold leading-[1.2] tracking-[-0.045em] text-[#0a0a0a] xl:leading-[62px]">
            <span className="block overflow-hidden"><span className="block" data-motion="hero-heading-line">하고 싶은 봉사,</span></span>
            <span className="block overflow-hidden"><span className="block text-brand" data-motion="hero-heading-line">함께할 사람까지</span></span>
          </h1>
          <p className="mt-5 text-[17px] leading-[1.65] text-muted sm:text-xl sm:leading-[30px]" data-motion="hero-description">
            흩어진 봉사 공고를 내 일정과 관심사에 맞게 찾고,<br className="hidden sm:block" /> 혼자가 망설여질 때는 함께할 팀을 만나보세요.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={siteConfig.volunteerListUrl} className="inline-flex h-[60px] w-full items-center justify-center rounded-[20px] bg-brand px-10 text-xl font-bold text-white sm:h-[72px] sm:w-auto sm:min-w-[189px]" data-motion="hero-cta">봉사 찾아보기</a>
            <a href="#volunteer-type" className="inline-flex h-[60px] w-full items-center justify-center rounded-[20px] border-2 border-brand bg-white/40 text-lg font-semibold text-brand sm:h-[72px] sm:w-[189px]" data-motion="hero-cta">봉사 유형 알아보기</a>
          </div>
          <p className="mt-6 text-sm leading-[16.5px] text-subtle" data-motion="hero-footer-copy">무료로 이용할 수 있어요</p>
        </div>

        <div className="pointer-events-none relative mx-auto mt-5 h-[380px] w-full max-w-[520px] md:h-[460px] xl:absolute xl:inset-0 xl:m-0 xl:h-auto xl:max-w-none" aria-hidden="true">
          <Image src="/assets/illustrations/landing/hero-glow-large.svg" alt="" width={841} height={841} className="absolute left-1/2 top-1/2 h-auto w-[430px] max-w-none -translate-x-1/2 -translate-y-1/2 -rotate-[173.68deg] xl:hidden" loading="eager" />
          <Image src="/assets/illustrations/landing/hero-glow-small.svg" alt="" width={470} height={470} className="absolute left-[9%] top-[3%] h-auto w-[300px] max-w-none -rotate-[168.88deg] xl:hidden" loading="eager" />

          <div className="absolute left-[563px] top-[-22px] hidden size-[764.177px] items-center justify-center xl:flex">
            <div className="relative size-[692.163px] -rotate-[173.68deg]">
              <div className="absolute inset-[-10.72%]">
                <Image src="/assets/illustrations/landing/hero-glow-large.svg" alt="" fill sizes="841px" className="max-w-none" loading="eager" />
              </div>
            </div>
          </div>
          <div className="absolute left-[721.48px] top-[142.54px] hidden size-[497.159px] items-center justify-center xl:flex">
            <div className="relative size-[423.46px] -rotate-[168.88deg]">
              <div className="absolute inset-[-5.53%]">
                <Image src="/assets/illustrations/landing/hero-glow-small.svg" alt="" fill sizes="470px" className="max-w-none" loading="eager" />
              </div>
            </div>
          </div>

          <div className="absolute left-[18%] top-[55px] w-[76px] xl:left-[862.48px] xl:top-[230.48px] xl:w-[100.119px]" data-motion="hero-puzzle-parallax" data-parallax-y="-34">
            <div data-motion="hero-puzzle" data-motion-x="-18" data-motion-y="16">
              <Image src="/assets/illustrations/landing/puzzle-companion.svg" alt="" width={100} height={100} className="block h-auto w-full -rotate-[8deg]" loading="eager" />
            </div>
          </div>
          <div className="absolute right-[14%] top-[40px] w-[62px] xl:left-[1050.53px] xl:right-auto xl:top-[212.75px] xl:w-[81.128px]" data-motion="hero-puzzle-parallax" data-parallax-y="-22">
            <div data-motion="hero-puzzle" data-motion-x="18" data-motion-y="12">
              <Image src="/assets/illustrations/landing/puzzle-support.svg" alt="" width={81} height={100} className="block h-auto w-full rotate-[9.25deg]" loading="eager" />
            </div>
          </div>
          <div className="absolute left-[22%] top-[230px] w-[78px] xl:left-[857.38px] xl:top-[381.3px] xl:w-[100.212px]" data-motion="hero-puzzle-parallax" data-parallax-y="-16">
            <div data-motion="hero-puzzle" data-motion-x="-14" data-motion-y="20">
              <Image src="/assets/illustrations/landing/puzzle-knowledge.svg" alt="" width={100} height={100} className="block h-auto w-full -rotate-[86.08deg]" loading="eager" />
            </div>
          </div>
          <div className="absolute right-[16%] top-[210px] w-[78px] xl:left-[1043.87px] xl:right-auto xl:top-[423.35px] xl:w-[100.716px]" data-motion="hero-puzzle-parallax" data-parallax-y="-12">
            <div data-motion="hero-puzzle" data-motion-x="18" data-motion-y="18">
              <Image src="/assets/illustrations/landing/puzzle-action.svg" alt="" width={101} height={100} className="block h-auto w-full rotate-[2.77deg]" loading="eager" />
            </div>
          </div>
        </div>
        <a href="#features" className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2.5 text-xs text-muted xl:flex">
          스크롤해서 더 알아보기
          <span className="flex h-10 w-[27px] justify-center rounded-[15px] border-2 border-brand pt-2"><span className="h-2 w-1 rounded-full bg-brand" data-motion="scroll-indicator-dot" /></span>
        </a>
      </div>
    </section>
  );
}
