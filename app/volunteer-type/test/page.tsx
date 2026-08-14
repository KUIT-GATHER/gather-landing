import type { Metadata } from "next";

import { VolunteerTest } from "@/components/volunteer-type/VolunteerTest";

export const metadata: Metadata = {
  title: { absolute: "봉사 유형 테스트 질문 | Gather" },
  description: "나에게 가장 가까운 답변을 골라 봉사 유형을 확인해 보세요.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function VolunteerTypeTestPage() {
  return <VolunteerTest />;
}
