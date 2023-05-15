import { createTheme } from '@mui/material/styles';

const themeLight = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0E3746',
    },
    secondary: {
      main: '#F4F2EC',
    },
  },
  typography: {
    fontFamily: "'Poppins', serif;",
  }
});
export default themeLight;
