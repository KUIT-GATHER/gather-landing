import type { Metadata } from "next";
import localFont from "next/font/local";

import { siteConfig } from "@/config/site";

import "./globals.css";

const pretendard = localFont({
  src: "../public/assets/fonts/pretendard-variable.woff2",
  variable: "--font-pretendard",
  weight: "45 920",
  display: "swap",
  fallback: ["Apple SD Gothic Neo", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.landingUrl),
  title: {
    default: "Gather | 함께하는 봉사의 시작",
    template: "%s | Gather",
  },
  description:
    "내 일정과 관심사에 맞는 봉사를 찾고, 함께할 사람을 만나는 봉사 커뮤니티 플랫폼 Gather입니다.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "Gather",
    title: "Gather | 함께하는 봉사의 시작",
    description:
      "하고 싶은 봉사부터 함께할 사람까지, Gather에서 봉사의 모든 순간을 시작하세요.",
    url: "/",
    images: [
      {
        url: "/og.png",
        width: 720,
        height: 380,
        alt: "Gather - 함께하는 봉사의 시작",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gather | 함께하는 봉사의 시작",
    description:
      "하고 싶은 봉사부터 함께할 사람까지, Gather에서 봉사의 모든 순간을 시작하세요.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      className={`${pretendard.variable} scroll-smooth bg-background`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-screen overflow-x-clip bg-background font-sans text-foreground">
        {children}
      </body>
    </html>
  );
}
