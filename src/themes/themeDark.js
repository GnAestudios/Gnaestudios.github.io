import { createTheme } from '@mui/material/styles';

const themeDark = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#BE2623',
    },
    secondary: {
      main: '#424343',
    },
  },
  typography: {
    fontFamily: "'Poppins', serif;",
  }
});
export default themeDark;
