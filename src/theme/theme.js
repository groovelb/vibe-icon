import { createTheme } from '@mui/material/styles';
import { blueGrey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#08090A',
      paper: '#08090A',
    },
    primary: {
      main: '#0000FF',
    },
    secondary: {
      main: blueGrey[900],
    },
    text: {
      primary: '#F7F8F8',
      secondary: '#64748B',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontFamily: 'Outfit, sans-serif',
      fontWeight: 600,
    },
    h2: {
      fontFamily: 'Outfit, sans-serif',
      fontWeight: 600,
    },
    h3: {
      fontFamily: 'Outfit, sans-serif',
      fontWeight: 500,
      fontSize: '0.875rem', 
      letterSpacing: '-0.01em',
      color: '#E2E8F0',
    },
    body1: {
      fontFamily: 'Pretendard Variable, Pretendard, sans-serif',
    },
    body2: {
      fontFamily: 'Pretendard Variable, Pretendard, sans-serif',
      fontSize: '0.75rem',
      color: '#64748B',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          boxShadow: '0 0 0 0 rgba(0,0,0,0)', // Dimmed shadow base
          backgroundColor: 'transparent',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#08090A',
          color: '#F7F8F8',
        },
      },
    },
  },
});

export default theme;
