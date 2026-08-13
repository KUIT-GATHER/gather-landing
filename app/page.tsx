import Image from "next/image";
import Link from "next/link";

import { BrandLogo } from "@/components/common/BrandLogo";
import { PageContainer } from "@/components/common/PageContainer";
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
        <p className="text-xs text-muted">◉ 서울 · 어린이 돌봄</p>
        <div className="mt-3 flex items-center justify-between">
          <span>마포구 아동 독서 지도</span>
          <span className="font-semibold text-brand">모집중</span>
        </div>
        <div className="mt-2 flex items-center justify-between">
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
        <p className="text-xs text-muted">◉ 같이 가실 분!</p>
        <div className="mt-3 flex items-center gap-2">
          <span className="rounded-full bg-[#fff3d6] px-3 py-1">김 이 박</span>
          <span className="text-muted">+3</span>
        </div>
        <p className="mt-2">환경 정화 봉사 팀 (3/5)</p>
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
        <p className="text-xs text-muted">◉ 나의 봉사 기록</p>
        <div className="mt-3 flex justify-between"><span>● 아동 독서 지도</span><span>+2h</span></div>
        <div className="mt-2 flex justify-between"><span>● 환경 정화 활동</span><span>+3h</span></div>
        <p className="mt-2 font-semibold">총 12.5h 기록됨</p>
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
        <p className="text-xs text-muted">◉ 커뮤니티 인기글</p>
        <p className="mt-3">▢ 처음 봉사 후기 공유합니다</p>
        <p className="mt-2">▢ 어르신 말벗 봉사 팁</p>
      </>
    ),
  },
] as const;

const journeySteps = [
  { number: "01", title: "봉사를 발견해요", description: "지역과 관심 분야에 맞는 공고를 한눈에 살펴보세요.", tone: "#00c77b" },
  { number: "02", title: "함께할 사람을 만나요", description: "비슷한 관심사를 가진 사람들과 팀을 만들 수 있어요.", tone: "#ffc247" },
  { number: "03", title: "즐겁게 참여해요", description: "일정을 확인하고 나에게 맞는 방식으로 참여하세요.", tone: "#d197d1" },
  { number: "04", title: "경험이 성장으로 이어져요", description: "참여 기록과 경험을 모아 나만의 봉사 여정을 완성해요.", tone: "#79baff" },
] as const;

const serviceCards = [
  { icon: "♡", title: "신뢰할 수 있는 봉사 공고", description: "검증된 공고를 바탕으로 안심하고 봉사를 찾아보세요.", tone: "#ffcf5e" },
  { icon: "⌁", title: "관심사로 이어지는 만남", description: "나와 비슷한 관심을 가진 사람들과 자연스럽게 연결돼요.", tone: "#82d3ca" },
  { icon: "▣", title: "한눈에 보는 참여 기록", description: "신청 일정과 활동 경험을 놓치지 않고 차곡차곡 모아요.", tone: "#a6ccf4" },
] as const;

