import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// Ensure we use the Grid from v2 (Stable in v7?) or Grid2 if available?
// The user rules say "MUI Grid Usage (v7 신규 API) 중요: Grid 컴포넌트는 size prop을 사용".
// Usually imported from @mui/material/Grid2 or @mui/material/Grid.
// In v6/v7 Grid v2 became stable as Grid.
import Grid from '@mui/material/Grid'; 
// If it fails, I'll switch to Grid2. But usually Grid is fine for size prop in latest.

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
  FigmaIdentityIcon,
} from '../components/Icons';

const iconData = [
  { title: "The AI Tutor", desc: "Always-on guidance", Icon: AITutorIcon },
  { title: "Knowledge Flow", desc: "Seamless learning", Icon: KnowledgeFlowIcon },
  { title: "Step-up Roadmap", desc: "Level up your skills", Icon: StepUpRoadmapIcon },
  { title: "Code Sandbox", desc: "Safe playground", Icon: CodeSandboxIcon },
  { title: "Live Sync", desc: "Real-time collab", Icon: LiveSyncIcon },
  { title: "Skill Badge", desc: "Certified growth", Icon: SkillBadgeIcon },
  { title: "Insight Chart", desc: "Visualized data", Icon: InsightChartIcon },
  { title: "Code Library", desc: "Rich resources", Icon: CodeLibraryIcon },
  { title: "Debugging Shield", desc: "Error protection", Icon: DebuggingShieldIcon },
  { title: "Future Deploy", desc: "Ready to launch", Icon: FutureDeployIcon },
  { title: "Design Canvas", desc: "Pixel perfect", Icon: DesignCanvasIcon },
  { title: "Mini Terminal", desc: "Command line", Icon: MiniTerminalIcon },
  { title: "3D Pointer", desc: "Interaction", Icon: ThreeDPointerIcon },
  { title: "Typing Beam", desc: "Edit mode", Icon: TypingBeamIcon },
  { title: "Master Component", desc: "Reusable system", Icon: MasterComponentIcon },
  { title: "Figma Tool", desc: "Design toolkit", Icon: FigmaToolIcon },
  { title: "Figma Identity", desc: "Design system", Icon: FigmaIdentityIcon },
];

export default function IconSetPage() {
  return (
    <Box className="grid-bg" sx={{ minHeight: '100vh', py: 10, px: 2 }}>
      <Container maxWidth="xl">
        <Box component="header" sx={{ mb: 8, textAlign: 'center' }}>
          <Typography variant="h1" sx={{ fontSize: '1.875rem', fontWeight: 600, mb: 1.5, letterSpacing: '-0.025em' }}>
            Vibe Coding Icon System
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '0.875rem', maxWidth: 448, mx: 'auto' }}>
            Expanded Essential Set: Design, Terminal, Interaction, Components, and{' '}
            <Box component="span" sx={{ color: '#818CF8' }}>
              Figma
            </Box>
            .
          </Typography>
        </Box>

        <Grid container spacing={4} columns={30}>
          {iconData.map((item, index) => (
            <Grid key={index} size={{ xs: 15, md: 10, lg: 6 }}>
              <Box sx={{ opacity: item.isDimmed ? 0.5 : 1 }}>
                <IconCard title={item.title} description={item.desc}>
                  <item.Icon className={index === 15 ? '' : ''} />
                </IconCard>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
