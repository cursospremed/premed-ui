import React from 'react';
import type {} from '@mui/x-data-grid/themeAugmentation';

import { ThemeProvider, createTheme, CssBaseline, responsiveFontSizes } from '@mui/material';

// Tema completo de colores LIGHT de Premed
export const PremedPaletteLight = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: '#053777',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#ff9200',
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
        main: '#ce0e12',
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

// Tema completo de colores DARK de Premed
export const PremedPaletteDark = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: '#232323',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#ff9200',
        contrastText: '#e8e3e3',
      },
      text: {
        primary: '#e8e8e8',
        secondary: 'rgba(222,71,0,0.73)',
      },
      background: {
        default: '#343435',
        paper: '#1a1a1e',
      },
      error: {
        main: '#ff1300',
        contrastText: '#120707',
      },
      info: {
        main: '#247db8',
        contrastText: '#eae6e6',
      },
      warning: {
        main: '#ce0e12',
        contrastText: '#eae6e6',
      },
      success: {
        main: '#01854f',
      },
      divider: 'rgba(148,158,166,0.4)',
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
const PremedTheme: React.FC<{ children: React.ReactNode; themeName: string }> = ({
  children,
  themeName,
}) => {
  return (
    <ThemeProvider theme={themeName}>
      <CssBaseline enableColorScheme />
      {children}
    </ThemeProvider>
  );
};

export default PremedTheme;
