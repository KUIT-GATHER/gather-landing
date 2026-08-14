import { siteConfig } from "@/config/site";
import type { VolunteerType } from "@/data/volunteer-test";

export type PostingCategory =
  | "ENVIRONMENT"
  | "EDUCATION"
  | "CULTURE"
  | "COMMUNITY"
  | "WELFARE"
  | "OVERSEAS";

export type PostingListItem = {
  sourceType: "POSTING" | "MEETING_RECRUIT";
  id: number;
  meetingId: number | null;
  title: string;
  organizationName: string | null;
  thumbnailUrl: string | null;
  regionId: number | null;
  regionName: string | null;
  place: string | null;
  activityStartAt: string | null;
  activityEndAt: string | null;
  applyDeadlineAt: string | null;
  maxParticipants: number | null;
  appliedCount: number | null;
  categories: PostingCategory[];
  status: string;
};

type PostingListResponse = {
  success: boolean;
  data?: { content?: PostingListItem[] };
};

const postingCategories = new Set<PostingCategory>([
  "ENVIRONMENT",
  "EDUCATION",
  "CULTURE",
  "COMMUNITY",
  "WELFARE",
  "OVERSEAS",
]);

export const recommendationCategoryByType: Record<
  VolunteerType,
  PostingCategory
> = {
  companion: "WELFARE",
  knowledge: "EDUCATION",
  action: "ENVIRONMENT",
  support: "COMMUNITY",
};

function isNullableString(value: unknown): value is string | null {
  return value === null || typeof value === "string";
}

function isNullableInteger(value: unknown): value is number | null {
  return value === null || Number.isInteger(value);
}

function isPostingListItem(value: unknown): value is PostingListItem {
  if (!value || typeof value !== "object") return false;
  const item = value as Partial<PostingListItem>;

  return (
    (item.sourceType === "POSTING" || item.sourceType === "MEETING_RECRUIT") &&
    Number.isInteger(item.id) &&
    isNullableInteger(item.meetingId) &&
    (item.sourceType === "POSTING" || item.meetingId !== null) &&
    typeof item.title === "string" &&
    isNullableString(item.organizationName) &&
    isNullableString(item.thumbnailUrl) &&
    isNullableInteger(item.regionId) &&
    isNullableString(item.regionName) &&
    isNullableString(item.place) &&
    isNullableString(item.activityStartAt) &&
    isNullableString(item.activityEndAt) &&
    isNullableString(item.applyDeadlineAt) &&
    isNullableInteger(item.maxParticipants) &&
    isNullableInteger(item.appliedCount) &&
    Array.isArray(item.categories) &&
    item.categories.every(
      (category) =>
        typeof category === "string" &&
        postingCategories.has(category as PostingCategory),
    ) &&
    typeof item.status === "string"
  );
}

export function createRecommendationUrl(category: PostingCategory) {
  const url = new URL("/api/v1/postings", siteConfig.apiBaseUrl);
  url.searchParams.set("page", "0");
  url.searchParams.set("size", "4");
  url.searchParams.set("sort", "id,desc");
  url.searchParams.set("status", "RECRUITING");
  url.searchParams.set("category", category);
  return url.toString();
}

export function isPostingListResponse(value: unknown): value is PostingListResponse {
  if (!value || typeof value !== "object") return false;
  const response = value as PostingListResponse;
  return (
    response.success === true &&
    Array.isArray(response.data?.content) &&
    response.data.content.every(isPostingListItem)
  );
}

export function getPostingDetailUrl(posting: PostingListItem) {
  if (posting.sourceType === "MEETING_RECRUIT" && posting.meetingId !== null) {
    return `${siteConfig.gatherWebUrl}/volunteers/meeting-recruits/${posting.meetingId}/${posting.id}`;
  }
  return `${siteConfig.gatherWebUrl}/volunteers/${posting.id}`;
}

export function getCategoryExploreUrl(category: PostingCategory) {
  const url = new URL(siteConfig.volunteerListUrl);
  url.searchParams.set("sort", "latest");
  url.searchParams.set("category", category);
  return url.toString();
}
