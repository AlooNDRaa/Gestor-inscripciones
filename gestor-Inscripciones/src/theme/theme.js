import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
      azulOscuro: '#0A1944',
      verdeAgua:'#01e8b9',
      VerdeAlert: '#19AF66',
      crema:'#FAFAFA',
      celesteAgua:'#0090a6',
      grisTexto:'#231F20',
      naranja:'#F35746',
      celesteClarito:'#008CD5',
     negro: "#000000",
    },
    secondary: {
      main: '#59BA47',
    },
  },
  typography: {
    fontFamily:[
      'Lora',
      'sans-serif',
      "Poppins",
      "Roboto",
    ]
  },
});

export default theme;