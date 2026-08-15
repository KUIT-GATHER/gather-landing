"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import type { VolunteerResultData } from "@/data/volunteer-results";
import type { VolunteerType } from "@/data/volunteer-test";
import {
  createRecommendationUrl,
  getCategoryExploreUrl,
  getPostingDetailUrl,
  isPostingListResponse,
  recommendationCategoryByType,
  type PostingCategory,
  type PostingListItem,
} from "@/lib/gather-api";

type RecommendationsProps = {
  result: VolunteerResultData;
  type: VolunteerType;
};

const categoryLabels: Record<PostingCategory, string> = {
  ENVIRONMENT: "환경",
  EDUCATION: "교육",
  CULTURE: "문화",
  COMMUNITY: "지역 연계",
  WELFARE: "복지",
  OVERSEAS: "해외",
};

function formatDate(value: string | null) {
  if (!value) return null;
  const date = value.slice(0, 10).split("-");
  return date.length === 3 ? `${date[0].slice(2)}.${date[1]}.${date[2]}` : null;
}

export function Recommendations({ result, type }: RecommendationsProps) {
  const recommendationCategory = recommendationCategoryByType[type];
  const [state, setState] = useState<
    | { status: "loading"; postings: [] }
    | { status: "success"; postings: PostingListItem[] }
    | { status: "empty" | "error"; postings: [] }
  >({ status: "loading", postings: [] });

  useEffect(() => {
    const controller = new AbortController();

    fetch(createRecommendationUrl(recommendationCategory), {
      method: "GET",
      headers: { Accept: "application/json" },
      signal: controller.signal,
    })
      .then(async (response) => {
        if (!response.ok) throw new Error(`Gather API ${response.status}`);
        const payload: unknown = await response.json();
        if (!isPostingListResponse(payload)) throw new Error("Invalid Gather API response");
        const postings = payload.data?.content?.slice(0, 4) ?? [];
        setState(postings.length ? { status: "success", postings } : { status: "empty", postings: [] });
      })
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === "AbortError") return;
        setState({ status: "error", postings: [] });
      });

    return () => controller.abort();
  }, [recommendationCategory]);

  return (
    <section className="mt-10 flex flex-col gap-10 rounded-[20px] bg-white px-5 py-7 sm:px-8 xl:px-10 xl:py-8">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold leading-normal tracking-[-0.03em] text-[#0a0a0a] sm:text-2xl xl:text-[28px]">지금 <span className="text-[#18bd77]">Gather</span>에서 함께할 수 있어요</h2>
          <p className="text-base font-medium leading-normal tracking-[-0.03em] text-[#5e5e5d] sm:text-xl xl:text-[22px]">현재 모집 중인 유사 공고를 찾아봤어요</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {result.tags.map((tag) => (
            <span key={tag} className="rounded-[10px] px-4 py-2 text-sm font-semibold leading-normal sm:text-base xl:text-xl" style={{ backgroundColor: result.background, color: result.strong }}># {tag}</span>
          ))}
        </div>
      </div>

      {state.status === "loading" ? (
        <div className="rounded-[40px] px-3 py-6 sm:px-6 xl:px-10 xl:py-11" style={{ backgroundColor: result.background }} aria-label="추천 공고 불러오는 중" aria-busy="true">
          <div className="grid min-w-0 gap-6 xl:w-[760px] xl:grid-cols-2 xl:gap-x-11">
            {[0, 1, 2, 3].map((item) => <div key={item} className="h-[138px] animate-pulse rounded-xl bg-white/70" />)}
          </div>
        </div>
      ) : null}

      {state.status === "success" ? (
        <div className="flex min-w-0 flex-col items-center gap-10 rounded-[40px] px-3 py-6 sm:px-6 xl:h-[396px] xl:flex-row xl:items-center xl:gap-40 xl:px-10 xl:py-11" style={{ backgroundColor: result.background }}>
          <div className="grid min-w-0 w-full gap-6 xl:w-[760px] xl:grid-cols-[358px_358px] xl:gap-x-11 xl:gap-y-6">
            {state.postings.map((posting) => {
              const category = posting.categories[0];
              return (
                <a
                  key={`${posting.sourceType}:${posting.meetingId ?? "none"}:${posting.id}`}
                  href={getPostingDetailUrl(posting)}
                  className="group relative min-h-[138px] min-w-0 w-full overflow-hidden rounded-xl border border-[#d9d9d9] bg-white p-3 pl-[90px] transition hover:-translate-y-0.5 hover:border-[var(--result-accent)] sm:p-[15px] sm:pl-[118px] xl:h-[138px] xl:w-[358px]"
                >
                  <div
                    className="absolute left-[9px] top-[12px] flex h-[90px] w-[68px] items-center justify-center overflow-hidden rounded-[10px] bg-[#f3f5f1] bg-cover bg-center sm:left-[11px] sm:top-[15px] sm:h-[106px] sm:w-[91px]"
                    style={posting.thumbnailUrl ? { backgroundImage: `url("${posting.thumbnailUrl.replaceAll('"', "%22")}")` } : undefined}
                  >
                    {!posting.thumbnailUrl ? <Image src="/assets/brand/gather-mark.svg" alt="" width={56} height={34} /> : null}
                  </div>
                  <div className="min-w-0">
                    <h3 className="truncate text-lg font-semibold leading-5 text-[#0a0a0a]">{posting.title}</h3>
                    <p className="mt-[7px] truncate text-[15px] leading-4 text-[#5e5e5d]">{posting.organizationName ?? "Gather 봉사"}</p>
                    <p className="mt-1 truncate text-sm leading-4 text-[#5e5e5d]">
                      {[posting.regionName ?? posting.place, formatDate(posting.activityStartAt)].filter(Boolean).join(" · ")}
                    </p>
                    {category ? (
                      <span className="mt-[10px] inline-flex h-[23px] max-w-full items-center rounded-[30px] border px-4 text-sm leading-4 text-[#5e5e5d]" style={{ backgroundColor: result.background, borderColor: result.accent }}>
                        {categoryLabels[category]}
                      </span>
                    ) : null}
                  </div>
                </a>
              );
            })}
          </div>
          <a href={getCategoryExploreUrl(recommendationCategory)} aria-label="추천 카테고리 둘러보기" className="flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-full xl:h-[81px] xl:w-[81px]" style={{ backgroundColor: result.accent }}>
            <Image src="/assets/icons/result-next.svg" alt="" width={82} height={82} className="h-[64px] w-[64px] max-w-none -scale-x-100 xl:h-[82px] xl:w-[82px]" />
          </a>
        </div>
      ) : null}

      {state.status === "empty" || state.status === "error" ? (
        <div className="flex flex-col items-center justify-center gap-8 rounded-[40px] px-4 py-8 text-center sm:px-6 xl:py-11" style={{ backgroundColor: result.background }}>
          <Image src="/assets/icons/result-search.svg" alt="" width={44} height={44} className="h-11 w-11" />
          <div className="flex w-full flex-col items-center gap-11">
            <div className="flex flex-col gap-4">
              <p className="text-xl font-medium leading-normal tracking-[-0.03em] text-[#0a0a0a] sm:text-2xl xl:text-[26px]">지금은 이 유형과 정확히 맞는 모집 공고가 없어요.</p>
              <p className="text-base leading-normal text-[#5e5e5d] sm:text-xl xl:text-2xl">다른 추천 카테고리도 둘러보세요.</p>
            </div>
            <a href={getCategoryExploreUrl(recommendationCategory)} className="inline-flex min-h-[56px] items-center gap-3 rounded-[10px] px-6 py-4 text-base font-semibold leading-normal text-[#fafaf8] sm:text-lg xl:text-xl" style={{ backgroundColor: result.accent }}>
              추천 카테고리 둘러보기
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      ) : null}
    </section>
  );
}
