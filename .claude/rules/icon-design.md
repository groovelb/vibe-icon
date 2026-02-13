# 아이콘 디자인 규칙

## 컬러 팔레트 (3-Tier Depth)

색상이 아닌 밝기로 깊이를 표현한다. 아래 6색만 사용.

| 역할 | 색상 | 용도 |
|------|------|------|
| Front | `#D0D6E0` | 전면 stroke, 주요 윤곽 |
| Mid | `#62666D` | 중간 깊이 stroke |
| Back | `#3E3E44` | 후면/그림자 stroke |
| Fill | `#08090A` | 면 채움 (배경과 동일 = 잘라낸 효과) |
| Glow | `#818CF8` | line-glow 전용 |
| Core | `#5E6AD2` | animate-core 하이라이트 |

## SVG 기본값

```js
const defaultProps = {
  width: '100%',
  height: '100%',
  viewBox: '0 0 100 100',
  fill: 'none',
};
```

## 스트로크

- strokeWidth: 항상 `0.5`
- 보조선/점선: `strokeDasharray="2 2"` 또는 `"4 4"`
- glow 라인만 strokeWidth `0.8`, strokeLinecap `round`

## 아이소메트릭 투영

- 30도 아이소메트릭 투영
- X:Y 이동 비율 = 2:1 (예: 오른쪽 10 이동 → 아래 5 이동)
- 다이아몬드 윗면: `M cx cy-h L cx+w cy L cx cy+h L cx-w cy Z`
- 3D 박스: 윗면 + 좌측면 + 우측면 각각 별도 `<path>`
- CSS transform 아닌 path 좌표로 직접 아이소메트릭 표현

## 깊이 표현

1. 그림자 타원: `<ellipse>` 하단, `opacity="0.6"`, filter blur
2. 면 분리: 윗면/좌/우를 다른 밝기 stroke로
3. 오프셋 복제: 동일 형태를 `translate(0, 4)` 등으로 아래에 낮은 opacity로
4. 점선 보조선: `strokeDasharray`로 숨은 선 표현
5. 수직선 연결: 윗면-아랫면 연결로 높이감

## 레이어 순서 (아래→위)

1. Shadow (바닥 그림자)
2. Back faces (`#3E3E44`)
3. Mid faces (`#62666D`)
4. Front faces (`#D0D6E0`)
5. Solid fills (`#D0D6E0` fill)
6. Glow overlay (`line-glow` 클래스)
