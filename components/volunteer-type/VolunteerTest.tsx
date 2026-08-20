"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

import {
  volunteerQuestions,
  type VolunteerOption,
} from "@/data/volunteer-test";
import {
  calculateVolunteerResult,
  loadVolunteerTestSession,
  saveVolunteerTestSession,
  type VolunteerTestSession,
} from "@/lib/volunteer-test";
import { VolunteerTypeHeader } from "./VolunteerTypeHeader";

const TRANSITION_DELAY = 1_000;

const optionIconSizes: Record<string, { width: number; height: number }> = {
  "q1-companion": { width: 70, height: 72 },
  "q1-knowledge": { width: 78, height: 78 },
  "q3-support": { width: 90, height: 72 },
  "q4-knowledge": { width: 54, height: 63 },
  "q6-support": { width: 62, height: 62 },
};

export function VolunteerTest() {
  const router = useRouter();
  const [session, setSession] = useState<VolunteerTestSession | null>(null);
  const [transitionLocked, setTransitionLocked] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelTransition = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = null;
    setTransitionLocked(false);
  };

  useEffect(() => {
    const hydrationTimer = setTimeout(() => {
      setSession(loadVolunteerTestSession());
    }, 0);
    return () => {
      clearTimeout(hydrationTimer);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const question = session ? volunteerQuestions[session.currentStep] : null;
  const orderedOptions = useMemo(() => {
    if (!session || !question) return [];
    const optionById = new Map<string, VolunteerOption>(
      question.options.map((option) => [option.id, option]),
    );
    return session.shuffledOptionOrders[question.id]
      .map((optionId) => optionById.get(optionId))
      .filter((option) => option !== undefined);
  }, [question, session]);

  const moveBack = () => {
    cancelTransition();
    if (!session || session.currentStep === 0) {
      router.push("/volunteer-type");
      return;
    }
    const previous = { ...session, currentStep: session.currentStep - 1 };
    saveVolunteerTestSession(previous);
    setSession(previous);
  };

  const selectOption = (optionId: string) => {
    if (!session || !question || transitionLocked) return;

    const updated: VolunteerTestSession = {
      ...session,
      answers: { ...session.answers, [question.id]: optionId },
    };
    saveVolunteerTestSession(updated);
    setSession(updated);
    setTransitionLocked(true);

    timerRef.current = setTimeout(() => {
      if (updated.currentStep === volunteerQuestions.length - 1) {
        const result = calculateVolunteerResult(updated.answers);
        router.push(
          `/volunteer-type/result/${result.type}?matches=${result.matchCount}`,
        );
        return;
      }

      const next = { ...updated, currentStep: updated.currentStep + 1 };
      saveVolunteerTestSession(next);
      setSession(next);
      setTransitionLocked(false);
      timerRef.current = null;
    }, TRANSITION_DELAY);
  };

  if (!session || !question) {
    return (
      <main className="flex min-h-screen items-center justify-center" aria-live="polite">
        <p className="text-muted">테스트를 준비하고 있어요.</p>
      </main>
    );
  }

  const selectedOptionId = session.answers[question.id];
  return (
    <main className="min-h-screen bg-background xl:h-[912px] xl:min-h-0">
      <VolunteerTypeHeader
        onBack={moveBack}
        currentStep={session.currentStep + 1}
        totalSteps={volunteerQuestions.length}
      />
      <section className="relative mx-auto w-[calc(100%-40px)] max-w-[1266px] pb-16 pt-10 xl:h-[831px] xl:py-0">
        <div
          className="mx-auto flex w-full max-w-[754px] gap-2 xl:absolute xl:left-1/2 xl:top-[60px] xl:-translate-x-1/2"
          role="progressbar"
          aria-valuemin={1}
          aria-valuemax={volunteerQuestions.length}
          aria-valuenow={session.currentStep + 1}
          aria-label={`질문 ${session.currentStep + 1}/${volunteerQuestions.length}`}
        >
          {volunteerQuestions.map((item, index) => (
            <span
              key={item.id}
              className={`h-[10px] min-w-0 flex-1 rounded-[10px] ${index === session.currentStep ? "bg-brand" : "bg-[#d9d9d9]"}`}
              aria-hidden="true"
            />
          ))}
        </div>

        <h1 className="mx-auto mt-8 text-center text-2xl font-bold leading-[1.4] text-[#101110] md:mt-10 md:text-4xl xl:absolute xl:left-1/2 xl:top-[110px] xl:mt-0 xl:-translate-x-1/2 xl:whitespace-nowrap">
          {question.title}
        </h1>

        <div className="mx-auto mt-8 grid w-full max-w-[660px] grid-cols-2 gap-3 md:mt-12 md:gap-x-8 md:gap-y-6 xl:absolute xl:left-1/2 xl:top-[248px] xl:mt-0 xl:-translate-x-1/2">
          {orderedOptions.map((option) => {
            const selected = option.id === selectedOptionId;
            const iconSize = optionIconSizes[option.id] ?? { width: 72, height: 72 };
            return (
              <button
                key={option.id}
                type="button"
                onClick={() => selectOption(option.id)}
                disabled={transitionLocked}
                aria-pressed={selected}
                className={`flex min-h-[164px] w-full flex-col items-center justify-center gap-3 rounded-[20px] border-2 p-3 text-center transition md:h-[209px] md:min-h-0 md:w-[314px] md:gap-6 md:p-11 ${
                  selected
                    ? "border-brand bg-[#f3fffa]"
                    : "border-[#d9d9d9] bg-white hover:border-[#9bdfc2] hover:bg-[#fbfffd]"
                } disabled:cursor-default`}
              >
                <Image
                  src={option.icon}
                  alt=""
                  width={iconSize.width}
                  height={iconSize.height}
                  className="size-12 shrink-0 object-contain md:h-auto md:w-auto"
                  loading={session.currentStep === 0 ? "eager" : "lazy"}
                />
                <span className="max-w-[226px] text-center text-sm font-semibold leading-snug tracking-[-0.03em] md:text-lg md:leading-normal">
                  {option.label}
                </span>
              </button>
            );
          })}
        </div>
      </section>
    </main>
  );
}
