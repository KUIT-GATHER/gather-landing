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
      className="h-[72px] w-full max-w-[525px] rounded-[40px] bg-brand px-[30px] text-2xl font-semibold leading-[1.4] text-[#fafaf8] transition hover:bg-brand-strong xl:h-[60px] xl:text-xl"
    >
      테스트 시작하기
    </button>
  );
}
