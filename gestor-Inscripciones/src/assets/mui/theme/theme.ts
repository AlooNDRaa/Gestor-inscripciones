import { ThemeOptions } from "@mui/material";

export const Theme1: ThemeOptions = {
  palette: {
    primary: {
      main: '#ffffff', // Blanco
    },
    secondary: {
      main: '#000000', // Negro
      contrastText: '#01e8b9', // Blanco
    },
    background: {
      default: '#FAFAFA', // Crema
      paper: '#0A1944', // Azul Oscuro
    },
    text: {
      primary: '#231F20', // Gris texto
    },
    error: {
      main: '#F35746', // Naranja
    },
    success: {
      main: '#19AF66', // Verde Alert
    },
    info: {
      main: '#008CD5', // Celeste Clarito
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ':root': {
          '--azul-oscuro': '#0A1944', 
          '--verde-agua': '#01e8b9', 
          '--celeste-agua': '#0090a6',
          '--celeste-osc': '#193FAA',
        },
      },
    },
  },
}