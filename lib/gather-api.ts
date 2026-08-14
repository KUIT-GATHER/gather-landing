import { siteConfig } from "@/config/site";

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
    response.data.content.every(
      (item) =>
        item &&
        (item.sourceType === "POSTING" || item.sourceType === "MEETING_RECRUIT") &&
        Number.isInteger(item.id) &&
        typeof item.title === "string" &&
        Array.isArray(item.categories) &&
        (item.sourceType === "POSTING" || Number.isInteger(item.meetingId)),
    )
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
  url.searchParams.set("category", category);
  return url.toString();
}
