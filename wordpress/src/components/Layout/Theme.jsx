import { createTheme } from "@mui/material";

const theme = createTheme({
  status: {
    danger: "#ff0000",
  },
  palette: {
    primary: {
      main: "#e0f2f1",
    },

    secondary: {
      main: "#505e5e",
      dark: "#364544",
    },
    button: {
      main: "#009688",
    },
  },
});

export default createTheme;
/* 

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
}); */
