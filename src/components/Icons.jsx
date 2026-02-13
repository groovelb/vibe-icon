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
    <defs>
      <path id="f-left-round" d="M50 0 L100 0 L100 100 L50 100 A 50 50 0 0 1 50 0 Z" />
      <path id="f-right-round" d="M0 0 L50 0 A 50 50 0 0 1 50 100 L0 100 Z" />
      <path id="f-circle" d="M100 50 A 50 50 0 1 1 0 50 A 50 50 0 1 1 100 50 Z" />
      <path id="f-teardrop" d="M50 0 L100 0 L100 50 A 50 50 0 1 1 50 0 Z" />
    </defs>
    <g transform="translate(50, 40) scale(0.14)">
      <g transform="translate(0, 20) matrix(0.866, 0.5, -0.866, 0.5, 0, 0)" opacity="0.5">
        <use href="#f-left-round" x="-100" y="-150" stroke="#3E3E44" strokeWidth="4" fill="#08090A" />
        <use href="#f-right-round" x="0" y="-150" stroke="#3E3E44" strokeWidth="4" fill="#08090A" />
        <use href="#f-left-round" x="-100" y="-50" stroke="#3E3E44" strokeWidth="4" fill="#08090A" />
        <use href="#f-circle" x="0" y="-50" stroke="#3E3E44" strokeWidth="4" fill="#08090A" />
        <use href="#f-teardrop" x="-100" y="50" stroke="#3E3E44" strokeWidth="4" fill="#08090A" />
      </g>
      <g transform="matrix(0.866, 0.5, -0.866, 0.5, 0, 0)">
        <use href="#f-left-round" x="-100" y="-150" stroke="#D0D6E0" strokeWidth="4" fill="#08090A" />
        <use href="#f-right-round" x="0" y="-150" stroke="#D0D6E0" strokeWidth="4" fill="#08090A" />
        <use href="#f-left-round" x="-100" y="-50" stroke="#D0D6E0" strokeWidth="4" fill="#08090A" />
        <use href="#f-circle" x="0" y="-50" stroke="#D0D6E0" strokeWidth="4" fill="#08090A" />
        <use href="#f-teardrop" x="-100" y="50" stroke="#D0D6E0" strokeWidth="4" fill="#08090A" />
      </g>
    </g>
    <path className="line-glow" d="M 62 26 A 8.6 5 0 0 0 50 33 A 8.6 5 0 0 0 38 40" />
  </svg>
);

export const GitBranchIcon = (props) => (
  <svg {...defaultProps} {...props}>
    <g className="animate-float">
      <path d="M50 20 V 50" stroke="#D0D6E0" strokeWidth="0.5" />
      <path d="M50 50 L35 65" stroke="#D0D6E0" strokeWidth="0.5" />
      <path d="M50 50 L65 65" stroke="#D0D6E0" strokeWidth="0.5" />
      <path d="M35 65 V 80" stroke="#62666D" strokeWidth="0.5" />
      <path d="M65 65 V 80" stroke="#62666D" strokeWidth="0.5" />
      <circle cx="50" cy="20" r="3" fill="#08090A" stroke="#D0D6E0" strokeWidth="0.5" />
      <circle cx="35" cy="80" r="3" fill="#08090A" stroke="#62666D" strokeWidth="0.5" />
      <circle cx="65" cy="80" r="3" fill="#08090A" stroke="#62666D" strokeWidth="0.5" />
      <circle cx="50" cy="50" r="2" fill="#D0D6E0" />
      <path className="line-glow" d="M50 20 V 50 L65 65 V 80" />
    </g>
  </svg>
);

