export type VolunteerType =
  | "companion"
  | "knowledge"
  | "action"
  | "support";

export interface VolunteerOption {
  id: string;
  type: VolunteerType;
  label: string;
  icon: string;
}

export interface VolunteerQuestion {
  id: string;
  title: string;
  options: readonly VolunteerOption[];
}

const icon = (question: number, type: VolunteerType) =>
  `/assets/volunteer-type/questions/q${question}-${type}.svg`;

export const volunteerQuestions = [
  {
    id: "q1",
    title: "봉사를 통해 가장 믿음이 가는 변화는?",
    options: [
      { id: "q1-companion", type: "companion", label: "누군가의 하루를 따뜻하게 만들기", icon: icon(1, "companion") },
      { id: "q1-knowledge", type: "knowledge", label: "배움으로 성장하고 잠재 가능성 넓히기", icon: icon(1, "knowledge") },
      { id: "q1-action", type: "action", label: "동네와 환경 직접 바꾸기", icon: icon(1, "action") },
      { id: "q1-support", type: "support", label: "보이지 않는 곳에서 활동을 지원하기", icon: icon(1, "support") },
    ],
  },
  {
    id: "q2",
    title: "나에게 가장 자연스러운 도움 방식은?",
    options: [
      { id: "q2-companion", type: "companion", label: "대화하며 공감하기", icon: icon(2, "companion") },
      { id: "q2-knowledge", type: "knowledge", label: "지식과 경험 설명하기", icon: icon(2, "knowledge") },
      { id: "q2-action", type: "action", label: "현장에서 직접 움직이기", icon: icon(2, "action") },
      { id: "q2-support", type: "support", label: "자료와 일정 꼼꼼하게 정리하기", icon: icon(2, "support") },
    ],
  },
  {
    id: "q3",
    title: "나에게 가장 편안한 활동 분위기는?",
    options: [
      { id: "q3-companion", type: "companion", label: "한 사람과 깊게 교류하기", icon: icon(3, "companion") },
      { id: "q3-knowledge", type: "knowledge", label: "소규모 팀과 함께 협력하기", icon: icon(3, "knowledge") },
      { id: "q3-action", type: "action", label: "많은 사람들과 활기차게 활동하기", icon: icon(3, "action") },
      { id: "q3-support", type: "support", label: "혼자 또는 비대면으로 기여하기", icon: icon(3, "support") },
    ],
  },
  {
    id: "q4",
    title: "나에게 맞는 참여 방식은?",
    options: [
      { id: "q4-companion", type: "companion", label: "정기적으로 활동하며 관계를 이어가기", icon: icon(4, "companion") },
      { id: "q4-knowledge", type: "knowledge", label: "프로젝트 기간동안 집중해서 참여하기", icon: icon(4, "knowledge") },
      { id: "q4-action", type: "action", label: "단기에 집중하여 결과 만들기", icon: icon(4, "action") },
      { id: "q4-support", type: "support", label: "가능한 시간에 유연하게 참여하기", icon: icon(4, "support") },
    ],
  },
  {
    id: "q5",
    title: "봉사할 때, 나에게 가장 가까운 모습은?",
    options: [
      { id: "q5-companion", type: "companion", label: "분위기가 어색하지 않게 먼저 말을 거는 모습", icon: icon(5, "companion") },
      { id: "q5-knowledge", type: "knowledge", label: "활동 방법이나 정보를 차근차근 설명해주는 모습", icon: icon(5, "knowledge") },
      { id: "q5-action", type: "action", label: "필요한 일을 발견하면 먼저 나서서 움직이는 모습", icon: icon(5, "action") },
      { id: "q5-support", type: "support", label: "일정과 준비물을 꼼꼼히 챙기는 모습", icon: icon(5, "support") },
    ],
  },
  {
    id: "q6",
    title: "활동이 끝난 뒤 남기고 싶은 것은?",
    options: [
      { id: "q6-companion", type: "companion", label: "함께 나눈 따뜻한 관계", icon: icon(6, "companion") },
      { id: "q6-knowledge", type: "knowledge", label: "서로의 성장과 배움", icon: icon(6, "knowledge") },
      { id: "q6-action", type: "action", label: "눈에 보이는 변화와 흔적", icon: icon(6, "action") },
      { id: "q6-support", type: "support", label: "꾸준하고 안정적인 기여", icon: icon(6, "support") },
    ],
  },
] as const satisfies readonly VolunteerQuestion[];

export const volunteerTypes: readonly VolunteerType[] = [
  "companion",
  "knowledge",
  "action",
  "support",
];

