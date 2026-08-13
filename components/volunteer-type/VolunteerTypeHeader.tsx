import Image from "next/image";
import Link from "next/link";

import { BrandLogo } from "@/components/common/BrandLogo";

type VolunteerTypeHeaderProps = {
  backHref?: string;
  onBack?: () => void;
};

export function VolunteerTypeHeader({ backHref, onBack }: VolunteerTypeHeaderProps) {
  const backContent = (
    <Image src="/assets/icons/back.svg" alt="" width={44} height={44} className="h-11 w-11" />
  );

  return (
    <header className="h-[81px] bg-background shadow-[0_4px_4px_rgba(0,0,0,0.06)]">
      <div className="relative mx-auto flex h-full w-[calc(100%-40px)] max-w-[1266px] items-center justify-center">
        <div className="absolute left-0">
          {onBack ? (
            <button
              type="button"
              onClick={onBack}
              aria-label="이전 화면으로 이동"
              className="flex h-11 w-11 items-center justify-center rounded-lg"
            >
              {backContent}
            </button>
          ) : backHref ? (
            <Link
              href={backHref}
              aria-label="이전 화면으로 이동"
              className="flex h-11 w-11 items-center justify-center rounded-lg"
            >
              {backContent}
            </Link>
          ) : null}
        </div>
        <BrandLogo compact eager />
      </div>
    </header>
  );
}
