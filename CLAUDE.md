# Generative Icon System

Isometric + Mono Line 스타일 SVG 아이콘을 코드로 생성하는 실험 프로젝트.

## 기술 스택

- React 19 + Vite 7 + MUI v7 (dark theme only)
- MUI Grid v2: 반드시 `size` prop 사용 (`size={{ xs: 15, md: 10, lg: 6 }}`)
- 폰트: Outfit(제목 h1~h3), Pretendard Variable(body)
- 배경색: `#08090A`

## 핵심 규칙

- 아이콘 SVG viewBox는 항상 `0 0 100 100`
- strokeWidth는 항상 `0.5`
- fill은 `#08090A`(배경색) 또는 `none`만 사용
- 컬러풀한 색상 절대 금지. 모노톤 3단계 밝기만 사용
- 모든 아이콘은 `defaultProps` spread로 시작
- 새 아이콘 추가 시 `Icons.jsx`에 컴포넌트, `IconSetPage.jsx`의 `iconData`에 등록

## 파일 구조

```
src/
├── components/
│   ├── Icons.jsx          # 모든 아이콘 SVG 컴포넌트 (여기에 추가)
│   └── IconCard.jsx       # 아이콘 카드 래퍼 (수정 불필요)
├── pages/
│   └── IconSetPage.jsx    # 갤러리 페이지 (iconData 배열 관리)
├── theme/
│   └── theme.js           # MUI 테마 설정
├── index.css              # 글로벌 CSS + 애니메이션 클래스
├── main.jsx               # 앱 엔트리
└── App.jsx                # 루트 컴포넌트
```

## 상세 규칙은 `.claude/rules/` 참조
