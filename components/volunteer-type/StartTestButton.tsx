"use client";

import { useRouter } from "next/navigation";

import { resetVolunteerTestSession } from "@/lib/volunteer-test";

export function StartTestButton() {
  const router = useRouter();

  const startTest = () => {
    resetVolunteerTestSession();
    router.push("/volunteer-type/test");
  };

  return (
    <button
      type="button"
      onClick={startTest}
      className="mt-10 min-h-16 w-full max-w-[432px] rounded-2xl bg-brand px-7 text-lg font-bold text-white transition hover:bg-brand-strong"
    >
      테스트 시작하기
    </button>
  );
}

