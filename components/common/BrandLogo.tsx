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
      className="inline-flex min-h-11 items-center rounded-lg"
    >
      <Image
        src={inverse
          ? "/assets/brand/gather-logo-inverse.svg"
          : "/assets/brand/gather-logo.svg"}
        alt="Gather"
        width={inverse ? 132 : 147}
        height={inverse ? 34 : 39}
        loading={eager ? "eager" : "lazy"}
        className={
          inverse
            ? "h-[34px] w-[132px]"
            : compact
              ? "h-[34px] w-[128px]"
              : "h-[39px] w-[147px]"
        }
        unoptimized
      />
    </Link>
  );
}
