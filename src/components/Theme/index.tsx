import React from 'react';
import type {} from '@mui/x-data-grid/themeAugmentation';

import { ThemeProvider, createTheme, CssBaseline, responsiveFontSizes } from '@mui/material';

// Tema completo de colores de Premed
export const PremedPalette = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: '#1ab394',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#f58048',
        contrastText: '#e8e3e3',
      },
      background: {
        default: '#ecf0f5',
        paper: '#ffffff',
      },
      error: {
        main: '#e84b4b',
        contrastText: '#120707',
      },
      info: {
        main: '#247db8',
        contrastText: '#eae6e6',
      },
      warning: {
        main: '#FB8C00',
        contrastText: '#eae6e6',
      },
      success: {
        main: '#01854f',
      },
      divider: 'rgba(148,158,166,0.4)',
      text: {
        primary: '#212529',
        secondary: '#555555',
      },
    },
    typography: {
      body1: {
        fontSize: '1rem',
      },
    },
    components: {
      MuiDataGrid: {
        styleOverrides: {
          root: {
            '& .MuiDataGrid-virtualScrollerRenderZone': {
              '& .MuiDataGrid-row': { backgroundColor: 'white' },
            },
            '& .MuiDataGrid-columnHeaders': {
              backgroundColor: '#D5D8DC',
            },
          },
        },
      },
    },
  }),
);

// eslint-disable-next-line react/prop-types
const PremedTheme: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider theme={PremedPalette}>
      <CssBaseline enableColorScheme />
      {children}
    </ThemeProvider>
  );
};

export default PremedTheme;