export const ApiEndpointIcon = (props) => (
  <svg {...defaultProps} {...props}>
    <g className="animate-float">
      <path d="M20 50 L40 40 L40 60 Z" fill="#08090A" stroke="#62666D" strokeWidth="0.5" />
      <path d="M80 50 L60 40 L60 60 Z" fill="#08090A" stroke="#62666D" strokeWidth="0.5" />
      <path d="M40 50 L60 50" stroke="#D0D6E0" strokeWidth="0.5" />
      <path d="M40 45 L60 45" stroke="#3E3E44" strokeWidth="0.5" strokeDasharray="2 2" />
      <path d="M40 55 L60 55" stroke="#3E3E44" strokeWidth="0.5" strokeDasharray="2 2" />
      <circle cx="30" cy="50" r="5" fill="#08090A" stroke="#D0D6E0" strokeWidth="0.5" />
      <circle cx="70" cy="50" r="5" fill="#08090A" stroke="#D0D6E0" strokeWidth="0.5" />
      <path d="M28 48 L32 50 L28 52" stroke="#D0D6E0" strokeWidth="0.5" fill="none" />
      <path d="M72 48 L68 50 L72 52" stroke="#D0D6E0" strokeWidth="0.5" fill="none" />
      <path className="line-glow" d="M30 50 L40 50 L60 50 L70 50" />
    </g>
  </svg>
);

export const DatabaseIcon = (props) => (
  <svg {...defaultProps} {...props}>
    <ellipse cx="50" cy="70" rx="22" ry="8" fill="#08090A" stroke="#3E3E44" strokeWidth="0.5" />
    <path d="M28 70 V 60" stroke="#3E3E44" strokeWidth="0.5" />
    <path d="M72 70 V 60" stroke="#3E3E44" strokeWidth="0.5" />
    <ellipse cx="50" cy="60" rx="22" ry="8" fill="#08090A" stroke="#62666D" strokeWidth="0.5" />
    <path d="M28 60 V 50" stroke="#62666D" strokeWidth="0.5" />
    <path d="M72 60 V 50" stroke="#62666D" strokeWidth="0.5" />
    <ellipse cx="50" cy="50" rx="22" ry="8" fill="#08090A" stroke="#62666D" strokeWidth="0.5" />
    <path d="M28 50 V 35" stroke="#D0D6E0" strokeWidth="0.5" />
    <path d="M72 50 V 35" stroke="#D0D6E0" strokeWidth="0.5" />
    <ellipse cx="50" cy="35" rx="22" ry="8" fill="#08090A" stroke="#D0D6E0" strokeWidth="0.5" />
    <path className="line-glow" d="M28 35 A 22 8 0 0 0 72 35" />
  </svg>
);

export const VariableIcon = (props) => (
  <svg {...defaultProps} {...props}>
    <g className="animate-float">
      <path d="M25 35 Q 25 50 35 50 Q 25 50 25 65" stroke="#D0D6E0" strokeWidth="0.5" fill="none" />
      <path d="M75 35 Q 75 50 65 50 Q 75 50 75 65" stroke="#D0D6E0" strokeWidth="0.5" fill="none" />
      <path d="M25 35 L30 32.5" stroke="#3E3E44" strokeWidth="0.5" />
      <path d="M25 65 L30 67.5" stroke="#3E3E44" strokeWidth="0.5" />
      <path d="M75 35 L70 32.5" stroke="#3E3E44" strokeWidth="0.5" />
      <path d="M75 65 L70 67.5" stroke="#3E3E44" strokeWidth="0.5" />
      <path d="M40 42 L50 47 L60 42 L50 37 Z" fill="#08090A" stroke="#62666D" strokeWidth="0.5" />
      <path d="M40 42 V 52 L50 57 V 47" fill="#08090A" stroke="#62666D" strokeWidth="0.5" />
      <path d="M60 42 V 52 L50 57" fill="#08090A" stroke="#62666D" strokeWidth="0.5" />
      <path className="line-glow" d="M40 42 L50 47 L60 42 L50 37 Z" />
    </g>
  </svg>
);

