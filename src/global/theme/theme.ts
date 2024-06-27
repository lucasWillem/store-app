import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00796B',
    },
    secondary: {
      main: '#039BE5',
    },
    error: {
      main: '#ff8a80',
    },
    success: {
      main: '#388e3c',
    },
    background: {
      default: '#f3f0e6',
    },
    text: {
      primary: '#666666',
      secondary: '#333333',
    },
  },
});

export { theme };
