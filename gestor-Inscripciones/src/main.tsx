import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { Theme1 } from '../src/assets/mui/theme/theme'; 

const theme = createTheme(Theme1); 

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Aplica estilos globales */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
