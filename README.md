# Gather Landing

Gather 서비스 소개와 봉사 유형 테스트를 제공하는 랜딩페이지입니다.

## 주요 기능

- Gather 서비스 및 주요 기능 소개
- 6문항 봉사 유형 테스트
- 테스트 진행 상태 저장
- 유형별 결과 및 추천 공고 제공
- 결과 링크 복사 및 PNG 저장
- 반응형 레이아웃과 스크롤 애니메이션

## 기술 스택

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- GSAP / ScrollTrigger
- html-to-image

## 로컬 실행

Node.js 24를 사용합니다.

```bash
nvm use
npm ci
cp .env.example .env.local
npm run dev
```

개발 서버는 기본적으로 [http://localhost:3000](http://localhost:3000)에서 실행됩니다.

## 환경변수

| 변수 | 설명 | 로컬 권장값 |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | metadata와 공유 URL의 기준 주소 | `http://localhost:3000` |
| `NEXT_PUBLIC_GATHER_WEB_URL` | Gather 웹 서비스 주소 | `https://gathernow.kr` |
| `NEXT_PUBLIC_GATHER_API_URL` | Gather API 주소 | `https://api.gathernow.kr` |

운영 환경의 `NEXT_PUBLIC_SITE_URL`은 `https://intro.gathernow.kr`로 설정합니다.


## 명령어

| 명령어 | 설명 |
| --- | --- |
| `npm run dev` | 개발 서버 실행 |
| `npm run build` | 프로덕션 빌드 |
| `npm run start` | 프로덕션 서버 실행 |
| `npm run lint` | ESLint 검사 |
| `npm run lint:fix` | ESLint 자동 수정 |
| `npm run typecheck` | TypeScript 타입 검사 |

## 라우트

| 경로 | 설명 |
| --- | --- |
| `/` | 메인 랜딩 |
| `/volunteer-type` | 봉사 유형 테스트 소개 |
| `/volunteer-type/test` | 봉사 유형 테스트 |
| `/volunteer-type/result/[type]` | 봉사 유형 결과 |


## 디렉터리 구조

```text
app/                  # App Router 페이지와 metadata
components/
  common/             # 공통 UI
  landing/            # 랜딩 section과 header/footer
  motion/             # GSAP 랜딩 애니메이션
  volunteer-type/     # 봉사 유형 테스트 및 결과 UI
config/               # 서비스 URL 설정
data/                 # 질문과 결과 데이터
lib/                  # 세션, 결과 계산, API 유틸리티
public/assets/        # 폰트, 이미지, SVG
```