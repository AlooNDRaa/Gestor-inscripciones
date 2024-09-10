import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { theme } from '../src/assets/mui/theme/theme'; 

const theme1 = createTheme(theme); 

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme1}>
      <CssBaseline /> 
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
