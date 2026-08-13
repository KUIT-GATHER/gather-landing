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
  const progress = ((session.currentStep + 1) / volunteerQuestions.length) * 100;

  return (
    <main className="min-h-screen bg-background">
      <VolunteerTypeHeader onBack={moveBack} />
      <section className="mx-auto flex w-full max-w-[754px] flex-col px-5 pb-16 pt-10 sm:px-8 sm:pt-14">
        <div
          className="h-2.5 overflow-hidden rounded-full bg-[#e7e7e3]"
          role="progressbar"
          aria-valuemin={1}
          aria-valuemax={volunteerQuestions.length}
          aria-valuenow={session.currentStep + 1}
          aria-label={`질문 ${session.currentStep + 1}/${volunteerQuestions.length}`}
        >
          <div
            className="h-full rounded-full bg-brand transition-[width] duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-3 text-right text-sm font-medium text-muted" aria-hidden="true">
          {session.currentStep + 1} / {volunteerQuestions.length}
        </p>

        <h1 className="mx-auto mt-8 max-w-[680px] text-center text-[clamp(1.75rem,4vw,2rem)] font-bold leading-[1.35] tracking-[-0.03em]">
          {question.title}
        </h1>

        <div className="mt-9 grid gap-4 sm:grid-cols-2 sm:gap-5">
          {orderedOptions.map((option) => {
            const selected = option.id === selectedOptionId;
            return (
              <button
                key={option.id}
                type="button"
                onClick={() => selectOption(option.id)}
                disabled={transitionLocked}
                aria-pressed={selected}
                className={`flex min-h-[190px] flex-col items-center justify-center rounded-[18px] border-2 px-6 py-7 text-center transition sm:min-h-[209px] ${
                  selected
                    ? "border-brand bg-[#f3fffa] shadow-[0_8px_24px_rgba(0,199,123,.08)]"
                    : "border-[#e1e1dd] bg-white hover:border-[#9bdfc2] hover:bg-[#fbfffd]"
                } disabled:cursor-default`}
              >
                <Image
                  src={option.icon}
                  alt=""
                  width={80}
                  height={80}
                  className="h-20 w-20 object-contain"
                  loading={session.currentStep === 0 ? "eager" : "lazy"}
                />
                <span className="mt-5 text-base font-semibold leading-6 tracking-[-0.015em]">
                  {option.label}
                </span>
              </button>
            );
          })}
        </div>
        <p className="mt-7 text-center text-sm text-subtle">
          나와 가장 가까운 답변을 선택해 주세요
        </p>
      </section>
    </main>
  );
}
