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
      <main>
        <section id="top" className="scroll-mt-24 pt-[var(--header-height)]">
          <PageContainer className="relative grid min-h-[700px] items-center gap-10 py-20 lg:grid-cols-[1fr_1fr] lg:py-24">
            <div className="relative z-10 max-w-[590px]">
              <span className="inline-flex rounded-full bg-brand-soft px-5 py-1.5 text-xs font-semibold text-brand">봉사 커뮤니티 플랫폼</span>
              <h1 className="mt-5 text-[clamp(2.65rem,5vw,3.375rem)] font-bold leading-[1.15] tracking-[-0.045em]">
                하고 싶은 봉사,<br />
                <span className="text-brand">함께할 사람까지</span>
              </h1>
              <p className="mt-7 text-[clamp(1rem,2vw,1.25rem)] leading-[1.6] text-muted">
                흩어진 봉사 공고를 내 일정과 관심사에 맞게 찾고,<br className="hidden sm:block" /> 혼자가 망설여질 때는 함께할 팀을 만나보세요.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href={siteConfig.volunteerListUrl} className="inline-flex min-h-[64px] items-center justify-center rounded-[18px] bg-brand px-9 text-lg font-bold text-white transition hover:bg-brand-strong">봉사 찾아보기</a>
                <a href="#volunteer-type" className="inline-flex min-h-[64px] items-center justify-center rounded-[18px] border-2 border-brand bg-white/60 px-7 text-lg font-semibold text-brand transition hover:bg-brand-soft">봉사 유형 알아보기</a>
              </div>
              <p className="mt-4 text-sm text-subtle">무료로 이용할 수 있어요</p>
            </div>

            <div className="relative mx-auto aspect-square w-full max-w-[520px]" aria-hidden="true">
              <div className="absolute inset-[8%] rounded-full bg-[radial-gradient(circle,rgba(222,245,232,.95)_0%,rgba(222,245,232,.25)_55%,transparent_72%)] blur-2xl" />
              <Image src="/assets/illustrations/landing/puzzle-companion.svg" alt="" width={114} height={114} className="absolute left-[8%] top-[26%] w-[22%] rotate-[-8deg] drop-shadow-[0_18px_24px_rgba(41,147,105,.14)]" loading="eager" />
              <Image src="/assets/illustrations/landing/puzzle-knowledge.svg" alt="" width={108} height={108} className="absolute right-[9%] top-[20%] w-[21%] rotate-[8deg] drop-shadow-[0_18px_24px_rgba(41,147,105,.14)]" loading="eager" />
              <Image src="/assets/illustrations/landing/puzzle-action.svg" alt="" width={106} height={106} className="absolute bottom-[19%] left-[25%] w-[21%] rotate-[5deg] drop-shadow-[0_18px_24px_rgba(41,147,105,.14)]" loading="eager" />
              <Image src="/assets/illustrations/landing/puzzle-support.svg" alt="" width={98} height={112} className="absolute bottom-[26%] right-[16%] w-[19%] rotate-[-7deg] drop-shadow-[0_18px_24px_rgba(41,147,105,.14)]" loading="eager" />
            </div>
            <a href="#features" className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-muted lg:flex">
              스크롤해서 더 알아보기
              <span className="flex h-10 w-7 justify-center rounded-full border-2 border-brand pt-2"><span className="h-2 w-1 rounded-full bg-brand" /></span>
            </a>
          </PageContainer>
        </section>

        <section id="features" className="scroll-mt-24 py-24 lg:py-28">
          <PageContainer>
            <SectionHeading eyebrow="주요 기능">봉사를 찾는 순간부터,<br /><span className="text-brand">함께하고 성장하는 순간까지</span></SectionHeading>
            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              {features.map((feature) => (
                <article key={feature.title} className="rounded-[18px] border border-stroke bg-white p-7 shadow-[0_10px_35px_rgba(24,78,55,.04)] sm:p-8">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full" style={{ backgroundColor: `${feature.accent}1f` }}>
                    <Image src={feature.icon} alt="" width={28} height={28} className="h-7 w-7" />
                  </div>
                  <h3 className="mt-3 text-xl font-bold">{feature.title}</h3>
                  <p className="mt-2 text-base leading-7 text-muted">{feature.description}</p>
                  <div className="mt-5 rounded-xl border border-[#eceeeb] bg-[#fafbf9] p-4 text-sm leading-5">{feature.preview}</div>
                </article>
              ))}
            </div>
          </PageContainer>
        </section>

        <section className="relative overflow-hidden py-24 lg:py-28">
          <div className="absolute -left-32 top-16 h-[460px] w-[460px] rounded-full bg-[#e6f7eb] blur-3xl" />
          <PageContainer className="relative grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
            <div>
              <span className="inline-flex rounded-full bg-brand-soft px-5 py-1.5 text-sm font-semibold text-brand">서비스 차별점</span>
              <h2 className="mt-5 text-[clamp(2rem,4vw,2.75rem)] font-bold leading-[1.25] tracking-[-0.04em]">공고를 보여주는 데서<br />멈추지 않아요</h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-muted">봉사를 찾고, 사람을 만나고, 경험을 기록하는 모든 과정을 하나의 따뜻한 여정으로 이어드려요.</p>
              <ul className="mt-7 space-y-3 text-base text-muted">
                {[
                  "지역, 관심 분야를 기준으로 간편하게 검색",
                  "관심사가 비슷한 사람들과 봉사 팀 구성",
                  "참여 경험을 기록하고 지속적인 활동으로 연결",
                  "따뜻한 봉사 커뮤니티에서 경험과 정보 공유",
                ].map((item) => <li key={item} className="flex items-center gap-3"><span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-xs text-white">✓</span>{item}</li>)}
              </ul>
            </div>
            <div className="rounded-[22px] border border-[#cbe8d5] bg-white/90 p-8 shadow-[0_24px_70px_rgba(30,120,80,.08)]">
              <h3 className="text-center text-lg font-bold">봉사 경험의 전체 여정</h3>
              <div className="mt-8 grid grid-cols-4 gap-2 text-center">
                {["발견", "연결", "참여", "성장"].map((item, index) => <div key={item} className="relative"><span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-soft font-bold text-brand">{index + 1}</span><p className="mt-2 text-sm">{item}</p>{index < 3 ? <span className="absolute left-[72%] top-6 h-px w-[55%] bg-[#cbe8d5]" /> : null}</div>)}
              </div>
              <div className="mt-8 rounded-xl bg-[#f5fbf7] p-5 text-center text-sm leading-6 text-muted">원하는 공고를 찾고 함께할 사람을 만나<br /><strong className="text-foreground">나만의 봉사 기록</strong>으로 남겨보세요.</div>
            </div>
          </PageContainer>
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
