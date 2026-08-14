<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Gather Landing 프로젝트 작업 규칙

이 문서는 자동화된 개발 도구가 반드시 지켜야 하는 프로젝트 불변 규칙만 정의한다. 상세한 실행 방법과 구조 설명은 `README.md`를 따른다.

## 작업 시작 전

- 현재 브랜치와 working tree를 확인하고 사용자의 기존 변경을 덮어쓰지 않는다.
- `package.json`, 실제 route 구조, 관련 component와 data/lib 코드를 먼저 읽는다.
- Next.js API나 convention을 다룰 때는 위 managed block의 지시에 따라 설치된 버전의 `node_modules/next/dist/docs/` 문서를 먼저 확인한다.
- UI 구현이나 수정은 관련 Figma node의 design context와 screenshot을 기준으로 한다.

## 디자인

- Figma를 문구와 정적 UI의 구현 기준으로 사용한다.
- 명시적 승인 없이 spacing, typography, color, asset, 위치, 문구를 재해석하지 않는다.
- 반응형 대응은 desktop 최종 상태를 바꾸지 않는 범위에서 적용한다.
- 애니메이션 종료 후의 화면은 정적 Figma 디자인 및 현재 승인된 UI와 같아야 한다.
- 디자인 작업과 구조 리팩터링을 한 변경에 섞지 않는다. 구조 분리 시 기존 DOM 순서와 className을 우선 보존한다.

## 아키텍처

- Server Component를 기본으로 사용한다.
- `"use client"`는 상태, 이벤트, 브라우저 API가 필요한 leaf boundary에만 추가한다.
- `app/page.tsx`는 랜딩 section을 조립하며 section 구현이나 기능 로직을 직접 소유하지 않는다.
- 현재의 `app / components / config / data / lib` 구조를 유지한다.
- 프로젝트 규모에 필요하지 않은 FSD, 전역 상태관리, repository layer, 범용 wrapper를 도입하지 않는다.
- component 분리 기준은 한 화면 영역의 책임과 실제 재사용성이다. 텍스트나 작은 element 단위로 과도하게 분리하지 않는다.

## 랜딩 모션

- 랜딩 motion stack은 GSAP, ScrollTrigger, `@gsap/react`이다. 다른 animation library를 혼용하지 않는다.
- motion orchestration은 `components/motion/LandingMotion.tsx`에서 관리한다.
- `useGSAP` 또는 `gsap.context`를 사용하고 listener, timeline, ScrollTrigger를 cleanup한다.
- `prefers-reduced-motion`에서는 모든 콘텐츠가 최종 상태로 즉시 보여야 한다.
- illustration 내부의 Figma rotation, scale, transform을 GSAP으로 덮어쓰지 않는다. 필요한 경우 바깥 wrapper만 animate한다.
- transform과 opacity를 우선 사용하고 layout을 다시 계산시키는 속성 animation은 피한다.

## 봉사 유형 테스트

- 질문과 option의 typed static data는 `data/volunteer-test.ts`에서 관리한다.
- 결과 문구와 표현 데이터는 `data/volunteer-results.ts`에서 관리한다.
- 세션과 결과 계산 같은 순수 로직은 `lib/`에 둔다.
- 질문별 answer id를 source of truth로 유지하며 카드 위치나 누적 `score++`로 결과를 계산하지 않는다.
- shuffle은 테스트 시작 시 한 번만 만들고 같은 세션에서 다시 생성하지 않는다.
- 이전 질문 이동, 답변 변경, 1초 선택 상태, timer cleanup 동작을 보존한다.
- 결과 페이지는 sessionStorage 없이도 route param으로 직접 진입할 수 있어야 한다.

## API

- Gather endpoint, route, category enum을 추측하지 않는다. 확인된 계약만 사용한다.
- 브라우저에서 받은 API 응답은 렌더링 전에 runtime validation을 거친다.
- 추천 API 실패나 빈 응답이 결과 페이지 전체를 깨뜨리면 안 된다.
- CORS 문제를 숨기기 위한 임의 proxy를 추가하지 않는다.
- 인증 정보나 비밀값을 `NEXT_PUBLIC_*` 환경변수에 저장하지 않는다.

## 자산

- Figma temporary URL을 runtime 코드에 남기지 않는다.
- 자산은 `public/assets/` 아래에 용도별로 저장하고 semantic filename을 사용한다.
- 새 파일을 추가하기 전에 같은 의미나 내용의 자산이 있는지 확인한다.
- 단순한 배경, 선, 원은 CSS로 구현할 수 있지만 실제 illustration/vector를 임의 CSS나 emoji로 대체하지 않는다.

## 의존성과 설정

- 기존 stack으로 해결할 수 있는 기능에는 새 dependency를 추가하지 않는다.
- dependency를 추가할 때는 Next.js 16과 React 19 호환성, bundle 영향, 유지보수 필요성을 확인한다.
- Next.js 설정은 실제 요구가 있는 항목만 추가한다.
- 환경변수를 추가하거나 변경하면 `.env.example`과 `README.md`를 함께 갱신한다.

## 변경과 커밋

- 사용자의 기존 변경과 무관한 파일을 수정하거나 되돌리지 않는다.
- 논리적으로 독립된 변경은 `type: 한국어 요약` 형식의 작은 커밋으로 나눈다.
- 디자인 수정, 구조 리팩터링, dependency/도구 도입을 가능한 한 서로 다른 커밋으로 유지한다.
- 생성된 빌드 산출물과 로컬 환경 파일은 커밋하지 않는다.

## 완료 전 검증

최소 다음 명령을 실행한다.

```bash
npm run lint
npm run typecheck
npm run build
```

UI를 수정했다면 관련 desktop/mobile 화면, horizontal overflow, anchor navigation, motion 종료 위치, reduced-motion 상태를 추가로 확인한다.
