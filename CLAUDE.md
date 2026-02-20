# CLAUDE CODE 학습 저장소

## 프로젝트 개요
Claude Code(Anthropic AI 코딩 에이전트)를 활용한 학습 기록 저장소.

## 응답 규칙
- 반드시 **한국어**로 응답할 것
- 모든 작업이 종료된 후에는 **"작업이 종료되었습니다."**라고 말할 것
- 코드 내 주석은 한국어 또는 영어 혼용 가능

## 기술 선택
- 프로젝트 성격에 따라 **최적의 기술 스택을 자유롭게 선택**할 것
- 순수 HTML/CSS/JS, React, Vue, Next.js, Svelte 등 프레임워크 사용 가능
- npm 패키지, 외부 라이브러리도 필요하면 자유롭게 사용
- 기술 선택 이유를 README 프롬프트 기록의 인사이트에 간단히 남길 것

## 코드 스타일
- JS/TS: ES6+ 문법, `const`/`let` 사용 (`var` 금지)
- 시맨틱 HTML 태그 사용 (section, nav, footer, article 등)
- 반응형 디자인 필수 (모바일/태블릿/데스크톱)
- 파일 상단에 용도를 설명하는 주석 블록 포함

## 디렉토리 구조
```
CLAUDE_CODE/
├── CLAUDE/                        # Claude 자기소개 페이지
│   ├── index.html
│   ├── style.css
│   └── script.js
├── 2026year developer's/          # 2026 개발자 현황 리포트
│   ├── index.html
│   ├── style.css
│   └── script.js
├── LYG/                           # 이윤건(LYG) 개발자 포트폴리오
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── profile.png
├── CLAUDE.md                      # Claude Code 설정 파일 (이 파일)
└── README.md                      # 프로젝트 설명 및 학습 기록
```

## 새 프로젝트 생성 규칙
- 프로젝트마다 별도 폴더를 만들어 구성 (기술 스택에 따라 파일 구조는 달라질 수 있음)
- 최고 수준의 디자인과 인터랙션을 기본으로 한다.
- 완성 후 README.md의 프로젝트 목록, 학습 기록, 프롬프트 기록을 업데이트할 것

## 작업 흐름
- 복잡한 작업은 계획(Plan) → 승인 → 구현 순서로 진행
- 파일 생성/수정 시 TodoWrite로 진행 상황을 추적
- 웹 데이터가 필요한 경우 WebSearch로 최신 정보를 조사한 뒤 반영

## Git 커밋 규칙
- 커밋 메시지 형식:
  ```
  [YYYY-MM-DD] 키워드: 내용

  - 바디
  - 바디
  ```

## IMPORTANT
- .env, 키, 비밀번호 등 민감 정보를 절대 코드에 포함하지 말 것
- git push는 사용자가 명시적으로 요청하지 않는 한 실행하지 말 것
- 기존 파일을 수정할 때는 반드시 Read로 먼저 읽은 뒤 수정할 것
