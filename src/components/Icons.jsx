import PropTypes from 'prop-types';

const defaultProps = {
  width: '100%',
  height: '100%',
  viewBox: '0 0 100 100',
  fill: 'none',
};

export const AITutorIcon = (props) => (
  <svg {...defaultProps} {...props}>
    <defs>
      <filter id="shadow-ai" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="4" in="SourceAlpha" />
        <feOffset dy="4" dx="0" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.5" />
        </feComponentTransfer>
      </filter>
    </defs>
    <ellipse cx="50" cy="80" rx="20" ry="10" fill="black" filter="url(#shadow-ai)" opacity="0.6" />
    <path d="M25 35 L50 22.5 L75 35 L75 65 L50 77.5 L25 65 Z" fill="#08090A" stroke="#3E3E44" strokeWidth="0.5" opacity="0.5" />
    <path d="M50 77.5 L50 47.5 L75 35" stroke="#3E3E44" strokeWidth="0.5" opacity="0.5" />
    <path d="M25 35 L50 47.5" stroke="#3E3E44" strokeWidth="0.5" opacity="0.5" />
    <path className="animate-core" d="M42 45 L50 41 L58 45 L58 55 L50 59 L42 55 Z" fill="#D0D6E0" stroke="none" />
    <path className="line-glow" d="M42 45 L50 41 L58 45 L58 55 L50 59 L42 55 Z" />
    <path d="M25 65 L50 77.5 L75 65" stroke="#D0D6E0" strokeWidth="0.5" />
    <path d="M25 35 L25 65" stroke="#D0D6E0" strokeWidth="0.5" />
    <path d="M75 35 L75 65" stroke="#D0D6E0" strokeWidth="0.5" />
    <path d="M25 35 L50 22.5 L75 35" stroke="#D0D6E0" strokeWidth="0.5" />
  </svg>
);

export const KnowledgeFlowIcon = (props) => (
  <svg {...defaultProps} {...props}>
    <g className="animate-float">
      <path d="M20 60 L40 70 L60 60 L80 70" stroke="#3E3E44" strokeWidth="0.5" fill="none" />
      <path d="M20 50 L40 60 L60 50 L80 60" stroke="#62666D" strokeWidth="0.5" fill="none" />
      <path d="M20 40 L40 50 L60 40 L80 50" stroke="#D0D6E0" strokeWidth="0.5" fill="none" />
      <path className="line-glow-long" d="M20 40 L40 50 L60 40 L80 50" />
      <path d="M20 40 V 60" stroke="#3E3E44" strokeWidth="0.5" />
      <path d="M80 50 V 70" stroke="#3E3E44" strokeWidth="0.5" />
    </g>
  </svg>
);

export const StepUpRoadmapIcon = (props) => (
  <svg {...defaultProps} {...props}>
    <path d="M20 65 L40 75 L60 65 L40 55 Z" fill="#08090A" stroke="#3E3E44" strokeWidth="0.5" />
    <path d="M20 65 V 75 L40 85 V 75" fill="#08090A" stroke="#3E3E44" strokeWidth="0.5" />
    <path d="M60 65 V 75 L40 85" fill="#08090A" stroke="#3E3E44" strokeWidth="0.5" />
    <path d="M40 55 L60 65 L80 55 L60 45 Z" fill="#08090A" stroke="#62666D" strokeWidth="0.5" />
    <path d="M40 55 V 65 L60 75 V 65" fill="#08090A" stroke="#62666D" strokeWidth="0.5" />
    <path d="M80 55 V 65 L60 75" fill="#08090A" stroke="#62666D" strokeWidth="0.5" />
    <path d="M60 45 L80 55 L100 45 L80 35 Z" fill="#08090A" stroke="#D0D6E0" strokeWidth="0.5" />
    <path d="M60 45 V 55 L80 65 V 55" fill="#08090A" stroke="#D0D6E0" strokeWidth="0.5" />
    <path d="M100 45 V 55 L80 65" fill="#08090A" stroke="#D0D6E0" strokeWidth="0.5" />
    <path className="line-glow" d="M40 55 L60 45 M60 45 L80 35" />
    <circle cx="80" cy="45" r="1.5" fill="#D0D6E0" className="animate-pulse" />
  </svg>
);