export const FunctionBlockIcon = (props) => (
  <svg {...defaultProps} {...props}>
    <g className="animate-pop">
      <path d="M25 40 L50 27.5 L75 40 L75 65 L50 77.5 L25 65 Z" fill="#08090A" stroke="#D0D6E0" strokeWidth="0.5" />
      <path d="M25 65 L50 52.5 L75 65" stroke="#3E3E44" strokeWidth="0.5" />
      <path d="M50 52.5 V 77.5" stroke="#3E3E44" strokeWidth="0.5" />
      <path d="M15 50 L25 50" stroke="#62666D" strokeWidth="0.5" />
      <path d="M75 50 L85 50" stroke="#62666D" strokeWidth="0.5" />
      <circle cx="15" cy="50" r="2" fill="#08090A" stroke="#62666D" strokeWidth="0.5" />
      <path d="M85 48 L89 50 L85 52" stroke="#62666D" strokeWidth="0.5" fill="none" />
      <text x="44" y="46" fill="#D0D6E0" fontSize="10" fontFamily="monospace" opacity="0.7">f(x)</text>
      <path className="line-glow" d="M25 40 L50 27.5 L75 40" />
    </g>
  </svg>
);

export const ResponsiveIcon = (props) => (
  <svg {...defaultProps} {...props}>
    <g className="animate-float">
      <path d="M55 55 L75 45 L75 75 L55 85 Z" fill="#08090A" stroke="#3E3E44" strokeWidth="0.5" />
      <path d="M55 55 L75 45" stroke="#3E3E44" strokeWidth="0.5" />
      <path d="M35 40 L60 28 L60 68 L35 80 Z" fill="#08090A" stroke="#62666D" strokeWidth="0.5" />
      <path d="M35 40 L60 28" stroke="#62666D" strokeWidth="0.5" />
      <path d="M15 25 L45 10 L45 65 L15 80 Z" fill="#08090A" stroke="#D0D6E0" strokeWidth="0.5" />
      <path d="M15 25 L45 10" stroke="#D0D6E0" strokeWidth="0.5" />
      <path d="M20 35 L25 32.5" stroke="#62666D" strokeWidth="0.5" />
      <path d="M20 40 L30 35" stroke="#62666D" strokeWidth="0.5" />
      <path className="line-glow" d="M15 25 L45 10 L45 65 L15 80 Z" />
    </g>
  </svg>
);

export const PackageIcon = (props) => (
  <svg {...defaultProps} {...props}>
    <path d="M25 40 L50 27.5 L75 40 L50 52.5 Z" fill="#08090A" stroke="#D0D6E0" strokeWidth="0.5" />
    <path d="M25 40 V 65 L50 77.5 V 52.5" fill="#08090A" stroke="#D0D6E0" strokeWidth="0.5" />
    <path d="M75 40 V 65 L50 77.5" fill="#08090A" stroke="#D0D6E0" strokeWidth="0.5" />
    <path d="M37.5 33.75 L62.5 46.25" stroke="#3E3E44" strokeWidth="0.5" />
    <path d="M50 52.5 V 77.5" stroke="#3E3E44" strokeWidth="0.5" />
    <path d="M32 55 L42 60" stroke="#62666D" strokeWidth="0.5" />
    <path d="M32 60 L38 63" stroke="#62666D" strokeWidth="0.5" />
    <path className="line-glow" d="M25 40 L50 27.5 L75 40" />
  </svg>
);

export const BooleanToggleIcon = (props) => (
  <svg {...defaultProps} {...props}>
    <g className="animate-float">
      <path d="M20 45 L50 30 L80 45 L50 60 Z" fill="#08090A" stroke="#3E3E44" strokeWidth="0.5" />
      <path d="M20 45 V 55 L50 70 L80 55 V 45" fill="#08090A" stroke="#3E3E44" strokeWidth="0.5" />
      <path d="M50 60 V 70" stroke="#3E3E44" strokeWidth="0.5" />
      <path d="M30 45 L50 35 L70 45 L50 55 Z" fill="#08090A" stroke="#62666D" strokeWidth="0.5" />
      <ellipse cx="60" cy="42" rx="6" ry="3.5" fill="#08090A" stroke="#D0D6E0" strokeWidth="0.5" />
      <path d="M38 48 L50 42" stroke="#62666D" strokeWidth="0.5" strokeDasharray="2 2" />
      <path className="line-glow" d="M54 42 A 6 3.5 0 0 1 66 42" />
    </g>
  </svg>
);

PropTypes.defaultProps = {
  className: '',
  style: {},
};