function SectionHeading({ eyebrow, children, description }: { eyebrow: string; children: React.ReactNode; description?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="inline-flex rounded-full bg-brand-soft px-5 py-1.5 text-sm font-semibold text-brand">{eyebrow}</span>
      <h2 className="mt-4 text-[clamp(2rem,3vw,2.25rem)] font-bold leading-[1.28] tracking-[-0.03em]">{children}</h2>
      {description ? <p className="mt-3 text-sm leading-6 text-muted">{description}</p> : null}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <LandingHeader />
      <main className="overflow-hidden">
        <section id="top" className="scroll-mt-24 pt-[var(--header-height)] xl:h-[810px]">
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
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(225,248,235,.9)_0%,rgba(225,248,235,.3)_50%,transparent_72%)] blur-[18px] xl:left-[760px] xl:top-[85px] xl:h-[590px] xl:w-[590px]" />
              <Image src="/assets/illustrations/landing/puzzle-companion.svg" alt="" width={113} height={113} className="absolute left-[10%] top-[90px] w-[84px] drop-shadow-[0_20px_24px_rgba(41,147,105,.12)] xl:left-[856px] xl:top-[238px] xl:w-[113px]" loading="eager" />
              <Image src="/assets/illustrations/landing/puzzle-knowledge.svg" alt="" width={96} height={112} className="absolute right-[8%] top-[55px] w-[84px] drop-shadow-[0_20px_24px_rgba(41,147,105,.12)] xl:left-[1059px] xl:right-auto xl:top-[207px] xl:w-[96px]" loading="eager" />
              <Image src="/assets/illustrations/landing/puzzle-action.svg" alt="" width={107} height={107} className="absolute left-[20%] top-[265px] w-[84px] drop-shadow-[0_20px_24px_rgba(41,147,105,.12)] xl:left-[854px] xl:top-[478px] xl:w-[107px]" loading="eager" />
              <Image src="/assets/illustrations/landing/puzzle-support.svg" alt="" width={105} height={105} className="absolute right-[15%] top-[215px] w-[84px] drop-shadow-[0_20px_24px_rgba(41,147,105,.12)] xl:left-[1046px] xl:right-auto xl:top-[421px] xl:w-[105px]" loading="eager" />
            </div>
            <a href="#features" className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2.5 text-xs text-muted xl:flex">
              스크롤해서 더 알아보기
              <span className="flex h-10 w-[27px] justify-center rounded-[15px] border-2 border-brand pt-2 before:h-2 before:w-1 before:rounded-full before:bg-brand" />
            </a>
          </div>
        </section>

        <section id="features" className="scroll-mt-24 py-20 xl:h-[828px] xl:py-0 xl:pt-[31px]">
          <div className="mx-auto w-[calc(100%-40px)] max-w-[1170px]">
            <div className="text-center">
              <span className="inline-flex items-center justify-center rounded-[20px] bg-brand-soft px-5 py-1.5 text-sm font-semibold leading-[16.5px] text-brand">주요 기능</span>
              <h2 className="mt-4 text-[30px] font-bold leading-[1.35] tracking-[-0.03em] sm:text-4xl sm:leading-[46px]">봉사를 찾는 순간부터,<br /><span className="text-brand">함께하고 성장하는 순간까지</span></h2>
            </div>
            <div className="mt-14 grid gap-5 md:grid-cols-2 xl:mt-[121px] xl:grid-cols-[575px_575px] xl:grid-rows-[283.44px_309.44px]">
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

        <section className="py-20 xl:h-[696px] xl:py-0">
          <div className="relative mx-auto grid w-[calc(100%-40px)] max-w-[1232px] items-start gap-14 lg:grid-cols-[1.1fr_.9fr] xl:block xl:h-full">
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
            <div className="rounded-2xl border border-brand bg-white p-[33px] xl:absolute xl:right-0 xl:top-[207px] xl:h-[303px] xl:w-[498px]">
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

        <section id="how-it-works" className="scroll-mt-24 py-24 lg:py-28">
          <PageContainer>
            <SectionHeading eyebrow="이용 방법">Gather에서 시작하는 방법</SectionHeading>
            <div className="relative mx-auto mt-14 max-w-[880px]">
              <div className="absolute bottom-16 left-1/2 top-16 hidden w-px -translate-x-1/2 bg-[#dcecdf] md:block" />
              <div className="space-y-8 md:space-y-5">
                {journeySteps.map((step, index) => (
                  <div key={step.number} className={`relative grid items-center gap-6 md:grid-cols-[1fr_72px_1fr] ${index % 2 ? "" : ""}`}>
                    <div className={`rounded-2xl border border-stroke bg-white p-6 shadow-[0_12px_30px_rgba(24,78,55,.04)] ${index % 2 ? "md:col-start-3" : "md:text-right"}`}>
                      <p className="text-sm font-bold" style={{ color: step.tone }}>STEP {step.number}</p>
                      <h3 className="mt-2 text-xl font-bold">{step.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-muted">{step.description}</p>
                    </div>
                    <span className={`z-10 hidden h-12 w-12 items-center justify-center rounded-full border-8 border-background text-sm font-bold text-white md:col-start-2 md:row-start-1 md:flex`} style={{ backgroundColor: step.tone }}>{index + 1}</span>
                  </div>
                ))}
              </div>
            </div>
          </PageContainer>
        </section>

        <section id="volunteer-type" className="scroll-mt-24 bg-[linear-gradient(90deg,rgba(222,245,232,.82),rgba(222,245,232,.12))] py-24 lg:py-28">
          <PageContainer className="grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
            <div>
              <span className="inline-flex rounded-full bg-white/70 px-5 py-1.5 text-sm font-semibold text-brand">봉사 유형 테스트</span>
              <h2 className="mt-5 text-[clamp(2rem,4vw,2.75rem)] font-bold leading-[1.28] tracking-[-0.04em]">나는 어떤 방식으로<br /><span className="text-brand">세상을 돕는 사람일까?</span></h2>
              <p className="mt-5 text-lg leading-8 text-muted">몇 가지 질문에 답하고 나에게 잘 맞는 봉사 방식과<br className="hidden sm:block" /> 추천 활동을 확인해 보세요.</p>
              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted"><span>◷ 약 60초 소요</span><span>♧ 로그인 없이 시작</span><span>▧ 결과 카드 저장 가능</span></div>
              <Link href="/volunteer-type" className="mt-7 inline-flex min-h-14 items-center justify-center rounded-2xl bg-brand px-8 font-bold text-white transition hover:bg-brand-strong">나의 봉사 유형 알아보기 →</Link>
            </div>
            <div className="relative mx-auto aspect-square w-full max-w-[390px]" aria-hidden="true">
              <div className="absolute inset-4 rounded-full bg-white/45 blur-xl" />
              {[
                ["puzzle-companion.svg", "left-[4%] top-[16%] -rotate-6"],
                ["puzzle-knowledge.svg", "right-[2%] top-[10%] rotate-6"],
                ["puzzle-action.svg", "bottom-[9%] left-[18%] rotate-3"],
                ["puzzle-support.svg", "bottom-[16%] right-[10%] -rotate-3"],
              ].map(([src, position]) => <Image key={src} src={`/assets/illustrations/landing/${src}`} alt="" width={120} height={120} className={`absolute w-[35%] ${position}`} />)}
              <span className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 rotate-3 items-center justify-center rounded-3xl bg-white text-6xl font-black text-brand shadow-xl">?</span>
            </div>
          </PageContainer>
        </section>

        <section className="py-24 lg:py-28">
          <PageContainer>
            <SectionHeading eyebrow="Gather의 약속" description="아직 초기 단계지만, 투명하고 친근하게 여러분께 다가갑니다.">Gather가 시작하는 방향</SectionHeading>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {serviceCards.map((card) => <article key={card.title} className="rounded-2xl border border-stroke bg-white p-7"><span className="flex h-11 w-11 items-center justify-center rounded-full text-lg font-bold" style={{ color: card.tone, backgroundColor: `${card.tone}22` }}>{card.icon}</span><h3 className="mt-5 text-lg font-bold">{card.title}</h3><p className="mt-3 text-sm leading-6 text-muted">{card.description}</p></article>)}
            </div>
            <div className="mt-8 grid gap-5 rounded-2xl border border-[#dcecdf] bg-white p-5 sm:grid-cols-2">
              {[{ title: "한강공원 플로깅 🌿", meta: "여의도 · 환경" }, { title: "동화책 같이 읽어요 📖", meta: "강남구 · 문화" }].map((item) => <div key={item.title} className="flex items-center gap-4 rounded-xl bg-[#f8faf7] p-4"><div className="h-16 w-16 rounded-xl bg-[linear-gradient(135deg,#d8f5e5,#9edfc2)]" /><div><h3 className="font-semibold">{item.title}</h3><p className="mt-2 text-sm text-muted">{item.meta}</p></div></div>)}
            </div>
          </PageContainer>
        </section>

        <section className="bg-white py-24 text-center lg:py-28">
          <PageContainer className="max-w-[650px]">
            <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.2] tracking-[-0.05em]">발견은 더 쉽게.<br />참여는 <span className="text-brand">함께.</span><br />경험은 성장으로.</h2>
            <div className="mx-auto mt-7 h-0.5 w-14 bg-brand" />
            <p className="mt-8 text-lg leading-8 text-muted">Gather는 공고를 보여주는 데서 멈추지 않습니다.<br />관심 있는 봉사를 발견하고, 함께할 사람을 만나고,<br />나만의 참여 경험을 쌓아갈 수 있도록 돕습니다.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">{["발견", "연결", "참여", "성장"].map((item) => <span key={item} className="rounded-full bg-brand-soft px-5 py-2 font-semibold text-brand">{item}</span>)}</div>
          </PageContainer>
        </section>

        <section className="py-24 lg:py-28">
          <PageContainer className="rounded-[24px] bg-[#e1f8e7] px-6 py-14 text-center sm:px-10">
            <div className="mx-auto flex w-fit gap-2" aria-hidden="true">{["puzzle-companion.svg", "puzzle-knowledge.svg", "puzzle-action.svg", "puzzle-support.svg"].map((src) => <Image key={src} src={`/assets/illustrations/landing/${src}`} alt="" width={46} height={46} className="h-12 w-12" />)}</div>
            <h2 className="mt-6 text-[clamp(2rem,4vw,2.75rem)] font-bold leading-tight">나와 맞는 첫 봉사를<br /><span className="text-brand">시작해볼까요?</span></h2>
            <p className="mt-4 text-muted">작은 관심이 새로운 만남과 변화의 시작이 될 수 있어요.</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><a href={siteConfig.volunteerListUrl} className="inline-flex min-h-[58px] items-center justify-center rounded-2xl bg-brand px-8 font-bold text-white">봉사 찾아보기</a><a href="#volunteer-type" className="inline-flex min-h-[58px] items-center justify-center rounded-2xl border-2 border-brand bg-white px-8 font-semibold text-brand">봉사 유형 알아보기</a></div>
          </PageContainer>
        </section>
      </main>

      <footer className="bg-[#2e6136] py-16 text-[#fafaf8]">
        <PageContainer className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          <div><BrandLogo href="/#top" compact inverse /><p className="mt-2 text-sm text-white/80">함께하는 봉사의 시작</p></div>
          <nav aria-label="푸터 메뉴" className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium"><a href="#top">서비스 소개</a><a href={siteConfig.github.frontend} target="_blank" rel="noopener noreferrer">Frontend GitHub</a><a href={siteConfig.github.backend} target="_blank" rel="noopener noreferrer">Backend GitHub</a></nav>
        </PageContainer>
      </footer>
    </>
  );
}