export const CodeSandboxIcon = (props) => (
  <svg {...defaultProps} {...props}>
    <path d="M25 40 L50 52.5 L75 40" stroke="#3E3E44" strokeWidth="0.5" strokeDasharray="2 2" />
    <path d="M50 52.5 V 80" stroke="#3E3E44" strokeWidth="0.5" />
    <g className="animate-pop">
      <path d="M40 35 L50 30 L60 35 L50 40 Z" fill="#08090A" stroke="#D0D6E0" strokeWidth="0.5" />
      <path d="M40 35 V 45 L50 50 V 40" fill="#08090A" stroke="#D0D6E0" strokeWidth="0.5" />
      <path d="M60 35 V 45 L50 50" fill="#08090A" stroke="#D0D6E0" strokeWidth="0.5" />
      <path className="line-glow" d="M40 35 L50 40 L60 35 L50 30 Z" />
    </g>
    <path d="M25 40 L50 27.5 L75 40" stroke="#62666D" strokeWidth="0.5" fill="none" />
    <path d="M25 40 V 70 L50 82.5 L75 70 V 40" stroke="#D0D6E0" strokeWidth="0.5" fill="none" />
    <path d="M50 82.5 V 55" stroke="#D0D6E0" strokeWidth="0.5" />
  </svg>
);

export const LiveSyncIcon = (props) => (
  <svg {...defaultProps} {...props}>
    <path d="M20 30 L40 40 L40 80 L20 70 Z" fill="#08090A" stroke="#62666D" strokeWidth="0.5" />
    <path d="M60 40 L80 30 L80 70 L60 80 Z" fill="#08090A" stroke="#D0D6E0" strokeWidth="0.5" />
    <path className="line-glow" d="M40 50 L60 50 M40 60 L60 60 M40 70 L60 70" />
  </svg>
);

export const SkillBadgeIcon = (props) => (
  <svg {...defaultProps} {...props}>
    <g className="animate-float">
      <path d="M30 40 L50 30 L70 40 L70 65 L50 75 L30 65 Z" fill="#08090A" stroke="#D0D6E0" strokeWidth="0.5" />
      <path d="M30 65 L50 75 L70 65" stroke="#3E3E44" strokeWidth="0.5" />
      <path d="M50 75 V 80" stroke="#3E3E44" strokeWidth="0.5" />
      <path d="M30 65 V 70 L50 80 L70 70 V 65" stroke="#3E3E44" strokeWidth="0.5" />
      <path className="line-glow" d="M50 40 L53 48 L60 50 L53 52 L50 60 L47 52 L40 50 L47 48 Z" />
    </g>
  </svg>
);

export const InsightChartIcon = (props) => (
  <svg {...defaultProps} {...props}>
    <path d="M20 70 L35 77.5 L50 70 L35 62.5 Z" fill="#08090A" stroke="#3E3E44" strokeWidth="0.5" />
    <path d="M20 70 V 80 L35 87.5 L50 80 V 70" fill="#08090A" stroke="#3E3E44" strokeWidth="0.5" />
    <path d="M35 87.5 V 77.5" stroke="#3E3E44" strokeWidth="0.5" />
    <path d="M40 60 L55 67.5 L70 60 L55 52.5 Z" fill="#08090A" stroke="#62666D" strokeWidth="0.5" />
    <path d="M40 60 V 80 L55 87.5 L70 80 V 60" fill="#08090A" stroke="#62666D" strokeWidth="0.5" />
    <path d="M55 87.5 V 67.5" stroke="#62666D" strokeWidth="0.5" />
    <path d="M60 40 L75 47.5 L90 40 L75 32.5 Z" fill="#08090A" stroke="#D0D6E0" strokeWidth="0.5" />
    <path d="M60 40 V 80 L75 87.5 L90 80 V 40" fill="#08090A" stroke="#D0D6E0" strokeWidth="0.5" />
    <path d="M75 87.5 V 47.5" stroke="#D0D6E0" strokeWidth="0.5" />
    <path className="line-glow" d="M60 40 L75 47.5 L90 40 L75 32.5 Z" />
  </svg>
);

