const gatherWebUrl =
  process.env.NEXT_PUBLIC_GATHER_WEB_URL ?? "https://gathernow.kr";
const landingUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const siteConfig = {
  landingUrl,
  gatherWebUrl,
  volunteerListUrl: `${gatherWebUrl}/volunteers`,
  apiBaseUrl:
    process.env.NEXT_PUBLIC_GATHER_API_URL ?? "https://api.gathernow.kr",
  github: {
    frontend: "https://github.com/KUIT-GATHER/gather-front",
    backend: "https://github.com/KUIT-GATHER/gather-back",
  },
} as const;
