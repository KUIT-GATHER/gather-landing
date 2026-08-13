import type { Metadata } from "next";
import Image from "next/image";

import { StartTestButton } from "@/components/volunteer-type/StartTestButton";
import { VolunteerTypeHeader } from "@/components/volunteer-type/VolunteerTypeHeader";

export const metadata: Metadata = {
  title: { absolute: "봉사 유형 테스트 | Gather" },
  description: "6가지 질문으로 나와 잘 맞는 봉사 유형을 알아보세요.",
};

export default function VolunteerTypePage() {
  return (
    <main className="min-h-screen bg-background xl:h-[1172px] xl:min-h-0">
      <VolunteerTypeHeader backHref="/#volunteer-type" />
      <section className="relative mx-auto flex w-[calc(100%-40px)] max-w-[1266px] flex-col items-center pb-10 pt-12 text-center xl:h-[1091px] xl:py-0">
        <div className="relative h-[404px] w-[404px] max-w-full shrink-0 xl:absolute xl:left-[458px] xl:top-[47px]" aria-hidden="true">
          <Image src="/assets/volunteer-type/intro-glow.svg" alt="" width={450} height={450} className="absolute left-1/2 top-1/2 h-[450px] w-[450px] max-w-none -translate-x-1/2 -translate-y-1/2 -scale-y-100 -rotate-[7.24deg]" priority />
          <div className="absolute left-[76px] top-[118px] grid grid-cols-2 gap-2">
            <Image src="/assets/volunteer-type/intro-puzzle-green.svg" alt="" width={102} height={102} className="h-[102px] w-[102px]" priority />
            <Image src="/assets/volunteer-type/intro-puzzle-yellow.svg" alt="" width={102} height={102} className="h-[102px] w-[102px]" priority />
            <span className="flex h-[102px] w-[102px] items-center rounded-[22px] bg-[#fff3ff] py-[22px] pl-[27px] pr-[18px]">
              <Image src="/assets/volunteer-type/intro-puzzle-purple.svg" alt="" width={58} height={58} className="h-[58px] w-[58px] max-w-none" />
            </span>
            <span className="flex h-[102px] w-[102px] items-center rounded-[22px] bg-[#f1f8ff] py-[22px] pl-[27px] pr-[18px]">
              <Image src="/assets/volunteer-type/intro-puzzle-blue.svg" alt="" width={47} height={58} className="h-[58px] w-[47px]" />
            </span>
          </div>
        </div>

        <div className="mt-4 flex w-full max-w-[722px] flex-col items-center gap-12 xl:absolute xl:left-[272px] xl:top-[468px] xl:mt-0 xl:gap-[98px]">
          <div className="flex w-full flex-col items-center gap-6">
            <h1 className="w-full text-[38px] font-bold leading-normal text-[#0a0a0a] sm:text-[44px] xl:w-[457px] xl:text-[52px]">
              나는 어떤 방식으로<br />
              <span className="text-[#18bd77]">세상을 돕는</span> 사람일까?
            </h1>
            <p className="text-lg leading-normal text-[#5e5e5d] sm:text-xl xl:text-2xl">몇 가지 질문에 답하고 나에게 잘 맞는 봉사 방식과 추천 활동을 확인해 보세요.</p>
          </div>
          <ul className="flex w-[219px] flex-col items-center gap-4 text-2xl leading-normal text-[#5e5e5d]">
            <li className="flex items-center gap-3 whitespace-nowrap"><Image src="/assets/icons/type-test-clock.svg" alt="" width={24} height={24} className="h-6 w-6" />약 60초 소요</li>
            <li className="flex items-center gap-3 whitespace-nowrap"><Image src="/assets/icons/type-test-unlock.svg" alt="" width={24} height={24} className="h-6 w-6" />로그인 없이 시작</li>
            <li className="flex items-center gap-[10px] whitespace-nowrap"><Image src="/assets/icons/type-test-save.svg" alt="" width={24} height={24} className="h-6 w-6" />결과 카드 저장 가능</li>
          </ul>
        </div>

        <div className="mt-12 w-full max-w-[525px] xl:absolute xl:left-[376px] xl:top-[914px] xl:mt-0">
          <StartTestButton />
        </div>
        <p className="mt-5 text-xl leading-normal text-[#545454] xl:absolute xl:left-1/2 xl:top-[1029px] xl:mt-0 xl:-translate-x-1/2">약 60초 소요</p>
      </section>
    </main>
  );
}
