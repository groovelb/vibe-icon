# PRD: Generative Icon System

## 프로젝트 개요

Isometric + Mono Line 스타일의 아이콘을 생성형 AI(Claude)로 만드는 실험 프로젝트.
코드로 SVG 아이콘을 생성하고, React 갤러리에서 시각적으로 확인한다.

## 기술 스택

- **프레임워크**: React 19 + Vite 7
- **UI 라이브러리**: MUI v7 (Grid v2 `size` prop 사용)
- **스타일링**: Emotion (styled-components) + CSS 애니메이션
- **폰트**: Outfit(제목), Pretendard Variable(본문)
- **테마**: 다크 모드 전용 (`#08090A` 배경)

---

## 아이콘 디자인 규칙

### 1. 캔버스

| 속성 | 값 |
|------|-----|
| viewBox | `0 0 100 100` |
| 기본 width/height | `100%` (부모 컨테이너에 맞춤) |
| fill | `none` (SVG 루트) |

### 2. 컬러 팔레트 (3-Tier Depth System)

아이콘은 **색상이 아닌 밝기**로 깊이를 표현한다. 채도 없는 모노톤 계열만 사용.

| 역할 | 색상 | 용도 |
|------|------|------|
| **Front (전면)** | `#D0D6E0` | 가장 앞 면, 주요 윤곽선 |
| **Mid (중간)** | `#62666D` | 중간 깊이, 보조 구조선 |
| **Back (후면)** | `#3E3E44` | 뒷면, 그림자 면, 보조선 |
| **Fill (채움)** | `#08090A` | 배경과 동일색으로 면 채움 (잘라낸 효과) |
| **Glow (강조)** | `#818CF8` | line-glow 애니메이션 전용 (Indigo-400) |
| **Core Pulse** | `#5E6AD2` | animate-core의 하이라이트 색상 |

### 3. 스트로크 규칙

| 속성 | 값 |
|------|-----|
| strokeWidth | `0.5` (고정) |
| strokeLinecap | `round` (glow 라인만) |
| fill | `#08090A` 또는 `none` |
| 보조선 | `strokeDasharray="2 2"` 또는 `"4 4"` |

### 4. 아이소메트릭 투영법

- **30도 각도** 기반의 아이소메트릭 투영
- 다이아몬드(마름모) = 윗면: `M x1 y1 L x2 y2 L x3 y3 L x4 y4 Z`
- 육각형 프리즘 = 3D 박스: 윗면 + 좌측면 + 우측면을 별도 path로 분리
- 수동 좌표 계산 (CSS transform 아닌 path 데이터로 직접 표현)
- 아이소메트릭 비율: X 이동량 대비 Y 이동량 = 2:1 (예: X+10 → Y+5)

### 5. 깊이 표현 기법

| 기법 | 설명 |
|------|------|
| **그림자 타원** | `<ellipse>` 하단 배치, `opacity="0.6"`, SVG filter blur |
| **면 분리** | 윗면/좌측면/우측면을 각각 다른 밝기의 stroke로 |
| **오프셋 복제** | 동일 형태를 `translate(0, 4)` 등으로 아래 복제, 낮은 opacity |
| **점선 보조선** | `strokeDasharray`로 숨은 선/투영선 표현 |
| **수직선 연결** | 윗면과 아랫면을 수직 stroke로 연결하여 높이감 |

---

## 애니메이션 시스템

CSS 클래스 기반. SVG 요소의 `className`에 할당.

| 클래스 | 효과 | 용도 |
|--------|------|------|
| `animate-float` | 위아래 3px 부유 (4s) | 전체 아이콘 부유감 |
| `animate-pop` | 위아래 4px 팝업 (3s) | 특정 요소 강조 |
| `animate-core` | 스케일+투명도+색상 펄스 (3s) | 핵심 요소 맥동 |
| `animate-blink` | step-end 깜빡임 (1s) | 커서, 표시등 |
| `animate-click` | 아래로 3px 바운스 (2s) | 클릭 인터랙션 |
| `line-glow` | stroke-dashoffset 이동 (2.5s) | 선 따라 빛 흐름 |
| `line-glow-long` | dasharray 확장 (4s) | 긴 경로용 glow |

### line-glow 속성

```css
stroke: #818CF8;
stroke-width: 0.8;
stroke-dasharray: 15 85;
stroke-linecap: round;
filter: drop-shadow(0 0 2px #6366f1);
opacity: 0.9;
fill: none;
```

