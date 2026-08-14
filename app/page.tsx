import Image from "next/image";
import Link from "next/link";

import { BrandLogo } from "@/components/common/BrandLogo";
import { LandingHeader } from "@/components/landing/LandingHeader";
import { siteConfig } from "@/config/site";

const features = [
  {
    title: "봉사 찾기",
    description: "지역, 날짜, 관심 분야에 맞는 봉사를 한곳에서 찾아보세요.",
    icon: "/assets/icons/search.svg",
    accent: "#00c77b",
    soft: "#f1fffd",
    preview: (
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
    ),
  },
  {
    title: "함께할 팀 찾기",
    description: "혼자가 망설여진다면 비슷한 관심사의 사람들과 함께하세요.",
    icon: "/assets/icons/team.svg",
    accent: "#ffc247",
    soft: "#fffbf1",
    preview: (
      <>
        <p className="text-[13px] font-normal leading-[16.5px] text-[#7b817b]">◉ 같이 가실 분!</p>
        <div className="mt-2 flex h-[18px] items-center gap-2">
          <span className="inline-flex h-[23px] min-w-[49px] items-center justify-center rounded-full bg-brand px-2 text-[10px] font-bold leading-[15px] text-white">김 이 박</span>
          <span className="font-semibold text-[#101110]">+3</span>
        </div>
        <p className="mt-2 font-semibold">환경 정화 봉사 팀 (3/5)</p>
      </>
    ),
  },
  {
    title: "활동 기록",
    description: "신청 일정과 참여 경험을 모아 나만의 기록으로 남겨보세요.",
    icon: "/assets/icons/footprints.svg",
    accent: "#d197d1",
    soft: "#fff3ff",
    preview: (
      <>
        <p className="text-[13px] font-normal leading-[16.5px] text-[#7b817b]">◉ 나의 봉사 기록</p>
        <div className="mt-2 flex justify-between font-semibold"><span>● 아동 독서 지도</span><span className="text-point">+2h</span></div>
        <div className="mt-2 flex justify-between font-semibold"><span>● 환경 정화 활동</span><span className="text-point">+3h</span></div>
        <p className="mt-2 font-semibold">총 <span className="text-point">12.5h</span> 기록됨</p>
      </>
    ),
  },
  {
    title: "커뮤니티",
    description: "봉사 경험과 유용한 정보를 따뜻하게 나눠보세요.",
    icon: "/assets/icons/community.svg",
    accent: "#79baff",
    soft: "#f1f8ff",
    preview: (
      <>
        <p className="text-[13px] font-normal leading-[16.5px] text-[#7b817b]">◉ 커뮤니티 인기글</p>
        <p className="mt-2 font-semibold">▢ 처음 봉사 후기 공유합니다</p>
        <p className="mt-2 font-semibold">▢ 어르신 말벗 봉사 팁</p>
      </>
    ),
  },
] as const;

