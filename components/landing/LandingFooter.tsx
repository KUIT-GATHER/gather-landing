import Link from "next/link";

import { BrandLogo } from "@/components/common/BrandLogo";
import { siteConfig } from "@/config/site";

export function LandingFooter() {
  return (
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
  );
}