---

## 아이콘 컴포넌트 패턴

### 구조

```jsx
export const IconName = (props) => (
  <svg {...defaultProps} {...props}>
    {/* 1. defs (필터, 재사용 shape) - 필요 시 */}
    {/* 2. 그림자 레이어 (ellipse 또는 offset 복제) */}
    {/* 3. 후면 구조 (Back stroke #3E3E44) */}
    {/* 4. 중간 구조 (Mid stroke #62666D) */}
    {/* 5. 전면 구조 (Front stroke #D0D6E0) */}
    {/* 6. Glow 오버레이 (line-glow 클래스) */}
  </svg>
);
```

### defaultProps

```js
const defaultProps = {
  width: '100%',
  height: '100%',
  viewBox: '0 0 100 100',
  fill: 'none',
};
```

### 레이어 순서 (아래→위)

1. **Shadow** - 바닥 그림자 (ellipse/filter)
2. **Back faces** - `#3E3E44` stroke, 가장 뒤
3. **Mid faces** - `#62666D` stroke, 중간 깊이
4. **Front faces** - `#D0D6E0` stroke, 가장 앞
5. **Solid fills** - `#D0D6E0` fill로 채워진 강조 요소
6. **Glow overlay** - `line-glow` 클래스가 적용된 path (같은 경로를 재사용)

---

## 갤러리 시스템

### IconCard 컴포넌트

- 96x96px 아이콘 래퍼
- hover 시 `translateY(-8px)` + SVG drop-shadow
- title (Outfit 500, 0.875rem) + description (Pretendard, 0.75rem)

### IconSetPage

- `grid-bg` CSS 클래스 (40px 그리드 배경)
- MUI Grid: `columns={30}`, 반응형 `size={{ xs: 15, md: 10, lg: 6 }}`
- `iconData` 배열에서 아이콘 메타데이터 관리

---

## 현재 아이콘 목록 (17개)

| 이름 | 설명 | 주요 형태 |
|------|------|-----------|
| AITutorIcon | AI 튜터 | 육각 프리즘 + 내부 코어 |
| KnowledgeFlowIcon | 지식 흐름 | 파동형 적층 레이어 |
| StepUpRoadmapIcon | 단계별 로드맵 | 3단 계단형 다이아몬드 |
| CodeSandboxIcon | 코드 샌드박스 | 와이어프레임 큐브 + 내부 박스 |
| LiveSyncIcon | 실시간 동기화 | 대칭 패널 + 연결선 |
| SkillBadgeIcon | 스킬 뱃지 | 육각 메달 + 별 |
| InsightChartIcon | 인사이트 차트 | 3단 바 차트 (아이소메트릭) |
| CodeLibraryIcon | 코드 라이브러리 | 3권 기울어진 책 |
| DebuggingShieldIcon | 디버깅 실드 | 방패형 + 십자 |
| FutureDeployIcon | 미래 배포 | 로켓/화살 형태 |
| DesignCanvasIcon | 디자인 캔버스 | 다이아몬드 캔버스 + 연필 |
| MiniTerminalIcon | 미니 터미널 | 열린 큐브 + 프롬프트 |
| ThreeDPointerIcon | 3D 포인터 | 커서 + 클릭 효과 |
| TypingBeamIcon | 타이핑 빔 | 경사 라인 + 커서 |
| MasterComponentIcon | 마스터 컴포넌트 | 계층형 다이아몬드 |
| FigmaToolIcon | 피그마 도구 (deprecated) | 피그마 로고 아이소메트릭 |
| FigmaIdentityIcon | 피그마 아이덴티티 | 피그마 조각 분리형 |

---

## 새 아이콘 생성 가이드라인

1. **컨셉 정의**: 아이콘이 표현할 개념을 한 문장으로
2. **주요 형태 결정**: 아이소메트릭 프리미티브 선택 (큐브, 다이아몬드, 육각형, 원기둥 등)
3. **깊이 레이어 설계**: Back → Mid → Front 순서로 3단계 밝기 배분
4. **애니메이션 선택**: 아이콘 성격에 맞는 CSS 애니메이션 클래스 1~2개
5. **Glow 경로 결정**: 가장 특징적인 윤곽선에 `line-glow` 적용
6. **IconCard 등록**: `iconData` 배열에 메타데이터 추가
