import Link from "next/link";

import { BrandLogo } from "@/components/common/BrandLogo";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-5">
      <div className="flex max-w-[520px] flex-col items-center text-center">
        <BrandLogo eager />
        <p className="mt-12 text-sm font-semibold text-brand">404</p>
        <h1 className="mt-3 text-[32px] font-bold leading-tight text-foreground sm:text-[40px]">
          페이지를 찾을 수 없어요
        </h1>
        <p className="mt-5 text-base leading-7 text-muted sm:text-lg">
          주소가 잘못되었거나 페이지가 이동되었어요.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex min-h-14 items-center justify-center rounded-2xl bg-brand px-8 text-base font-bold text-white transition hover:bg-brand-strong"
        >
          Gather 홈으로
        </Link>
      </div>
    </main>
  );
}
