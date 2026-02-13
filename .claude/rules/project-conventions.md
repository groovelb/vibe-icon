# 프로젝트 컨벤션

## MUI v7

- Grid는 `size` prop 사용: `<Grid size={{ xs: 15, md: 10, lg: 6 }}>`
- Grid container: `columns={30}` 기준
- styled() 컴포넌트 패턴 사용

## 테마

- 다크 모드 전용. 라이트 모드 고려 불필요
- 배경: `#08090A`
- 텍스트: `#F7F8F8` (primary), `#64748B` (secondary)
- 강조색: `#818CF8` (Indigo-400)

## CSS

- 글로벌 애니메이션은 `src/index.css`에 정의
- 컴포넌트 스타일은 `styled()` 또는 `sx` prop
- grid-bg 클래스: 40px 간격 그리드 배경

## 파일 수정 규칙

- 아이콘 추가/수정: `src/components/Icons.jsx` 만 수정
- 갤러리 등록: `src/pages/IconSetPage.jsx`의 `iconData` 배열
- 새 애니메이션 클래스: `src/index.css`에 추가
- 테마 변경: `src/theme/theme.js`

## JSX

- React 19 사용, import React 불필요
- PropTypes 사용 (TypeScript 미사용)
- Arrow function export 패턴 (아이콘)
- function declaration export (페이지/카드)
