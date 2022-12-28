import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import MainRouter from './components/router/MainRouter';

const mainTheme = createTheme(
  {
      palette:{
          primary: {
            main: '#9ccc65',
            light: '#cfff95',
            dark: '#6b9b37'
          },
          secondary: {
            main: '#fffde7',
            light: '#ffffff',
            dark: '#cccab5'
          }
      },
      typography: {
        fontFamily: [
         'Roboto',
         '"Noto Sans JP"', 
         '"Helvetica"',
         'Arial',
         'sans-serif',
       ].join(','),
      }
  }
)

const App: React.FC = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline></CssBaseline>
      <MainRouter></MainRouter>
    </ThemeProvider>
  );
}

export default App;