const interestCategories = [
  { label: "환경", icon: "/assets/icons/category-environment.svg", background: "#f1fffd", border: "#82d3ca", width: "w-[61px]" },
  { label: "교육", icon: "/assets/icons/category-education.svg", background: "#eef1ff", border: "#828ed2", width: "w-[61px]" },
  { label: "복지", icon: "/assets/icons/category-welfare.svg", background: "#fff3ff", border: "#d197d1", width: "w-[61px]" },
  { label: "문화", icon: "/assets/icons/category-culture.svg", background: "#fffbf1", border: "#fade9e", width: "w-[61px]" },
  { label: "지역 연계", icon: "/assets/icons/category-local.svg", background: "#f2fbf4", border: "#ccead5", width: "w-[82px]" },
  { label: "해외", icon: "/assets/icons/category-global.svg", background: "#f1f8ff", border: "#a6ccf4", width: "w-[61px]" },
] as const;

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
  children?: React.ReactNode;
}) {
  return (
    <article className={`w-full shrink-0 rounded-2xl border border-[#e8ebe7] bg-white p-[25px] ${className}`}>
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

export default function Home() {
  return (
    <>
      <LandingHeader />
      <main className="overflow-hidden">
        <section id="top" className="scroll-mt-24 pt-header xl:h-[810px]">
          <div className="relative mx-auto w-[calc(100%-40px)] max-w-[1232px] pb-[60px] pt-[72px] xl:h-[738px] xl:py-0 xl:pt-[132px]">
            <div className="relative z-10 w-full max-w-[545px]">
              <span className="inline-flex items-center justify-center rounded-[20px] bg-[#e8faf4] px-5 py-1.5 text-xs font-semibold leading-[16.5px] text-brand">봉사 커뮤니티 플랫폼</span>
              <h1 className="mt-[34px] text-[clamp(42px,5vw,54px)] font-bold leading-[1.2] tracking-[-0.045em] text-[#0a0a0a] xl:leading-[62px]">
                하고 싶은 봉사,<br />
                <span className="text-brand">함께할 사람까지</span>
              </h1>
              <p className="mt-5 text-[17px] leading-[1.65] text-muted sm:text-xl sm:leading-[30px]">
                흩어진 봉사 공고를 내 일정과 관심사에 맞게 찾고,<br className="hidden sm:block" /> 혼자가 망설여질 때는 함께할 팀을 만나보세요.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href={siteConfig.volunteerListUrl} className="inline-flex h-[60px] w-full items-center justify-center rounded-[20px] bg-brand px-10 text-xl font-bold text-white sm:h-[72px] sm:w-auto sm:min-w-[189px]">봉사 찾아보기</a>
                <a href="#volunteer-type" className="inline-flex h-[60px] w-full items-center justify-center rounded-[20px] border-2 border-brand bg-white/40 text-lg font-semibold text-brand sm:h-[72px] sm:w-[189px]">봉사 유형 알아보기</a>
              </div>
              <p className="mt-6 text-sm leading-[16.5px] text-subtle">무료로 이용할 수 있어요</p>
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

              <Image src="/assets/illustrations/landing/puzzle-companion.svg" alt="" width={100} height={100} className="absolute left-[18%] top-[55px] h-auto w-[76px] -rotate-[8deg] xl:left-[862.48px] xl:top-[230.48px] xl:w-[100.119px]" loading="eager" />
              <Image src="/assets/illustrations/landing/puzzle-support.svg" alt="" width={81} height={100} className="absolute right-[14%] top-[40px] h-auto w-[62px] rotate-[9.25deg] xl:left-[1050.53px] xl:right-auto xl:top-[212.75px] xl:w-[81.128px]" loading="eager" />
              <Image src="/assets/illustrations/landing/puzzle-knowledge.svg" alt="" width={100} height={100} className="absolute left-[22%] top-[230px] h-auto w-[78px] -rotate-[86.08deg] xl:left-[857.38px] xl:top-[381.3px] xl:w-[100.212px]" loading="eager" />
              <Image src="/assets/illustrations/landing/puzzle-action.svg" alt="" width={101} height={100} className="absolute right-[16%] top-[210px] h-auto w-[78px] rotate-[2.77deg] xl:left-[1043.87px] xl:right-auto xl:top-[423.35px] xl:w-[100.716px]" loading="eager" />
            </div>
            <a href="#features" className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2.5 text-xs text-muted xl:flex">
              스크롤해서 더 알아보기
              <span className="flex h-10 w-[27px] justify-center rounded-[15px] border-2 border-brand pt-2 before:h-2 before:w-1 before:rounded-full before:bg-brand" />
            </a>
          </div>
        </section>

        <section id="features" className="relative z-10 scroll-mt-24 py-20 xl:h-[828px] xl:py-0 xl:pt-[31px]">
          <div className="mx-auto w-[calc(100%-40px)] max-w-[1170px]">
            <div className="text-center">
              <span className="inline-flex items-center justify-center rounded-[20px] bg-brand-soft px-5 py-1.5 text-sm font-semibold leading-[16.5px] text-brand">주요 기능</span>
              <h2 className="mt-4 text-[30px] font-bold leading-[1.35] tracking-[-0.03em] sm:text-4xl sm:leading-[46px]">봉사를 찾는 순간부터,<br /><span className="text-brand">함께하고 성장하는 순간까지</span></h2>
            </div>
            <div className="mt-14 grid gap-5 md:grid-cols-2 xl:mt-[47px] xl:grid-cols-[575px_575px] xl:grid-rows-[283.44px_309.44px]">
              {features.map((feature) => (
                <article key={feature.title} className="min-w-0 rounded-2xl border border-[#d9d9d9] bg-white p-[29px]">
                  {feature.title === "봉사 찾기" ? (
                    <Image src={feature.icon} alt="" width={40} height={40} className="h-10 w-10" />
                  ) : (
                    <div className="flex h-10 w-10 items-center justify-center rounded-[14px] border border-[var(--feature-accent)] bg-[var(--feature-soft)]" style={{ "--feature-accent": feature.accent, "--feature-soft": feature.soft } as React.CSSProperties}>
                      <Image src={feature.icon} alt="" width={26} height={26} className="h-[26px] w-[26px] object-contain" />
                    </div>
                  )}
                  <h3 className="mt-3 text-xl font-semibold leading-[25.5px] text-[#101110]">{feature.title}</h3>
                  <p className="mt-[5px] text-sm font-medium leading-[21.45px] text-[#70746f]">{feature.description}</p>
                  <div className="mt-5 rounded-[14px] border border-[#edf0ec] bg-transparent p-[13px] text-[13px] leading-[18px] text-[#101110] shadow-[0_1px_3px_rgba(0,0,0,.1),0_1px_2px_rgba(0,0,0,.1)]">{feature.preview}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative z-0 py-20 xl:h-[696px] xl:py-0">
          <div className="relative mx-auto grid w-[calc(100%-40px)] max-w-[1232px] items-start gap-14 lg:grid-cols-[1.1fr_.9fr] xl:block xl:h-full">
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
            <div className="xl:absolute xl:left-0 xl:top-[143px] xl:h-[370px] xl:w-[610px]">
              <div className="h-[226px]">
                <span className="inline-flex h-[29px] items-center justify-center rounded-[20px] bg-[#e8faf4] px-5 text-sm font-semibold leading-[16.5px] text-brand">서비스 차별점</span>
                <div className="mt-2 h-[112px] pt-5">
                  <h2 className="text-4xl font-bold leading-[46px] text-[#0a0a0a]">공고를 보여주는 데서<br />멈추지 않아요</h2>
                </div>
                <div className="mt-2 h-[69px] py-2.5">
                  <p className="text-xl leading-[30px] text-[#5e5e5d]">단순히 봉사 공고를 나열하는 포털이 아닙니다.<br />Gather는 발견부터 성장까지 이어지는 참여형 커뮤니티예요.</p>
                </div>
              </div>
              <ul className="mt-8 text-sm leading-[21px] text-[#101110]">
                {[
                  "지역, 관심 분야를 기준으로 간편하게 검색",
                  "관심사가 비슷한 사람들과 봉사 팀 구성",
                  "참여 경험을 기록하고 지속적인 활동으로 연결",
                  "따뜻한 봉사 커뮤니티에서 경험과 정보 공유",
                ].map((item, index) => <li key={item} className={`flex items-start gap-3 ${index === 0 ? "h-[22px]" : "h-[30px] pt-2"}`}><span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e2f8ee] font-bold text-[11px] leading-[16.5px] text-brand">✓</span>{item}</li>)}
              </ul>
            </div>
            <div className="rounded-2xl border border-brand p-[33px] xl:absolute xl:right-0 xl:top-[207px] xl:h-[303px] xl:w-[498px]">
              <h3 className="text-center text-lg font-semibold leading-6 text-[#101110]">봉사 경험의 전체 여정</h3>
              <div className="mt-6 grid grid-cols-4 text-center">
                {[
                  ["발견", "/assets/icons/journey-discover.svg"],
                  ["연결", "/assets/icons/journey-connect.svg"],
                  ["참여", "/assets/icons/journey-participate.svg"],
                  ["성장", "/assets/icons/journey-grow.svg"],
                ].map(([label, icon]) => (
                  <div key={label} className="flex flex-col items-center gap-2">
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

        <section id="how-it-works" className="relative scroll-mt-24 overflow-hidden py-20 xl:h-[1785px] xl:py-0">
          <div className="pointer-events-none absolute left-[calc(50%-750px)] top-0 hidden h-[928px] w-[928px] rounded-full bg-[radial-gradient(circle,rgba(232,250,244,.55)_0%,rgba(232,250,244,.2)_48%,transparent_72%)] xl:block" aria-hidden="true" />
          <div className="relative mx-auto w-[calc(100%-40px)] max-w-[1232px] xl:h-full">
            <div className="text-center xl:absolute xl:left-1/2 xl:top-[72px] xl:-translate-x-1/2">
              <span className="inline-flex h-[29px] items-center justify-center rounded-[20px] bg-[#e8faf4] px-5 text-sm font-semibold leading-[16.5px] text-brand">이용 방법</span>
              <h2 className="mt-[23px] text-[30px] font-bold leading-[46px] text-[#101110] sm:text-4xl xl:whitespace-nowrap">Gather에서 시작하는 방법</h2>
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
                    <span key={category.label} className={`flex h-[34px] items-center justify-center gap-[3px] rounded-[23px] border-[0.8px] ${category.width}`} style={{ backgroundColor: category.background, borderColor: category.border }}>
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
                <div className="relative mt-[15px] h-[100px] w-[260px] max-w-full rounded-[9px] border-[0.8px] border-brand bg-[rgba(240,246,240,.58)] p-[9px]">
                  <div className="relative h-[77px] w-[66px] overflow-hidden rounded-[7px]">
                    <Image src="/assets/landing/step-volunteer-plogging.png" alt="한강공원 플로깅 활동" fill sizes="66px" className="object-cover" />
                  </div>
                  <div className="absolute left-[86px] top-[11px]">
                    <h4 className="text-[13px] font-semibold leading-[14.5px] text-[#0a0a0a]">한강공원 플로깅 🌿</h4>
                    <p className="mt-[6px] text-[10.9px] leading-[11.6px] text-[#5e5e5d]">같이 한강 걸으면서 줍깅해요</p>
                    <p className="mt-[3px] text-[10.2px] leading-[11.6px] text-[#5e5e5d]">여의도 · 26.05.16 · <strong className="font-semibold text-[#f76073]">D-4</strong></p>
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
                      <span key={name} className="flex h-[33px] w-[33px] shrink-0 items-center justify-center rounded-full text-[10.6px] font-semibold text-[#fafaf8]" style={{ backgroundColor: color }}>{name}</span>
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
                <Image src="/assets/landing/journey-record-puzzle.png" alt="분야별 봉사 활동 기록" width={261} height={135} className="mt-3 h-auto w-[260px] max-w-full object-contain" />
                <div className="mt-5 flex h-[53px] w-[260px] max-w-full items-start justify-between rounded-[9px] border-[0.8px] border-[#6270bc] px-[9px] py-[8px]">
                  <div>
                    <p className="text-[10.9px] font-semibold leading-[14.5px] text-[#0a0a0a]">어린이 독서 지도</p>
                    <p className="mt-[6px] text-[10.1px] leading-[11.6px] text-[#a4a4a4]">2026.04.10 (토)&nbsp; 책읽는 친구들</p>
                  </div>
                  <span className="rounded-full bg-[#5e5e5d] px-[6px] py-[1px] text-[10.1px] leading-[14.5px] text-[#fafaf8]">시간 인증</span>
                </div>
              </JourneyStepCard>
            </div>

            <div className="pointer-events-none hidden xl:block" aria-hidden="true">
              <Image src="/assets/icons/timeline-line-step-2.svg" alt="" width={2} height={207} className="absolute left-[617px] top-[354px] h-[207px] w-0.5" />
              <Image src="/assets/icons/timeline-line-step-3.svg" alt="" width={1} height={280} className="absolute left-[616px] top-[676px] h-[280px] w-px" />
              <Image src="/assets/icons/timeline-line-step-4.svg" alt="" width={1} height={194} className="absolute left-[616px] top-[1034px] h-[194px] w-px" />
              {[
                ["/assets/icons/timeline-interest.svg", "left-[592px] top-[291px] bg-[#e2f8ee]", 26],
                ["/assets/icons/timeline-search.svg", "left-[592px] top-[613px]", 48],
                ["/assets/icons/timeline-team.svg", "left-[592px] top-[971px]", 48],
                ["/assets/icons/timeline-participate.svg", "left-[592px] top-[1243px]", 48],
              ].map(([icon, position, size]) => (
                <span key={String(icon)} className={`absolute z-10 flex h-12 w-12 items-center justify-center rounded-full ${position}`}>
                  <Image src={String(icon)} alt="" width={Number(size)} height={Number(size)} className="object-contain" style={{ width: Number(size), height: Number(size) }} />
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="volunteer-type" className="scroll-mt-24 bg-[linear-gradient(90deg,#e3f7eb_0%,#f5fbf7_68%,#fff_100%)] py-20 xl:h-[609px] xl:py-0">
          <div className="relative mx-auto flex w-[calc(100%-40px)] max-w-[1232px] flex-col gap-14 xl:h-full xl:block">
            <div className="xl:absolute xl:left-0 xl:top-[133px] xl:h-[347px] xl:w-[610px]">
              <div className="h-[226px]">
                <span className="inline-flex h-[29px] items-center justify-center rounded-[20px] bg-[#f6fffc] px-5 text-sm font-semibold leading-[16.5px] text-brand">봉사 유형 테스트</span>
                <div className="mt-2 h-[112px] pt-5">
                  <h2 className="text-4xl font-bold leading-[46px] text-[#0a0a0a]">나는 어떤 방식으로<br /><span className="text-brand">세상을 돕는 사람일까?</span></h2>
                </div>
                <div className="mt-2 h-[69px] py-2.5">
                  <p className="text-xl leading-[30px] text-[#5e5e5d]">몇 가지 질문에 답하고 나에게 잘 맞는 봉사 방식과<br />추천 활동을 확인해 보세요.</p>
                </div>
              </div>
              <div className="mt-0 flex min-h-[61px] flex-wrap items-center gap-x-4 gap-y-3 text-sm text-[#5e5e5d]">
                {[
                  ["/assets/icons/type-test-clock.svg", "약 60초 소요"],
                  ["/assets/icons/type-test-unlock.svg", "로그인 없이 시작"],
                  ["/assets/icons/type-test-save.svg", "결과 카드 저장 가능"],
                ].map(([icon, label]) => <span key={label} className="flex items-center gap-3"><Image src={icon} alt="" width={24} height={24} className="h-6 w-6" />{label}</span>)}
              </div>
              <Link href="/volunteer-type" className="inline-flex h-[56px] w-[220px] items-center justify-center rounded-[15px] bg-brand text-[15px] font-bold leading-[22px] text-white transition hover:bg-brand-strong">나의 봉사 유형 알아보기 →</Link>
            </div>

            <div className="relative mx-auto h-[367px] w-full max-w-[420px] xl:absolute xl:left-[856px] xl:top-[141px]" aria-hidden="true">
              <Image src="/assets/illustrations/landing/type-test-piece-left.svg" alt="" width={298} height={298} className="absolute left-0 top-[70px] h-auto w-[71%]" />
              <Image src="/assets/illustrations/landing/type-test-piece-right.svg" alt="" width={298} height={298} className="absolute left-[27%] top-[25px] h-auto w-[71%]" />
              <Image src="/assets/illustrations/landing/type-test-piece-front.svg" alt="" width={305} height={307} className="absolute left-[22.4%] top-0 z-10 h-auto w-[72.6%]" />
              <span className="absolute left-[36%] top-[108px] z-20 w-[120px] text-center text-[17px] font-medium leading-9 text-[#b5b5b5]">든든한 지원가</span>
              <span className="absolute left-[42%] top-[145px] z-20 text-[64px] font-bold leading-none text-brand">?</span>
            </div>
          </div>
        </section>

        <section className="py-20 xl:h-[1148px] xl:py-0">
          <div className="relative mx-auto w-[calc(100%-40px)] max-w-[1170px] xl:h-full">
            <div className="text-center xl:absolute xl:left-1/2 xl:top-[160px] xl:-translate-x-1/2">
              <span className="inline-flex h-[29px] items-center justify-center rounded-[20px] bg-[#e8faf4] px-5 text-sm font-semibold leading-[16.5px] text-brand">이용 방법</span>
              <h2 className="mt-[23px] text-[30px] font-bold leading-[46px] text-[#101110] sm:text-4xl xl:whitespace-nowrap">Gather에서 시작하는 방법</h2>
              <p className="mt-2 text-sm leading-5 text-[#5e5e5d]">아직 초기 단계지만, 투명하고 친근하게 여러분께 다가갑니다.</p>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-3 xl:absolute xl:left-0 xl:top-[374px] xl:mt-0 xl:h-[178px] xl:w-full xl:grid-cols-[376.66px_376.67px_376.66px]">
              {[
                ["browse", "무료로 봉사 공고를 둘러볼 수 있어요", "회원가입 없이도 다양한 봉사 공고를 자유롭게 탐색해 보세요."],
                ["interest", "관심 분야와 지역에 맞춰 탐색할 수 있어요", "내 일정과 위치에 맞는 봉사를 손쉽게 필터링해 찾아보세요."],
                ["external", "외부 공고는 원문을 확인해 주세요", "외부 공고는 신청 전에 원문과 모집 조건을 꼭 확인해 주세요."],
              ].map(([kind, title, description]) => (
                <article key={kind} className="h-[178px] rounded-2xl border border-[#e8ebe7] bg-white p-[25px]">
                  {kind === "browse" ? <Image src="/assets/icons/explore-browse.svg" alt="" width={48} height={48} /> : (
                    <span className={`flex h-12 w-12 items-center justify-center rounded-full ${kind === "interest" ? "bg-[#e2f8ee]" : "bg-[#eef1ff]"}`}>
                      <Image src={kind === "interest" ? "/assets/icons/timeline-interest.svg" : "/assets/icons/explore-external.svg"} alt="" width={kind === "interest" ? 26 : 25} height={kind === "interest" ? 26 : 25} />
                    </span>
                  )}
                  <h3 className="mt-4 text-[15px] font-bold leading-[21px] text-[#101110]">{title}</h3>
                  <p className="mt-2 text-[13px] leading-[21.45px] text-[#70746f]">{description}</p>
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-[#e8ebe7] bg-white p-[25px] shadow-[0_1px_1.5px_rgba(0,0,0,.1),0_1px_1px_rgba(0,0,0,.1)] xl:absolute xl:left-1/2 xl:top-[600px] xl:mt-0 xl:h-[270px] xl:w-[790px] xl:-translate-x-1/2">
              <div className="flex h-[18px] items-center justify-between">
                <strong className="text-base leading-6 text-[#101110]">Gather</strong>
                <span className="text-xs leading-[18px] text-[#70746f]">봉사 탐색</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-[5px]">
                {interestCategories.map((category) => (
                  <span key={category.label} className="flex h-[31px] items-center justify-center gap-[3px] rounded-[21px] border-[0.7px] px-[11px]" style={{ backgroundColor: category.background, borderColor: category.border }}>
                    <Image src={category.icon} alt="" width={13} height={13} />
                    <span className="whitespace-nowrap text-[9.75px] font-semibold leading-[11px] text-[#5e5e5d]">{category.label}</span>
                  </span>
                ))}
              </div>
              <div className="mt-[17px] grid gap-6 md:grid-cols-2">
                {[
                  { title: "한강공원 플로깅 🌿", description: "같이 한강 걸으면서 줍깅해요", meta: <>여의도 · 26.00.00 · <strong className="font-semibold text-[#f76073]">D-4</strong></>, tag: "환경", icon: "/assets/icons/category-environment.svg", image: "/assets/landing/step-volunteer-plogging.png", border: "#82d3ca", background: "#f1fffd" },
                  { title: "동화책 같이 읽어요 📖", description: "함께 책을 읽으며 따뜻한 시간 나눠요", meta: <>강남구 · 26.00.00</>, tag: "문화", icon: "/assets/icons/category-culture.svg", image: "/assets/landing/step-volunteer-reading.png", border: "#fade9e", background: "#fffbf1" },
                ].map((item) => (
                  <div key={item.title} className="relative min-h-[138px] rounded-xl border border-[#d9d9d9] bg-white p-3 pl-[90px] md:h-[138px] md:p-[15px] md:pl-[118px]">
                    <div className="absolute left-[9px] top-3 h-[90px] w-[68px] overflow-hidden rounded-[10px] md:left-[11px] md:top-[15px] md:h-[106px] md:w-[91px]">
                      <Image src={item.image} alt="" fill sizes="91px" className="object-cover" />
                    </div>
                    <h4 className="text-base font-semibold leading-5 text-[#0a0a0a] md:whitespace-nowrap md:text-lg">{item.title}</h4>
                    <p className="mt-2 text-sm leading-4 text-[#5e5e5d] md:whitespace-nowrap md:text-[15px]">{item.description}</p>
                    <p className="mt-1 text-sm leading-4 text-[#5e5e5d]">{item.meta}</p>
                    <span className="mt-[10px] inline-flex h-[23px] items-center gap-1 rounded-[30px] border px-4 text-sm leading-4 text-[#5e5e5d]" style={{ backgroundColor: item.background, borderColor: item.border }}><Image src={item.icon} alt="" width={12} height={12} />{item.tag}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 text-center xl:h-[724px] xl:py-0">
          <div className="mx-auto flex w-[calc(100%-40px)] max-w-[473px] flex-col items-center xl:h-full xl:justify-center">
            <div className="flex flex-col items-center gap-10">
              <div className="flex flex-col items-center gap-7">
                <h2 className="text-[clamp(44px,5vw,72px)] font-bold leading-[1.2] tracking-[-0.04em] text-[#101110] xl:leading-[normal] xl:tracking-normal">
                  발견은 더 쉽게.<br />
                  참여는 <span className="text-brand">함께.</span><br />
                  경험은 <span className="text-brand">성장</span>으로.
                </h2>
                <span className="h-[5px] w-14 rounded-full bg-brand" aria-hidden="true" />
              </div>
              <p className="text-lg leading-8 text-[#5e5e5d] sm:text-2xl sm:leading-normal">
                Gather는 공고를 보여주는 데서 멈추지 않습니다.<br />
                관심 있는 봉사를 발견하고, 함께할 사람을 만나고,<br />
                나만의 참여 경험을 쌓아갈 수 있도록 돕습니다.
              </p>
            </div>
            <div className="mt-[60px] flex flex-wrap justify-center gap-4">
              {[
                ["발견", "border-[#82d3ca] bg-[#f1fffd] text-[#00c77b]"],
                ["연결", "border-[#a6ccf4] bg-[#f1f8ff] text-[#398ed8]"],
                ["참여", "border-[#d197d1] bg-[#fff3ff] text-[#bf62bb]"],
                ["성장", "border-[#fade9e] bg-[#fffbf1] text-[#db9c16]"],
              ].map(([item, style]) => (
                <span key={item} className={`inline-flex h-11 w-[75px] items-center justify-center rounded-full border text-lg font-semibold leading-[22px] ${style}`}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#fafaf8] py-16 xl:h-[579px] xl:py-[90px]">
          <div className="mx-auto flex min-h-[399px] w-[calc(100%-40px)] max-w-[949px] flex-col items-center justify-center rounded-[20px] bg-[linear-gradient(114.284deg,#fafafa_32.074%,#d4fddc_102.25%)] px-5 py-12 text-center sm:px-10 xl:py-0">
            <div className="flex flex-col items-center gap-9">
              <div className="flex h-[46px] items-center gap-2" aria-hidden="true">
                <Image src="/assets/icons/cta-discover.svg" alt="" width={46} height={46} className="h-[46px] w-[46px]" />
                <Image src="/assets/icons/cta-connect.svg" alt="" width={46} height={46} className="h-[46px] w-[46px]" />
                <span className="flex h-[46px] w-[46px] items-center justify-center rounded-[10px] bg-[#fff3ff]">
                  <Image src="/assets/icons/cta-participate.svg" alt="" width={26} height={26} className="h-[26px] w-[26px]" />
                </span>
                <span className="flex h-[46px] w-[46px] items-center justify-center rounded-[10px] bg-[#f1f8ff]">
                  <Image src="/assets/icons/cta-grow.svg" alt="" width={21} height={26} className="h-[26px] w-[21px]" />
                </span>
              </div>
              <div>
                <h2 className="text-[30px] font-bold leading-[1.3] text-[#101110] sm:text-4xl sm:leading-[normal]">
                  나와 맞는 첫 봉사를<br />
                  <span className="text-brand">시작해볼까요?</span>
                </h2>
                <p className="mt-3 text-base font-medium leading-normal text-[#18bd77] sm:text-lg">작은 관심이 새로운 만남과 변화의 시작이 될 수 있어요.</p>
              </div>
              <div className="flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row">
                <a href={siteConfig.volunteerListUrl} className="inline-flex h-[62px] w-full items-center justify-center rounded-[10px] bg-brand text-lg font-semibold leading-[22px] text-white transition hover:bg-brand-strong sm:w-[174px]">봉사 찾아보기</a>
                <a href="#volunteer-type" className="inline-flex h-[62px] w-full items-center justify-center rounded-[10px] border-2 border-brand bg-white/40 text-lg font-semibold leading-[22px] text-brand sm:w-[216px]">봉사 유형 알아보기</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#314c36] py-[52px] text-[#fafaf8] xl:h-[249px]">
        <div className="mx-auto flex h-full w-[calc(100%-40px)] max-w-[1316px] flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          <div>
            <BrandLogo href="/#top" inverse />
            <p className="mt-4 text-lg leading-normal text-[#fafaf8]">함께하는 봉사의 시작</p>
          </div>
          <nav aria-label="푸터 메뉴" className="flex flex-wrap gap-x-6 gap-y-3 text-lg font-normal leading-normal">
            <Link href="/#top">서비스 소개</Link>
            <a href={siteConfig.github.frontend} target="_blank" rel="noopener noreferrer">Frontend GitHub</a>
            <a href={siteConfig.github.backend} target="_blank" rel="noopener noreferrer">Backend GitHub</a>
          </nav>
        </div>
      </footer>
    </>
  );
}
