# 아이콘 컴포넌트 패턴

## 컴포넌트 구조

```jsx
export const NewIcon = (props) => (
  <svg {...defaultProps} {...props}>
    {/* 1. <defs> - 필터, 재사용 shape (필요 시만) */}
    {/* 2. 그림자 레이어 */}
    {/* 3. Back 구조 (#3E3E44 stroke) */}
    {/* 4. Mid 구조 (#62666D stroke) */}
    {/* 5. Front 구조 (#D0D6E0 stroke) */}
    {/* 6. Glow 오버레이 (line-glow) */}
  </svg>
);
```

## defaultProps 사용

파일 상단에 선언된 `defaultProps`를 반드시 spread. 개별 아이콘에서 재선언 금지.

```js
const defaultProps = {
  width: '100%',
  height: '100%',
  viewBox: '0 0 100 100',
  fill: 'none',
};
```

## 새 아이콘 추가 절차

1. `src/components/Icons.jsx`에 컴포넌트 export 추가
2. `src/pages/IconSetPage.jsx`에서:
   - import 추가
   - `iconData` 배열에 `{ title, desc, Icon }` 추가

## 애니메이션 적용

SVG 요소의 `className`에 CSS 클래스 할당:

| 클래스 | 효과 | 적합한 상황 |
|--------|------|-------------|
| `animate-float` | 부유 (4s) | 전체 아이콘 떠있는 느낌 |
| `animate-pop` | 팝업 (3s) | 특정 요소 강조 |
| `animate-core` | 펄스 (3s) | 핵심 요소 맥동 |
| `animate-blink` | 깜빡임 (1s) | 커서, LED |
| `animate-click` | 바운스 (2s) | 클릭 인터랙션 |
| `line-glow` | 선 흐름 (2.5s) | 핵심 윤곽에 빛 흐름 |
| `line-glow-long` | 긴 선 흐름 (4s) | 긴 경로용 |

### 규칙

- 아이콘당 애니메이션 1~2개만 사용
- `line-glow`는 가장 특징적인 윤곽선의 path를 그대로 복제하여 적용
- `animate-float`는 `<g>` 그룹으로 전체를 감싸서 적용
- `animate-core`는 중심 요소 하나에만 적용

## 네이밍

- 컴포넌트: PascalCase + `Icon` 접미사 (예: `AITutorIcon`)
- iconData title: 2~3단어 영문 (예: "The AI Tutor")
- iconData desc: 간결한 부제 (예: "Always-on guidance")
