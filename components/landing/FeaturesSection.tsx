import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";

import { landingFeatures, type LandingFeatureKind } from "@/components/landing/landing-data";

function FeaturePreview({ kind }: { kind: LandingFeatureKind }): ReactNode {
  if (kind === "volunteer") {
    return (
      <>
        <p className="text-[13px] font-normal leading-[16.5px] text-[#7b817b]">◉ 서울 · 어린이 돌봄</p>
        <div className="mt-2 flex items-center justify-between font-semibold">
          <span>마포구 아동 독서 지도</span>
          <span className="font-semibold text-brand">모집중</span>
        </div>
        <div className="mt-2 flex items-center justify-between font-semibold">
          <span>중랑구 방과후 멘토링</span>
          <span className="font-semibold text-brand">모집중</span>
        </div>
      </>
    );
  }

  if (kind === "team") {
    return (
      <>
        <p className="text-[13px] font-normal leading-[16.5px] text-[#7b817b]">◉ 같이 가실 분!</p>
        <div className="mt-2 flex h-[18px] items-center gap-2">
          <span className="inline-flex h-[23px] min-w-[49px] items-center justify-center rounded-full bg-brand px-2 text-[10px] font-bold leading-[15px] text-white">김 이 박</span>
          <span className="font-semibold text-[#101110]">+3</span>
        </div>
        <p className="mt-2 font-semibold">환경 정화 봉사 팀 (3/5)</p>
      </>
    );
  }

  if (kind === "record") {
    return (
      <>
        <p className="text-[13px] font-normal leading-[16.5px] text-[#7b817b]">◉ 나의 봉사 기록</p>
        <div className="mt-2 flex justify-between font-semibold"><span>● 아동 독서 지도</span><span className="text-point">+2h</span></div>
        <div className="mt-2 flex justify-between font-semibold"><span>● 환경 정화 활동</span><span className="text-point">+3h</span></div>
        <p className="mt-2 font-semibold">총 <span className="text-point">12.5h</span> 기록됨</p>
      </>
    );
  }

  return (
    <>
      <p className="text-[13px] font-normal leading-[16.5px] text-[#7b817b]">◉ 커뮤니티 인기글</p>
      <p className="mt-2 font-semibold">▢ 처음 봉사 후기 공유합니다</p>
      <p className="mt-2 font-semibold">▢ 어르신 말벗 봉사 팁</p>
    </>
  );
}

export function FeaturesSection() {
  return (
    <section id="features" className="relative z-10 scroll-mt-24 py-20 xl:h-[828px] xl:py-0 xl:pt-[31px]" data-motion-section="features">
      <div className="mx-auto w-[calc(100%-40px)] max-w-[1170px]">
        <div className="text-center">
          <span className="inline-flex items-center justify-center rounded-[20px] bg-brand-soft px-5 py-1.5 text-sm font-semibold leading-[16.5px] text-brand" data-motion="feature-heading">주요 기능</span>
          <h2 className="mt-4 text-[30px] font-bold leading-[1.35] tracking-[-0.03em] sm:text-4xl sm:leading-[46px]" data-motion="feature-heading">봉사를 찾는 순간부터,<br /><span className="text-brand">함께하고 성장하는 순간까지</span></h2>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:mt-[47px] xl:grid-cols-[575px_575px] xl:grid-rows-[283.44px_309.44px]">
          {landingFeatures.map((feature) => (
            <article key={feature.title} className="min-w-0 rounded-2xl border border-[#d9d9d9] bg-white p-[29px]" data-motion="feature-card">
              {feature.kind === "volunteer" ? (
                <Image src={feature.icon} alt="" width={40} height={40} className="h-10 w-10" />
              ) : (
                <div className="flex h-10 w-10 items-center justify-center rounded-[14px] border border-[var(--feature-accent)] bg-[var(--feature-soft)]" style={{ "--feature-accent": feature.accent, "--feature-soft": feature.soft } as CSSProperties}>
                  <Image src={feature.icon} alt="" width={26} height={26} className="h-[26px] w-[26px] object-contain" />
                </div>
              )}
              <h3 className="mt-3 text-xl font-semibold leading-[25.5px] text-[#101110]">{feature.title}</h3>
              <p className="mt-[5px] text-sm font-medium leading-[21.45px] text-[#70746f]">{feature.description}</p>
              <div className="mt-5 rounded-[14px] border border-[#edf0ec] bg-transparent p-[13px] text-[13px] leading-[18px] text-[#101110] shadow-[0_1px_3px_rgba(0,0,0,.1),0_1px_2px_rgba(0,0,0,.1)]" data-motion="feature-preview"><FeaturePreview kind={feature.kind} /></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
