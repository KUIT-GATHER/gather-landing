import Image from "next/image";
import Link from "next/link";

import { BrandLogo } from "@/components/common/BrandLogo";
import { PageContainer } from "@/components/common/PageContainer";

type VolunteerTypeHeaderProps = {
  backHref?: string;
  onBack?: () => void;
};

export function VolunteerTypeHeader({ backHref, onBack }: VolunteerTypeHeaderProps) {
  const backContent = (
    <>
      <Image src="/assets/icons/back.svg" alt="" width={24} height={24} />
      <span className="hidden sm:inline">뒤로가기</span>
    </>
  );

  return (
    <header className="h-[81px] border-b border-[#e6e6e2] bg-background">
      <PageContainer className="relative flex h-full items-center justify-center">
        <div className="absolute left-5 sm:left-7 lg:left-8">
          {onBack ? (
            <button
              type="button"
              onClick={onBack}
              aria-label="이전 화면으로 이동"
              className="flex min-h-11 items-center gap-2 rounded-lg px-1 text-sm font-semibold text-muted"
            >
              {backContent}
            </button>
          ) : backHref ? (
            <Link
              href={backHref}
              aria-label="이전 화면으로 이동"
              className="flex min-h-11 items-center gap-2 rounded-lg px-1 text-sm font-semibold text-muted"
            >
              {backContent}
            </Link>
          ) : null}
        </div>
        <BrandLogo compact eager />
      </PageContainer>
    </header>
  );
}
