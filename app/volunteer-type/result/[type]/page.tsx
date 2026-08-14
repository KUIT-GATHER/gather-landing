import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ResultPage } from "@/components/volunteer-type/ResultPage";
import { volunteerResultData, isVolunteerType } from "@/data/volunteer-results";

type PageProps = {
  params: Promise<{ type: string }>;
  searchParams: Promise<{ matches?: string | string[] }>;
};

function parseMatchCount(value: string | string[] | undefined) {
  if (typeof value !== "string" || !/^\d$/.test(value)) return null;
  const count = Number(value);
  return count >= 0 && count <= 6 ? count : null;
}

export function generateStaticParams() {
  return Object.keys(volunteerResultData).map((type) => ({ type }));
}

export async function generateMetadata({ params }: Pick<PageProps, "params">): Promise<Metadata> {
  const { type } = await params;
  if (!isVolunteerType(type)) {
    return { title: { absolute: "봉사 유형 테스트 | Gather" } };
  }
  const result = volunteerResultData[type];
  return {
    title: { absolute: `${result.name} | Gather 봉사 유형 테스트` },
    description: result.subtitle,
    alternates: { canonical: `/volunteer-type/result/${type}` },
    openGraph: {
      title: `${result.name} | Gather 봉사 유형 테스트`,
      description: result.subtitle,
      images: [
        {
          url: "/og.png",
          width: 720,
          height: 380,
          alt: "Gather - 함께하는 봉사의 시작",
        },
      ],
    },
  };
}

export default async function VolunteerResultRoute({ params, searchParams }: PageProps) {
  const [{ type }, query] = await Promise.all([params, searchParams]);
  if (!isVolunteerType(type)) notFound();

  return <ResultPage type={type} matchCount={parseMatchCount(query.matches)} />;
}
