// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';

import { Grid, Typography, useMediaQuery, useTheme, Box } from '@mui/material';

export type Elemento = {
  componente: React.ReactNode;
  width?: number;
  titulo?: string;
  alignHorizontal?: 'left' | 'right' | 'center' | string;
  alignTitulo?: 'left' | 'right' | 'center' | string;
  alignVertical?: 'top' | 'center' | 'bottom' | string;
};

interface PremedContainerProps {
  data: Elemento[];
}

/**
 * Primary UI component for user interaction
 */
const PremedContainer = ({ data = [] }: PremedContainerProps) => {
  let widthSum = 0;
  let elementSum = 0;
  let widthRest = 12;
  data.map((elemento: any) => {
    elemento.width ? (widthSum += elemento.width) : (elementSum += 1);
  });

  errorThrow(data);

  widthRest -= widthSum;
  widthRest /= elementSum;

  const theme = useTheme();
  const smallToMid = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Grid
      container
      spacing={1}
      sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column',
          sm: 'column',
          md: 'row',
          lg: 'row',
          xl: 'row',
        },
      }}
    >
      {data.map((elemento: any, index: number) => (
        <Grid
          container
          item
          key={`premed-grid-${index}`}
          xs={smallToMid ? 12 : elemento.width ? elemento.width : widthRest}
        >
          <Grid
            container
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Grid
              container
              sx={{
                height: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: elemento.alignVertical
                  ? elemento.alignVertical == 'top'
                    ? 'flex-start'
                    : elemento.alignVertical == 'bottom'
                    ? 'flex-end'
                    : elemento.alignVertical == 'center'
                    ? 'center'
                    : 'flex-start'
                  : 'flex-start', // VERTICAL
                alignItems: elemento.alignHorizontal
                  ? elemento.alignHorizontal == 'left'
                    ? 'flex-start'
                    : elemento.alignHorizontal == 'right'
                    ? 'flex-end'
                    : elemento.alignHorizontal == 'center'
                    ? 'center'
                    : 'flex-start'
                  : 'flex-start', // HORIZONTAL
              }}
            >
              <Grid
                container
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: elemento.alignTitulo
                    ? elemento.alignTitulo == 'left'
                      ? 'flex-start'
                      : elemento.alignTitulo == 'right'
                      ? 'flex-end'
                      : elemento.alignTitulo == 'center'
                      ? 'center'
                      : 'flex-start'
                    : 'flex-start',
                }}
              >
                <Box>
                  {elemento.titulo ? (
                    <Typography variant='body1'>
                      <b>{elemento.titulo}</b>
                    </Typography>
                  ) : (
                    ''
                  )}
                </Box>
              </Grid>
              <Box>{elemento.componente}</Box>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

function errorThrow(data: Array<object>): boolean {
  if (data.length > 0) {
    return true;
  }

  throw new Error('La data debe de contener al menos un (1) elemento.');
}

export default PremedContainer;
