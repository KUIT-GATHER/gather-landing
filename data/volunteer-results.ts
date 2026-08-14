import type { VolunteerType } from "@/data/volunteer-test";

export interface ResultActivity {
  title: string;
  description: string;
  fit: string;
}

export interface VolunteerResultData {
  name: string;
  subtitle: string;
  icon: string;
  iconWidth: number;
  iconHeight: number;
  decoration: string;
  background: string;
  accent: string;
  strong: string;
  keywords: readonly string[];
  reason: string;
  strengths: readonly string[];
  examples: readonly ResultActivity[];
  campaigns: readonly ResultActivity[];
  tags: readonly string[];
  apiCategory: "WELFARE" | "EDUCATION" | "ENVIRONMENT" | "COMMUNITY";
}

export const volunteerResultData: Record<VolunteerType, VolunteerResultData> = {
  companion: {
    name: "따뜻한 동행가",
    subtitle: "곁에 있는 것만으로도 누군가의 세상이 달라져요",
    icon: "/assets/volunteer-type/results/companion.svg",
    iconWidth: 175,
    iconHeight: 162,
    decoration: "/assets/volunteer-type/result-decoration-circle.svg",
    background: "#fffbf1",
    accent: "#ffd166",
    strong: "#ffb300",
    keywords: ["진정성 있는 관계", "감정적 지지", "꾸준한 신뢰"],
    reason: "당신은 누군가의 하루를 따뜻하게 만드는 것에 가장 큰 보람을 느끼고, 대화와 공감으로 돕는 방식이 자연스러우며, 1:1로 깊이 교류하는 환경을 선호하고, 사람의 이야기에 귀 기울이며 문제를 함께 해결해 나가는 역할에서 높은 만족감과 성취감을 느낍니다.",
    strengths: ["깊은 공감 능력으로 상대방이 마음을 열게 만드는 힘", "일관된 관심으로 지속적인 신뢰 관계를 형성하는 능력", "작은 변화도 섬세하게 알아채는 세심함"],
    examples: [
      { title: "어르신 말벗 봉사", description: "독거 어르신과 정기적으로 만나 대화하고 일상을 함께하는 활동", fit: "공감과 경청이 강점인 당신에게 딱 맞아요" },
      { title: "아동 돌봄 지원", description: "지역 아동센터 또는 방과후 프로그램에서 아이들의 정서를 지원하는 활동", fit: "따뜻한 관계 형성 능력이 빛을 발해요" },
      { title: "장애인 보조 활동", description: "장애인의 일상생활과 외출을 위해 지원하며 자립을 돕는 활동", fit: "꾸준한 신뢰 관계를 맺는 스타일과 잘 맞아요" },
    ],
    campaigns: [
      { title: "고립 예방 캠페인", description: "사회적 고립을 겪는 이웃을 발굴하고 연결하는 인식 개선 활동", fit: "관계의 가치를 중시하는 당신의 메시지가 힘이 돼요" },
      { title: "배리어프리 인식 개선", description: "장애인의 이동권 · 접근권을 알리는 캠페인 참여", fit: "세심한 시선으로 현장의 불편함을 발견할 수 있어요" },
      { title: "취약계층 물품 나눔", description: "생필품 · 식품 등을 직접 전달하며 소외된 이웃과 연결되는 활동", fit: "직접 만남을 통해 진심을 전할 수 있어요" },
    ],
    tags: ["복지 · 돌봄", "아동 · 청소년"],
    apiCategory: "WELFARE",
  },
  knowledge: {
    name: "지식 나눔가",
    subtitle: "배움을 나눌 때, 둘 다 성장해요",
    icon: "/assets/volunteer-type/results/knowledge.svg",
    iconWidth: 162,
    iconHeight: 162,
    decoration: "/assets/volunteer-type/result-decoration-knowledge.svg",
    background: "#e4f1ff",
    accent: "#79baff",
    strong: "#79baff",
    keywords: ["성장 지향", "지식의 민주화", "가능성 확장"],
    reason: "당신은 배움과 가능성을 넓히는 것에 가장 큰 보람을 느끼고, 지식과 경험을 설명하는 방식이 자연스러우며, 소규모 팀과 협력하는 환경을 선호하고, 상대의 이해를 돕고 새로운 관점을 제시하며 함께 성장하는 과정에서 큰 성취감을 느낍니다. 또한 서로에게 긍정적인 영향을 주고받는 협력적인 환경에서 가장 높은 몰입과 만족을 경험합니다.",
    strengths: ["자신의 경험과 지식을 쉽게 설명하는 전달력", "상대의 수준에 맞게 접근하는 유연한 교육 방식", "성장을 함께 목격하는 데서 오는 깊은 보람"],
    examples: [
      { title: "교육 봉사 (초 · 중등)", description: "학습 취약 아동·청소년에게 국어·수학·영어 등을 가르치는 정기 교육 활동", fit: "지식 전달에 보람을 느끼는 당신에게 최적이에요" },
      { title: "청소년 멘토링", description: "진로 고민 중인 청소년과 1:1 또는 소그룹으로 만나 경험을 나누는 활동", fit: "소규모 팀에서 방법을 알려주는 역할이 잘 맞아요" },
      { title: "디지털 교육 봉사", description: "스마트폰 · 키오스크 사용이 어려운 어르신 · 다문화 가정 대상 디지털 역량 교육", fit: "배움의 격차를 줄이는 데 진심인 당신의 가치와 맞아요" },
    ],
    campaigns: [
      { title: "디지털 격차 해소 캠페인", description: "정보 소외 계층을 위한 디지털 접근성 향상 인식 활동", fit: "지식의 민주화를 믿는 나눔가에게 의미 있는 활동이에요" },
      { title: "진로 멘토링 캠페인", description: "청소년에게 다양한 직업과 삶의 방식을 소개하는 공익 프로그램 참여", fit: "경험을 나누는 것이 자연스러운 당신에게 잘 맞아요" },
      { title: "정보 접근성 개선 활동", description: "저소득층 · 장애인 등을 위한 정보 격차 해소 및 정책 지지 서명", fit: "공정한 배움의 기회를 중시하는 가치관과 연결돼요" },
    ],
    tags: ["멘토링", "디지털 · IT", "청소년 교육"],
    apiCategory: "EDUCATION",
  },
  action: {
    name: "변화를 만드는 행동가",
    subtitle: "두 손으로 세상을 조금씩 더 나은 방향으로 만들어가요",
    icon: "/assets/volunteer-type/results/action.svg",
    iconWidth: 138,
    iconHeight: 138,
    decoration: "/assets/volunteer-type/result-decoration-action.svg",
    background: "#f1fffd",
    accent: "#82d3ca",
    strong: "#00d2ba",
    keywords: ["즉각적 행동", "눈에 보이는 변화", "공동체 환경 개선"],
    reason: "당신은 동네와 환경을 직접 바꾸는 것에 가장 큰 보람을 느끼고, 현장에서 몸을 움직이는 방식이 자연스러우며, 많은 사람과 활기차게 활동하는 환경을 선호하고, 직접 행동으로 변화를 만들어내며 사람들과 함께 지역사회에 긍정적인 영향을 전하는 과정에서 큰 성취감을 느낍니다.",
    strengths: ["빠른 실행력과 현장 추진력", "많은 사람들과 에너지를 나누는 활발함", "결과물이 눈에 보일 때 가장 큰 보람을 느끼는 동기"],
    examples: [
      { title: "한강공원 플로깅", description: "한강 일대를 걸으며 쓰레기를 줍는 환경 정화 활동", fit: "몸을 움직이며 즉각적인 변화를 만드는 스타일에 딱 맞아요" },
      { title: "지역 행사 운영 지원", description: "지역 축제, 마라톤, 공익 행사 등의 현장 스태프로 활동", fit: "많은 사람과 활기차게 일하는 환경을 즐기는 행동가에게 최적이에요" },
      { title: "재난 복구 지원", description: "자연재해 또는 긴급 상황 발생 시 복구 현장을 지원하는 활동", fit: "빠른 실행력과 추진력이 필요한 현장에서 빛을 발해요" },
    ],
    campaigns: [
      { title: "플로깅 챌린지", description: "조깅하며 쓰레기 줍기를 생활화하는 환경 캠페인", fit: "몸으로 실천하는 것을 좋아하는 행동가에게 잘 맞아요" },
      { title: "기후활동 캠페인", description: "탄소 감축, 친환경 생활 실천을 알리는 공익 캠페인 참여", fit: "눈에 보이는 환경 변화에 관심 있는 당신의 가치와 맞아요" },
      { title: "동물보호·입양 인식 개선", description: "유기동물 보호와 입양 문화를 확산시키는 캠페인 및 현장 활동", fit: "현장에서 직접 행동하며 변화를 만드는 스타일과 잘 어울려요" },
    ],
    tags: ["환경 · 생태", "플로깅", "캠페인"],
    apiCategory: "ENVIRONMENT",
  },
  support: {
    name: "든든한 지원가",
    subtitle: "보이지 않는 곳에서 모든 것을 가능하게 해요",
    icon: "/assets/volunteer-type/results/support.svg",
    iconWidth: 162,
    iconHeight: 162,
    decoration: "/assets/volunteer-type/result-decoration-support.svg",
    background: "#fff3ff",
    accent: "#d197d1",
    strong: "#d197d1",
    keywords: ["운영 안정성", "체계적 지원", "지속 가능한 기여"],
    reason: "당신은 보이지 않는 곳에서 활동을 지원하는 것에 가장 큰 보람을 느끼고, 자료와 일정을 꼼꼼하게 정리하는 방식이 자연스러우며, 혼자 또는 비대면으로 집중하는 환경을 선호하고, 체계적인 준비와 세심한 관리로 팀이 원활하게 움직일 수 있도록 뒷받침하는 과정에서 큰 성취감과 보람을 느낍니다.",
    strengths: ["체계적으로 계획을 세우고 실행하는 운영 능력", "디지털 도구와 콘텐츠를 활용한 비대면 기여", "꾸준하고 유연한 참여로 조직의 기반을 지지"],
    examples: [
      { title: "문화 행사 운영 지원", description: "공연, 전시, 지역 행사의 기획 · 운영 · 정산 등을 지원하는 백오피스 활동", fit: "운영을 책임지는 역할을 좋아하는 지원가에게 딱이에요" },
      { title: "온라인 봉사 (번역·편집·자료 정리)", description: "비영리단체의 자료 번역, 문서 정리, DB 정비 등을 온라인으로 수행", fit: "혼자 집중해서 기여하는 방식을 선호하는 당신에게 최적이에요" },
      { title: "봉사 콘텐츠 제작", description: "SNS 홍보 콘텐츠, 카드뉴스, 영상 등을 제작해 단체 홍보를 지원", fit: "디지털 역량으로 보이지 않는 곳에서 기여하는 가치와 맞아요" },
    ],
    campaigns: [
      { title: "공익 콘텐츠 제작 캠페인", description: "사회적 고립을 겪는 이웃을 발굴하고 연결하는 인식 개선 활동", fit: "창작과 운영 능력을 살릴 수 있는 활동이에요" },
      { title: "비영리단체 홍보 지원", description: "소규모 비영리단체의 SNS 운영, 뉴스레터 발행, 디자인 작업 지원", fit: "운영 안정성에 기여하고 싶은 지원가의 가치와 딱 맞아요" },
      { title: "온라인 서명·인식 개선", description: "사회적 의제에 대한 온라인 서명 참여 및 공유 · 확산 활동", fit: "비대면으로 의미 있는 기여를 할 수 있어요" },
    ],
    tags: ["온라인", "운영 지원", "콘텐츠 · 문화"],
    apiCategory: "COMMUNITY",
  },
};

export function isVolunteerType(value: string): value is VolunteerType {
  return value in volunteerResultData;
}
