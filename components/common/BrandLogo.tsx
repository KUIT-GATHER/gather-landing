import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  href?: string;
  compact?: boolean;
  inverse?: boolean;
  eager?: boolean;
};

export function BrandLogo({
  href = "/",
  compact = false,
  inverse = false,
  eager = false,
}: BrandLogoProps) {
  return (
    <Link
      href={href}
      aria-label="Gather 홈"
      className="inline-flex min-h-11 items-center gap-1.5 rounded-lg"
    >
      <Image
        src="/assets/brand/gather-mark.svg"
        alt=""
        width={compact ? 34 : 66}
        height={compact ? 34 : 39}
        loading={eager ? "eager" : "lazy"}
        className={compact ? "h-[34px] w-[34px]" : "h-[39px] w-[66px]"}
      />
      <span
        className={`font-extrabold tracking-[-0.03em] ${
          compact ? "text-[25px]" : "text-2xl"
        } ${inverse ? "text-[#fafaf8]" : "text-[#2e6136]"}`}
      >
        Gather
      </span>
    </Link>
  );
}
