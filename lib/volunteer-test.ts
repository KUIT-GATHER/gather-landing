import {
  volunteerQuestions,
  volunteerTypes,
  type VolunteerType,
} from "@/data/volunteer-test";

export const VOLUNTEER_TEST_SESSION_KEY = "gather-volunteer-test";

export interface VolunteerTestSession {
  answers: Record<string, string>;
  shuffledOptionOrders: Record<string, string[]>;
  currentStep: number;
}

function shuffle<T>(items: readonly T[]): T[] {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }
  return result;
}

export function createVolunteerTestSession(): VolunteerTestSession {
  return {
    answers: {},
    shuffledOptionOrders: Object.fromEntries(
      volunteerQuestions.map((question) => [
        question.id,
        shuffle(question.options.map((option) => option.id)),
      ]),
    ),
    currentStep: 0,
  };
}

export function saveVolunteerTestSession(session: VolunteerTestSession) {
  sessionStorage.setItem(VOLUNTEER_TEST_SESSION_KEY, JSON.stringify(session));
}

export function resetVolunteerTestSession() {
  const session = createVolunteerTestSession();
  saveVolunteerTestSession(session);
  return session;
}

function isValidSession(value: unknown): value is VolunteerTestSession {
  if (!value || typeof value !== "object") return false;
  const session = value as Partial<VolunteerTestSession>;
  if (
    !session.answers ||
    typeof session.answers !== "object" ||
    Array.isArray(session.answers) ||
    !session.shuffledOptionOrders ||
    typeof session.shuffledOptionOrders !== "object" ||
    Array.isArray(session.shuffledOptionOrders) ||
    !Number.isInteger(session.currentStep) ||
    Number(session.currentStep) < 0 ||
    Number(session.currentStep) >= volunteerQuestions.length
  ) {
    return false;
  }

  const questionById = new Map<
    string,
    (typeof volunteerQuestions)[number]
  >(
    volunteerQuestions.map((question) => [question.id, question]),
  );
  const answersAreValid = Object.entries(session.answers).every(
    ([questionId, optionId]) => {
      const question = questionById.get(questionId);
      return (
        question !== undefined &&
        typeof optionId === "string" &&
        question.options.some((option) => option.id === optionId)
      );
    },
  );

  if (!answersAreValid) return false;

  return volunteerQuestions.every((question) => {
    const order = session.shuffledOptionOrders?.[question.id];
    const validIds = new Set<string>(
      question.options.map((option) => option.id),
    );
    return (
      Array.isArray(order) &&
      order.length === question.options.length &&
      new Set(order).size === order.length &&
      order.every((optionId) => validIds.has(optionId))
    );
  });
}

export function loadVolunteerTestSession(): VolunteerTestSession {
  try {
    const stored = sessionStorage.getItem(VOLUNTEER_TEST_SESSION_KEY);
    if (stored) {
      const parsed: unknown = JSON.parse(stored);
      if (isValidSession(parsed)) return parsed;
    }
  } catch {
    // A malformed or unavailable session should never block the test.
  }
  return resetVolunteerTestSession();
}

export function calculateVolunteerResult(answers: Record<string, string>) {
  const scores: Record<VolunteerType, number> = {
    companion: 0,
    knowledge: 0,
    action: 0,
    support: 0,
  };

  for (const question of volunteerQuestions) {
    const answerId = answers[question.id];
    const option = question.options.find((item) => item.id === answerId);
    if (option) scores[option.type] += 1;
  }

  const maxScore = Math.max(...Object.values(scores));
  const tiedTypes = volunteerTypes.filter((type) => scores[type] === maxScore);
  const type = tiedTypes[Math.floor(Math.random() * tiedTypes.length)];

  return { type, matchCount: scores[type], scores };
}