export const CodeLibraryIcon = (props) => (
  <svg {...defaultProps} {...props}>
    <path d="M30 40 L40 45 L40 85 L30 80 Z" stroke="#3E3E44" strokeWidth="0.5" fill="#08090A" />
    <path d="M30 40 L35 37.5 L45 42.5 L40 45" stroke="#3E3E44" strokeWidth="0.5" />
    <g className="animate-pop">
      <path d="M45 35 L55 40 L55 80 L45 75 Z" stroke="#D0D6E0" strokeWidth="0.5" fill="#08090A" />
      <path d="M45 35 L50 32.5 L60 37.5 L55 40" stroke="#D0D6E0" strokeWidth="0.5" />
      <path d="M60 37.5 V 77.5 L55 80" stroke="#D0D6E0" strokeWidth="0.5" />
      <path className="line-glow" d="M45 35 L50 32.5 L60 37.5 L55 40 M55 40 L45 35" />
    </g>
    <path d="M60 40 L70 45 L70 85 L60 80 Z" stroke="#62666D" strokeWidth="0.5" fill="#08090A" />
    <path d="M60 40 L65 37.5 L75 42.5 L70 45" stroke="#62666D" strokeWidth="0.5" />
  </svg>
);

export const DebuggingShieldIcon = (props) => (
  <svg {...defaultProps} {...props}>
    <path d="M50 25 L80 35 V 55 L50 75 L20 55 V 35 L50 25 Z" fill="#08090A" stroke="#D0D6E0" strokeWidth="0.5" />
    <path d="M50 40 V 60" stroke="#D0D6E0" strokeWidth="0.5" />
    <path d="M40 50 L60 50" stroke="#D0D6E0" strokeWidth="0.5" />
    <path className="line-glow" d="M50 40 V 60 M40 50 L60 50" />
    <path d="M20 55 L50 75 L80 55" stroke="#3E3E44" strokeWidth="0.5" transform="translate(0, 4)" />
    <path d="M20 55 V 59" stroke="#3E3E44" strokeWidth="0.5" />
    <path d="M80 55 V 59" stroke="#3E3E44" strokeWidth="0.5" />
    <path d="M50 75 V 79" stroke="#3E3E44" strokeWidth="0.5" />
  </svg>
);

export const FutureDeployIcon = (props) => (
  <svg {...defaultProps} {...props}>
    <ellipse cx="50" cy="75" rx="15" ry="8" stroke="#3E3E44" strokeWidth="0.5" strokeDasharray="2 2" />
    <g className="animate-float">
      <path d="M50 20 L70 40 L60 45 L60 65 L50 70 L40 65 L40 45 L30 40 Z" fill="#08090A" stroke="#D0D6E0" strokeWidth="0.5" />
      <path d="M50 20 V 70" stroke="#62666D" strokeWidth="0.5" />
      <path d="M40 45 L60 45" stroke="#62666D" strokeWidth="0.5" />
      <path className="line-glow" d="M50 20 V 70" />
    </g>
  </svg>
);

export const DesignCanvasIcon = (props) => (
  <svg {...defaultProps} {...props}>
    <g className="animate-float">
      <path d="M20 50 L50 35 L80 50 L50 65 Z" fill="#08090A" stroke="#3E3E44" strokeWidth="0.5" />
      <path d="M35 50 L50 42.5 L65 50 L50 57.5 Z" stroke="#62666D" strokeWidth="0.5" fill="none" />
      <rect x="33" y="48" width="4" height="4" fill="#08090A" stroke="#D0D6E0" strokeWidth="0.5" transform="rotate(45 35 50)" />
      <rect x="63" y="48" width="4" height="4" fill="#08090A" stroke="#D0D6E0" strokeWidth="0.5" transform="rotate(45 65 50)" />
      <path d="M60 25 L70 30 L65 40 L62 42 L60 35 Z" fill="#D0D6E0" stroke="none" />
      <path className="line-glow" d="M35 50 L50 42.5 L65 50 L50 57.5 Z" />
    </g>
  </svg>
);

export const MiniTerminalIcon = (props) => (
  <svg {...defaultProps} {...props}>
    <path d="M25 40 L50 27.5 L75 40" stroke="#62666D" strokeWidth="0.5" fill="none" />
    <path d="M25 40 V 70 L50 82.5 L75 70 V 40" fill="#08090A" stroke="#D0D6E0" strokeWidth="0.5" />
    <path d="M50 82.5 V 55" stroke="#D0D6E0" strokeWidth="0.5" />
    <path d="M30 45 L35 47.5" stroke="#D0D6E0" strokeWidth="0.5" />
    <path d="M38 46 L60 35" stroke="#62666D" strokeWidth="0.5" />
    <path className="animate-blink" d="M30 50 L35 52.5 L35 57.5 L30 55 Z" fill="#D0D6E0" />
    <path className="line-glow" d="M25 40 V 70 L50 82.5" />
  </svg>
);

