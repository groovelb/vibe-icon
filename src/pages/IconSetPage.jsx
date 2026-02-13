import { useState, useRef, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';

import IconCard from '../components/IconCard';
import {
  AITutorIcon,
  KnowledgeFlowIcon,
  StepUpRoadmapIcon,
  CodeSandboxIcon,
  LiveSyncIcon,
  SkillBadgeIcon,
  InsightChartIcon,
  CodeLibraryIcon,
  DebuggingShieldIcon,
  FutureDeployIcon,
  DesignCanvasIcon,
  MiniTerminalIcon,
  ThreeDPointerIcon,
  TypingBeamIcon,
  MasterComponentIcon,
  FigmaToolIcon,
  GitBranchIcon,
  ApiEndpointIcon,
  DatabaseIcon,
  VariableIcon,
  FunctionBlockIcon,
  ResponsiveIcon,
  PackageIcon,
  BooleanToggleIcon,
} from '../components/Icons';

const iconData = [
  // Design
  { title: "Figma Tool", desc: "Design toolkit", Icon: FigmaToolIcon },
  { title: "Design Canvas", desc: "Pixel perfect", Icon: DesignCanvasIcon },
  { title: "Master Component", desc: "Reusable system", Icon: MasterComponentIcon },
  { title: "Responsive", desc: "Breakpoints", Icon: ResponsiveIcon },
  { title: "3D Pointer", desc: "Interaction", Icon: ThreeDPointerIcon },
  { title: "Boolean Toggle", desc: "True / False", Icon: BooleanToggleIcon },
  // Dev basics
  { title: "Variable", desc: "State & values", Icon: VariableIcon },
  { title: "Function", desc: "Logic block", Icon: FunctionBlockIcon },
  { title: "API Endpoint", desc: "Connect systems", Icon: ApiEndpointIcon },
  { title: "Database", desc: "Data storage", Icon: DatabaseIcon },
  { title: "Git Branch", desc: "Version control", Icon: GitBranchIcon },
  { title: "Package", desc: "Dependencies", Icon: PackageIcon },
  // Workflow
  { title: "Code Sandbox", desc: "Safe playground", Icon: CodeSandboxIcon },
  { title: "Mini Terminal", desc: "Command line", Icon: MiniTerminalIcon },
  { title: "Code Library", desc: "Rich resources", Icon: CodeLibraryIcon },
  { title: "Debugging Shield", desc: "Error protection", Icon: DebuggingShieldIcon },
  { title: "Future Deploy", desc: "Ready to launch", Icon: FutureDeployIcon },
  { title: "Live Sync", desc: "Real-time collab", Icon: LiveSyncIcon },
  // Learning
  { title: "The AI Tutor", desc: "Always-on guidance", Icon: AITutorIcon },
  { title: "Knowledge Flow", desc: "Seamless learning", Icon: KnowledgeFlowIcon },
  { title: "Step-up Roadmap", desc: "Level up your skills", Icon: StepUpRoadmapIcon },
  { title: "Skill Badge", desc: "Certified growth", Icon: SkillBadgeIcon },
  { title: "Insight Chart", desc: "Visualized data", Icon: InsightChartIcon },
  { title: "Typing Beam", desc: "Edit mode", Icon: TypingBeamIcon },
];

function formatSvg(raw) {
  const lines = raw.replace(/></g, '>\n<').split('\n');
  let indent = 0;
  return lines.map((line) => {
    const trimmed = line.trim();
    if (trimmed.startsWith('</')) indent = Math.max(0, indent - 1);
    const result = '  '.repeat(indent) + trimmed;
    if (
      trimmed.startsWith('<') &&
      !trimmed.startsWith('</') &&
      !trimmed.endsWith('/>') &&
      !/<\/[^>]+>$/.test(trimmed)
    ) {
      indent++;
    }
    return result;
  }).join('\n');
}

const CSS_DEFS = {
  'animate-core': `@keyframes pulse-core {
  0%, 100% { opacity: 0.4; transform: scale(0.95); }
  50% { opacity: 1; transform: scale(1.05); fill: #5E6AD2; }
}
.animate-core {
  animation: pulse-core 3s infinite ease-in-out;
  transform-origin: center;
  transform-box: fill-box;
}`,
  'animate-float': `@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
.animate-float {
  animation: float 4s ease-in-out infinite;
}`,
  'animate-pop': `@keyframes pop-up {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}
.animate-pop {
  animation: pop-up 3s ease-in-out infinite;
}`,
  'animate-blink': `@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}
.animate-blink {
  animation: blink 1s step-end infinite;
}`,
  'animate-click': `@keyframes click-bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(3px); }
}
.animate-click {
  animation: click-bounce 2s ease-in-out infinite;
}`,
  'line-glow': `@keyframes flow-glow {
  0% { stroke-dashoffset: 100; }
  100% { stroke-dashoffset: 0; }
}
.line-glow {
  stroke: #818CF8;
  stroke-width: 0.8;
  stroke-dasharray: 15 85;
  stroke-linecap: round;
  animation: flow-glow 2.5s linear infinite;
  filter: drop-shadow(0 0 2px #6366f1);
  opacity: 0.9;
  fill: none;
}`,
  'line-glow-long': `@keyframes flow-glow {
  0% { stroke-dashoffset: 100; }
  100% { stroke-dashoffset: 0; }
}
.line-glow-long {
  stroke-dasharray: 20 180;
  animation: flow-glow 4s linear infinite;
}`,
};

function extractCss(svgHtml) {
  const matches = svgHtml.matchAll(/class="([^"]+)"/g);
  const classes = new Set();
  for (const m of matches) m[1].split(/\s+/).forEach((c) => classes.add(c));
  const rules = [...classes].map((c) => CSS_DEFS[c]).filter(Boolean);
  if (!rules.length) return '/* No animation classes */';
  return '/* Global styles — add to your stylesheet (e.g. index.css) */\n\n' + rules.join('\n\n');
}

