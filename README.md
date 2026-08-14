# Gather Landing

Gather 서비스 소개와 봉사 유형 테스트를 제공하는 공식 랜딩페이지입니다.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- GSAP / ScrollTrigger
- html-to-image

## Getting Started

```bash
nvm use
npm ci
cp .env.example .env.local
npm run dev
```

개발 서버는 기본적으로 [http://localhost:3000](http://localhost:3000)에서 실행됩니다.

## Environment Variables

| 변수 | 설명 | 로컬 기본값 |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | metadata와 공유 URL의 기준이 되는 랜딩 origin | `http://localhost:3000` |
| `NEXT_PUBLIC_GATHER_WEB_URL` | Gather 웹 서비스 origin | `https://gathernow.kr` |
| `NEXT_PUBLIC_GATHER_API_URL` | Gather API origin | `https://api.gathernow.kr` |

Vercel Production에서는 `NEXT_PUBLIC_SITE_URL=https://intro.gathernow.kr` 설정이 필요합니다.

## Routes

| Route | 설명 |
| --- | --- |
| `/` | 서비스 랜딩 |
| `/volunteer-type` | 봉사 유형 테스트 소개 |
| `/volunteer-type/test` | 질문 1~6 진행 |
| `/volunteer-type/result/[type]` | 유형별 결과 |

## Project Structure

```text
app/                  # App Router route와 metadata
components/
  common/             # 브랜드 공통 UI
  landing/            # 랜딩 section과 header/footer
  motion/             # GSAP 랜딩 motion orchestration
  volunteer-type/     # 테스트 및 결과 UI
config/               # 서비스 URL 설정
data/                 # 봉사 유형 typed static data
lib/                  # 테스트 상태·계산·API 유틸리티
public/assets/        # 로컬 font, image, SVG
```

## Scripts

```bash
npm run dev
npm run lint
npm run lint:fix
npm run typecheck
npm run build
npm run start
```

## Branch / Deployment

| Branch | Environment |
| --- | --- |
| `main` | Vercel Production (`intro.gathernow.kr`) |
| `develop` | Vercel Preview |
| `feature/*` | Vercel Preview |

## Design & Motion

- [Gather Figma](https://www.figma.com/design/W1ePrmbkQWAUv6BYK9wwDH/Gather)는 UI source of truth입니다.
- 랜딩 애니메이션의 종료 상태는 정적 Figma 디자인과 같아야 합니다.
- 랜딩 motion은 GSAP과 ScrollTrigger를 사용하며 `prefers-reduced-motion`을 지원합니다.
- Figma 임시 asset URL은 runtime에서 사용하지 않고 `public/assets/`에 저장합니다.
