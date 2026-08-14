"use client";

import { useRef } from "react";

import { BrandLogo } from "@/components/common/BrandLogo";

const navigation = [
  { href: "/#top", label: "서비스 소개", active: false },
  { href: "/#features", label: "주요 기능", active: false },
  { href: "/#how-it-works", label: "이용 방법", active: false },
  { href: "/#volunteer-type", label: "봉사 유형 테스트", active: true },
] as const;

export function LandingHeader() {
  const mobileMenuRef = useRef<HTMLDetailsElement>(null);
  const closeMobileMenu = () => mobileMenuRef.current?.removeAttribute("open");

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-header border-b border-[#e8ebe7] bg-[rgba(250,251,249,.9)] backdrop-blur-xl">
      <div className="mx-auto flex h-full w-[calc(100%-40px)] max-w-[1236px] items-center justify-between">
        <BrandLogo eager />
        <nav aria-label="주요 메뉴" className="hidden items-center gap-9 md:flex">
          {navigation.map((item) => <a key={item.href} href={item.href} className={`rounded-md text-[15px] transition hover:text-brand ${item.active ? "font-extrabold text-brand-strong" : "text-muted"}`}>{item.label}</a>)}
        </nav>
        <details ref={mobileMenuRef} className="group relative md:hidden">
          <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-xl border border-stroke bg-white text-2xl [&::-webkit-details-marker]:hidden" aria-label="메뉴 열기">≡</summary>
          <nav aria-label="모바일 메뉴" className="absolute right-0 top-14 flex w-56 flex-col gap-1 rounded-2xl border border-stroke bg-white p-3 shadow-xl">
            {navigation.map((item) => <a key={item.href} href={item.href} onClick={closeMobileMenu} className={`rounded-xl px-4 py-3 text-sm ${item.active ? "font-bold text-brand" : "text-muted"}`}>{item.label}</a>)}
          </nav>
        </details>
      </div>
    </header>
  );
}