export const ThreeDPointerIcon = (props) => (
  <svg {...defaultProps} {...props}>
    <g className="animate-click">
      <path d="M40 30 L40 70 L50 60 L60 75 L65 70 L55 58 L70 55 Z" fill="#08090A" stroke="#D0D6E0" strokeWidth="0.5" />
      <path d="M40 70 V 74 L50 64 L50 60" stroke="#3E3E44" strokeWidth="0.5" />
      <path d="M50 64 L60 79 L65 74 L55 62" stroke="#3E3E44" strokeWidth="0.5" />
      <path d="M65 70 V 74" stroke="#3E3E44" strokeWidth="0.5" />
      <path d="M70 55 V 59 L55 62" stroke="#3E3E44" strokeWidth="0.5" />
      <path className="line-glow" d="M40 30 L40 70 L50 60 L70 55 Z" />
    </g>
    <ellipse cx="40" cy="30" rx="15" ry="8" stroke="#D0D6E0" strokeWidth="0.5" opacity="0.3" className="animate-pulse" />
  </svg>
);

export const TypingBeamIcon = (props) => (
  <svg {...defaultProps} {...props}>
    <path d="M20 40 L80 10" stroke="#3E3E44" strokeWidth="0.5" strokeDasharray="4 4" />
    <path d="M20 60 L80 30" stroke="#3E3E44" strokeWidth="0.5" strokeDasharray="4 4" />
    <path d="M20 80 L80 50" stroke="#3E3E44" strokeWidth="0.5" strokeDasharray="4 4" />
    <g className="animate-blink">
      <path d="M45 40 L55 35" stroke="#D0D6E0" strokeWidth="0.5" />
      <path d="M50 37.5 V 67.5" stroke="#D0D6E0" strokeWidth="0.5" />
      <path d="M45 70 L55 65" stroke="#D0D6E0" strokeWidth="0.5" />
      <path d="M50 37.5 L52 38.5 V 68.5 L50 67.5" fill="#3E3E44" opacity="0.5" />
    </g>
    <path className="line-glow" d="M50 37.5 V 67.5" />
  </svg>
);

export const MasterComponentIcon = (props) => (
  <svg {...defaultProps} {...props}>
    <g className="animate-float">
      <path d="M50 20 L60 25 L50 30 L40 25 Z" fill="#08090A" stroke="#D0D6E0" strokeWidth="0.5" />
      <path d="M35 27.5 L45 32.5 L35 37.5 L25 32.5 Z" fill="#08090A" stroke="#62666D" strokeWidth="0.5" />
      <path d="M65 27.5 L75 32.5 L65 37.5 L55 32.5 Z" fill="#08090A" stroke="#62666D" strokeWidth="0.5" />
      <path d="M50 35 L60 40 L50 45 L40 40 Z" fill="#08090A" stroke="#3E3E44" strokeWidth="0.5" />
      <path d="M50 50 L80 35 L50 20 L20 35 Z" stroke="#3E3E44" strokeWidth="0.5" fill="none" transform="translate(0, 30)" />
      <path d="M50 45 V 50" stroke="#D0D6E0" strokeWidth="0.5" strokeDasharray="2" />
      <path className="line-glow" d="M50 20 L60 25 L50 30 L40 25 Z" />
    </g>
  </svg>
);

export const FigmaToolIcon = (props) => (
  <svg {...defaultProps} {...props}>
    <g className="animate-float">
      {/* Depth walls */}
      <path d="M80 42 L70 49 L60 56 L46 49 L36 56 L22 49 L22 54 L36 61 L46 54 L60 61 L70 54 L80 47 Z" fill="#08090A" stroke="#3E3E44" strokeWidth="0.5" />
      <path d="M70 49 V 54 M60 56 V 61 M46 49 V 54 M36 56 V 61" stroke="#3E3E44" strokeWidth="0.5" />
      {/* Top face background */}
      <path d="M52 28 L66 35 L80 42 L70 49 L60 56 L46 49 L36 56 L22 49 L32 42 L42 35 Z" fill="#08090A" />
      {/* Internal dividing lines */}
      <path d="M42 35 L56 42 L70 49" stroke="#62666D" strokeWidth="0.5" fill="none" />
      <path d="M66 35 L56 42 L46 49 L32 42" stroke="#62666D" strokeWidth="0.5" fill="none" />
      {/* Outer contour */}
      <path d="M52 28 L66 35 L80 42 L70 49 L60 56 L46 49 L36 56 L22 49 L32 42 L42 35 Z" stroke="#D0D6E0" strokeWidth="0.5" fill="none" />
      {/* Glow */}
      <path className="line-glow" d="M52 28 L66 35 L80 42 L70 49 L60 56 L46 49 L36 56 L22 49 L32 42 L42 35 Z" />
    </g>
  </svg>
);

