export const landingFeatures = [
  {
    kind: "volunteer",
    title: "봉사 찾기",
    description: "지역, 날짜, 관심 분야에 맞는 봉사를 한곳에서 찾아보세요.",
    icon: "/assets/icons/search.svg",
    accent: "#00c77b",
    soft: "#f1fffd",
  },
  {
    kind: "team",
    title: "함께할 팀 찾기",
    description: "혼자가 망설여진다면 비슷한 관심사의 사람들과 함께하세요.",
    icon: "/assets/icons/team.svg",
    accent: "#ffc247",
    soft: "#fffbf1",
  },
  {
    kind: "record",
    title: "활동 기록",
    description: "신청 일정과 참여 경험을 모아 나만의 기록으로 남겨보세요.",
    icon: "/assets/icons/footprints.svg",
    accent: "#d197d1",
    soft: "#fff3ff",
  },
  {
    kind: "community",
    title: "커뮤니티",
    description: "봉사 경험과 유용한 정보를 따뜻하게 나눠보세요.",
    icon: "/assets/icons/community.svg",
    accent: "#79baff",
    soft: "#f1f8ff",
  },
] as const;

export type LandingFeatureKind = (typeof landingFeatures)[number]["kind"];

export const interestCategories = [
  { label: "환경", icon: "/assets/icons/category-environment.svg", background: "#f1fffd", border: "#82d3ca", width: "w-[61px]" },
  { label: "교육", icon: "/assets/icons/category-education.svg", background: "#eef1ff", border: "#828ed2", width: "w-[61px]" },
  { label: "복지", icon: "/assets/icons/category-welfare.svg", background: "#fff3ff", border: "#d197d1", width: "w-[61px]" },
  { label: "문화", icon: "/assets/icons/category-culture.svg", background: "#fffbf1", border: "#fade9e", width: "w-[61px]" },
  { label: "지역 연계", icon: "/assets/icons/category-local.svg", background: "#f2fbf4", border: "#ccead5", width: "w-[82px]" },
  { label: "해외", icon: "/assets/icons/category-global.svg", background: "#f1f8ff", border: "#a6ccf4", width: "w-[61px]" },
] as const;

export const exploreInfoCards = [
  ["browse", "무료로 봉사 공고를 둘러볼 수 있어요", "회원가입 없이도 다양한 봉사 공고를 자유롭게 탐색해 보세요."],
  ["interest", "관심 분야와 지역에 맞춰 탐색할 수 있어요", "내 일정과 위치에 맞는 봉사를 손쉽게 필터링해 찾아보세요."],
  ["external", "외부 공고는 원문을 확인해 주세요", "외부 공고는 신청 전에 원문과 모집 조건을 꼭 확인해 주세요."],
] as const;

export const explorePostings = [
  {
    title: "한강공원 플로깅 🌿",
    description: "같이 한강 걸으면서 줍깅해요",
    region: "여의도",
    date: "26.05.16",
    dDay: "D-4",
    tag: "환경",
    icon: "/assets/icons/category-environment.svg",
    image: "/assets/landing/step-volunteer-plogging.png",
    border: "#82d3ca",
    background: "#f1fffd",
  },
  {
    title: "동화책 같이 읽어요 📖",
    description: "함께 책을 읽으며 따뜻한 시간 나눠요",
    region: "강남구",
    date: "26.05.23",
    dDay: null,
    tag: "문화",
    icon: "/assets/icons/category-culture.svg",
    image: "/assets/landing/step-volunteer-reading.png",
    border: "#fade9e",
    background: "#fffbf1",
  },
] as const;
