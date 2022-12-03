import * as React from 'react';

import { Box, CardMedia, Grid, Typography } from '@mui/material';
import { NewGridCommentProps } from './types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const NewGridComment = ({
  id,
  data = [],
  color = 'background.default',
  commentColor = undefined,
  textColor = '',
  titleColor = '',
  labelContenido = undefined,
}: NewGridCommentProps) => {
  return (
    <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
      {data.map((person: any, index) => (
        <Grid
          item
          sx={{ display: 'flex', flexDirection: 'column' }}
          key={`premed-comment-card-${id}-${index}`}
          mb={2}
        >
          <Grid
            item
            sx={{
              display: 'flex',
              flexDirection: {
                xs: 'column',
                sm: 'row',
                md: 'row',
                lg: 'row',
                xl: 'row',
              },
              p: 2,
            }}
            bgcolor={color}
          >
            {person.foto ? (
              <Grid item justifyContent='center' alignItems='center'>
                <CardMedia
                  component='img'
                  // image={person.foto}
                  image={person.foto}
                  alt='Foto'
                  sx={{ width: 50, height: 50, margin: 'auto' }}
                />
              </Grid>
            ) : (
              ''
            )}
            <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
              <Grid item sx={{ display: 'flex', flexDirection: 'row' }}>
                <Grid item xs sx={{ display: 'flex', flexDirection: 'row' }}>
                  <Typography
                    variant='body1'
                    color={titleColor}
                    justifyContent='center'
                    alignItems='center'
                  >
                    <b>{person.nombre}</b>
                  </Typography>
                </Grid>
                <Grid item sx={{ display: 'flex', flexDirection: 'row' }}>
                  <Typography
                    variant='body1'
                    fontSize='14px'
                    color={titleColor}
                    justifyContent='center'
                    alignItems='center'
                  >
                    {new Date(person.fecha).toLocaleDateString()}
                  </Typography>
                </Grid>
              </Grid>
              <Typography
                variant='body1'
                fontSize='12px'
                color='#555'
                justifyContent='center'
                alignItems='center'
              >
                {person.cargo ? person.cargo : ''}
                {person.evaluacion ? `(${person.evaluacion})` : ''}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{
              display: 'flex',
              flexDirection: 'row',
            }}
            bgcolor={commentColor ? commentColor : color}
          >
            <Grid
              item
              xs
              sx={{
                display: 'flex',
                flexDirection: {
                  xs: 'column',
                  sm: 'row',
                  md: 'row',
                  lg: 'row',
                  xl: 'row',
                },
              }}
            >
              {labelContenido ? (
                <Typography
                  variant='body1'
                  color='#555'
                  justifyContent='center'
                  alignItems='center'
                  sx={{ pl: 2 }}
                >
                  <b>{labelContenido}</b>
                </Typography>
              ) : (
                ''
              )}
              <Typography
                variant='body1'
                color={textColor}
                justifyContent='center'
                alignItems='center'
                align='justify'
                sx={{ pl: { xs: 2, sm: 1 }, pr: 2, pb: 1 }}
              >
                {person.comentario}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};