export const FigmaIdentityIcon = (props) => (
  <svg {...defaultProps} {...props}>
    <g className="animate-float">
      <g transform="translate(0, 4)" opacity="0.5">
        <path d="M42 30 L50 35 L50 39 L42 34 Z" fill="#08090A" stroke="#3E3E44" strokeWidth="0.5" />
        <path d="M34 35 A 8 5 0 0 1 34 25 V 29 A 8 5 0 0 0 34 39 Z" fill="#08090A" stroke="#3E3E44" strokeWidth="0.5" />
        <path d="M50 35 L58 30 L58 34 L50 39 Z" fill="#08090A" stroke="#3E3E44" strokeWidth="0.5" />
        <path d="M66 35 A 8 5 0 0 0 66 25 V 29 A 8 5 0 0 1 66 39 Z" fill="#08090A" stroke="#3E3E44" strokeWidth="0.5" />
        <path d="M42 50 L50 55 L50 59 L42 54 Z" fill="#08090A" stroke="#3E3E44" strokeWidth="0.5" />
        <path d="M34 55 A 8 5 0 0 1 34 45 V 49 A 8 5 0 0 0 34 59 Z" fill="#08090A" stroke="#3E3E44" strokeWidth="0.5" />
        <path d="M50 55 L58 50 L58 54 L50 59 Z" fill="#08090A" stroke="#3E3E44" strokeWidth="0.5" />
        <path d="M66 55 A 8 5 0 0 0 66 45 V 49 A 8 5 0 0 1 66 59 Z" fill="#08090A" stroke="#3E3E44" strokeWidth="0.5" />
        <path d="M42 70 L50 75 L50 79 L42 74 Z" fill="#08090A" stroke="#3E3E44" strokeWidth="0.5" />
        <path d="M34 75 A 8 5 0 0 1 34 65 V 69 A 8 5 0 0 0 34 79 Z" fill="#08090A" stroke="#3E3E44" strokeWidth="0.5" />
      </g>
      <path d="M42 30 L50 35 L42 40 C 37 40 34 38 34 35 C 34 32 37 30 42 30 Z" fill="#08090A" stroke="#D0D6E0" strokeWidth="0.5" />
      <path d="M58 30 C 63 30 66 32 66 35 C 66 38 63 40 58 40 L50 35 L58 30 Z" fill="#08090A" stroke="#D0D6E0" strokeWidth="0.5" />
      <path d="M42 50 L50 55 L42 60 C 37 60 34 58 34 55 C 34 52 37 50 42 50 Z" fill="#08090A" stroke="#D0D6E0" strokeWidth="0.5" />
      <ellipse cx="58" cy="55" rx="8" ry="5" fill="#08090A" stroke="#D0D6E0" strokeWidth="0.5" />
      <path d="M50 75 L42 80 C 37 80 34 78 34 75 C 34 72 37 70 42 70 L50 75 Z" fill="#08090A" stroke="#D0D6E0" strokeWidth="0.5" />
      <path d="M50 35 V 39" stroke="#3E3E44" strokeWidth="0.5" />
      <path d="M50 55 V 59" stroke="#3E3E44" strokeWidth="0.5" />
      <path d="M50 75 V 79" stroke="#3E3E44" strokeWidth="0.5" />
      <path className="line-glow" d="M34 35 C 34 32 37 30 42 30 L50 35 L58 30 C 63 30 66 32 66 35 M34 55 C 34 52 37 50 42 50 L50 55 L58 50 M34 75 C 34 72 37 70 42 70 L50 75" />
    </g>
  </svg>
);

PropTypes.defaultProps = {
  className: '',
  style: {},
};