const Tab = styled('button')(({ active }) => ({
  background: 'none',
  border: 'none',
  padding: '6px 14px',
  fontSize: '0.7rem',
  fontWeight: 600,
  fontFamily: '"SF Mono", "Fira Code", monospace',
  letterSpacing: '0.05em',
  cursor: 'pointer',
  color: active ? '#818CF8' : '#64748B',
  borderBottom: active ? '2px solid #818CF8' : '2px solid transparent',
  transition: 'color 0.2s, border-color 0.2s',
  '&:hover': { color: '#818CF8' },
}));

const CopyButton = styled(IconButton)({
  position: 'absolute',
  top: 8,
  right: 8,
  fontSize: '0.7rem',
  color: '#64748B',
  border: '1px solid #1E1F23',
  borderRadius: 6,
  padding: '4px 10px',
  fontFamily: 'Pretendard Variable, Pretendard, sans-serif',
  '&:hover': { color: '#D0D6E0', borderColor: '#333' },
});

export default function IconSetPage() {
  const [selected, setSelected] = useState(null);
  const [svgCode, setSvgCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [codeTab, setCodeTab] = useState('svg');
  const [copied, setCopied] = useState(false);
  const previewRef = useRef(null);

  useEffect(() => {
    if (!selected) {
      setSvgCode('');
      setCssCode('');
      return;
    }
    const frame = requestAnimationFrame(() => {
      if (previewRef.current) {
        const svg = previewRef.current.querySelector('svg');
        if (svg) {
          const raw = svg.outerHTML;
          setSvgCode(formatSvg(raw));
          setCssCode(extractCss(raw));
        }
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [selected]);

  const activeCode = codeTab === 'svg' ? svgCode : cssCode;

  const handleCopy = () => {
    navigator.clipboard.writeText(activeCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Box className="grid-bg" sx={{ minHeight: '100vh', py: 10, px: 2 }}>
      <Container maxWidth="xl">
        <Box component="header" sx={{ mb: 8, textAlign: 'center' }}>
          <Typography variant="h1" sx={{ fontSize: '1.875rem', fontWeight: 600, mb: 1.5, letterSpacing: '-0.025em' }}>
            Vibe Coding Icon System
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '0.875rem', maxWidth: 448, mx: 'auto' }}>
            Isometric mono-line icons for design and development concepts.
          </Typography>
        </Box>

        <Grid container spacing={2} columns={30}>
          {iconData.map((item, index) => (
            <Grid key={index} size={{ xs: 15, md: 10, lg: 6 }}>
              <IconCard
                title={item.title}
                description={item.desc}
                onClick={() => setSelected(item)}
              >
                <item.Icon />
              </IconCard>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Dialog
        open={!!selected}
        onClose={() => setSelected(null)}
        maxWidth="md"
        fullWidth
        slotProps={{
          backdrop: { sx: { bgcolor: 'rgba(0,0,0,0.4)' } },
        }}
        PaperProps={{
          sx: {
            background: 'rgba(255,255,255,0.06) !important',
            backdropFilter: 'blur(40px) saturate(1.5)',
            WebkitBackdropFilter: 'blur(40px) saturate(1.5)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 4,
            boxShadow: '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)',
          },
        }}
      >
        <DialogContent sx={{ p: 5 }}>
          {selected && (
            <>
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
                <Box ref={previewRef} sx={{ width: 320, height: 320 }}>
                  <selected.Icon />
                </Box>
              </Box>
              <Typography
                variant="h2"
                sx={{ textAlign: 'center', mb: 0.5, fontSize: '1.5rem' }}
              >
                {selected.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{ textAlign: 'center', mb: 4, color: 'text.secondary', fontSize: '0.85rem' }}
              >
                {selected.desc}
              </Typography>
              <Box sx={{ position: 'relative' }}>
                <Box sx={{ display: 'flex', gap: 0.5, mb: 1.5, borderBottom: '1px solid rgba(255,255,255,0.06)', pb: 0.5 }}>
                  <Tab active={codeTab === 'svg' ? 1 : 0} onClick={() => setCodeTab('svg')}>SVG</Tab>
                  <Tab active={codeTab === 'css' ? 1 : 0} onClick={() => setCodeTab('css')}>CSS</Tab>
                </Box>
                <Box
                  component="pre"
                  sx={{
                    bgcolor: 'rgba(0, 0, 0, 0.3)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 2,
                    p: 2.5,
                    pr: 7,
                    overflow: 'auto',
                    maxHeight: 320,
                    fontSize: '0.75rem',
                    lineHeight: 1.7,
                    fontFamily: '"SF Mono", "Fira Code", "Fira Mono", monospace',
                    color: '#94A3B8',
                    m: 0,
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-all',
                    '&::-webkit-scrollbar': { width: 4 },
                    '&::-webkit-scrollbar-track': { background: 'transparent' },
                    '&::-webkit-scrollbar-thumb': { background: 'rgba(255,255,255,0.1)', borderRadius: 2 },
                  }}
                >
                  {activeCode}
                </Box>
                <CopyButton onClick={handleCopy} disableRipple>
                  {copied ? 'Copied!' : 'Copy'}
                </CopyButton>
              </Box>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
}
