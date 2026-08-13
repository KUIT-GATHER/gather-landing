"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import type { VolunteerResultData } from "@/data/volunteer-results";
import {
  createRecommendationUrl,
  getCategoryExploreUrl,
  getPostingDetailUrl,
  isPostingListResponse,
  type PostingListItem,
} from "@/lib/gather-api";

type RecommendationsProps = {
  result: VolunteerResultData;
};

function formatDate(value: string | null) {
  if (!value) return null;
  const date = value.slice(0, 10).split("-");
  return date.length === 3 ? `${date[0]}.${date[1]}.${date[2]}` : null;
}

export function Recommendations({ result }: RecommendationsProps) {
  const [state, setState] = useState<
    | { status: "loading"; postings: [] }
    | { status: "success"; postings: PostingListItem[] }
    | { status: "empty" | "error"; postings: [] }
  >({ status: "loading", postings: [] });

  useEffect(() => {
    const controller = new AbortController();

    fetch(createRecommendationUrl(result.apiCategory), {
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
  }, [result.apiCategory]);

  return (
    <section className="mt-6 rounded-[20px] bg-white px-5 py-7 sm:px-10 sm:py-8">
      <h2 className="text-xl font-bold sm:text-[28px]">지금 <span className="text-brand">Gather</span>에서 함께할 수 있어요</h2>
      <p className="mt-3 text-sm text-muted sm:text-base">현재 모집 중인 유사 공고를 찾아봤어요.</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {result.tags.map((tag) => (
          <span key={tag} className="rounded-lg px-3 py-2 text-sm font-semibold" style={{ backgroundColor: result.background, color: result.strong }}># {tag}</span>
        ))}
      </div>

      {state.status === "loading" ? (
        <div className="mt-7 grid gap-4 sm:grid-cols-2" aria-label="추천 공고 불러오는 중" aria-busy="true">
          {[0, 1, 2, 3].map((item) => <div key={item} className="h-[138px] animate-pulse rounded-xl bg-[#f0f1ee]" />)}
        </div>
      ) : null}

      {state.status === "success" ? (
        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          {state.postings.map((posting) => (
            <a
              key={`${posting.sourceType}:${posting.meetingId ?? "none"}:${posting.id}`}
              href={getPostingDetailUrl(posting)}
              className="group flex min-h-[138px] gap-4 rounded-xl border border-stroke bg-white p-3 transition hover:-translate-y-0.5 hover:border-[var(--result-accent)] hover:shadow-md"
            >
              <div
                className="flex h-[112px] w-[96px] shrink-0 items-center justify-center overflow-hidden rounded-[10px] bg-[#f3f5f1] bg-cover bg-center"
                style={posting.thumbnailUrl ? { backgroundImage: `url("${posting.thumbnailUrl.replaceAll('"', "%22")}")` } : undefined}
              >
                {!posting.thumbnailUrl ? <Image src="/assets/brand/gather-mark.svg" alt="" width={56} height={34} /> : null}
              </div>
              <div className="min-w-0 py-1">
                <h3 className="line-clamp-2 text-base font-semibold leading-5 group-hover:text-brand">{posting.title}</h3>
                <p className="mt-2 truncate text-sm text-muted">{posting.organizationName ?? "Gather 봉사"}</p>
                <p className="mt-1 text-sm text-muted">
                  {[posting.regionName ?? posting.place, formatDate(posting.activityStartAt)].filter(Boolean).join(" · ")}
                </p>
                {posting.categories[0] ? <span className="mt-2 inline-flex rounded-full border px-3 py-1 text-xs" style={{ backgroundColor: result.background, borderColor: result.accent }}>{posting.categories[0]}</span> : null}
              </div>
            </a>
          ))}
        </div>
      ) : null}

      {state.status === "empty" || state.status === "error" ? (
        <div className="mt-7 rounded-2xl px-6 py-10 text-center" style={{ backgroundColor: result.background }}>
          <p className="font-semibold">지금은 이 유형과 정확히 맞는 모집 공고가 없어요.</p>
          <p className="mt-2 text-sm text-muted">다른 추천 카테고리도 둘러보세요.</p>
        </div>
      ) : null}

      <a
        href={getCategoryExploreUrl(result.apiCategory)}
        className="mt-6 inline-flex min-h-12 items-center justify-center rounded-xl border px-5 font-semibold transition hover:bg-[#fafbf9]"
        style={{ borderColor: result.accent, color: result.strong }}
      >
        추천 카테고리 둘러보기 →
      </a>
    </section>
  );
}
