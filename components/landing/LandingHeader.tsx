import { BrandLogo } from "@/components/common/BrandLogo";
import { PageContainer } from "@/components/common/PageContainer";

const navigation = [
  { href: "/#top", label: "서비스 소개", active: false },
  { href: "/#features", label: "주요 기능", active: false },
  { href: "/#how-it-works", label: "이용 방법", active: false },
  { href: "/#volunteer-type", label: "봉사 유형 테스트", active: true },
] as const;

export function LandingHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-[var(--header-height)] border-b border-stroke bg-[rgba(250,250,248,.92)] backdrop-blur-xl">
      <PageContainer className="flex h-full items-center justify-between">
        <BrandLogo priority />
        <nav aria-label="주요 메뉴" className="hidden items-center gap-9 md:flex">
          {navigation.map((item) => <a key={item.href} href={item.href} className={`rounded-md text-[15px] transition hover:text-brand ${item.active ? "font-extrabold text-brand-strong" : "text-muted"}`}>{item.label}</a>)}
        </nav>
        <details className="group relative md:hidden">
          <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-xl border border-stroke bg-white text-2xl [&::-webkit-details-marker]:hidden" aria-label="메뉴 열기">≡</summary>
          <nav aria-label="모바일 메뉴" className="absolute right-0 top-14 flex w-56 flex-col gap-1 rounded-2xl border border-stroke bg-white p-3 shadow-xl">
            {navigation.map((item) => <a key={item.href} href={item.href} className={`rounded-xl px-4 py-3 text-sm ${item.active ? "font-bold text-brand" : "text-muted"}`}>{item.label}</a>)}
          </nav>
        </details>
      </PageContainer>
    </header>
  );
}
