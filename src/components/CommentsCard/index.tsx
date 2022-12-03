// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';

import { Grid, Box } from '@mui/material';
import { NewGridComment } from './newGrid';
import { CommentProps } from './types';

/**
 * Primary UI component for user interaction
 */
const PremedCommentsCard: React.FC<CommentProps> = (props) => {
  const { width, height, ...rest } = props;
  return (
    <Box
      sx={{
        margin: 'auto',
        maxWidth: width,
        maxHeight: height,
        flexGrow: 0,
      }}
    >
      <Grid item sm>
        <Grid
          container
          sx={{
            display: 'flex',
            flexDirection: {
              xs: 'row',
              sm: 'row',
              md: 'row',
              lg: 'row',
              xl: 'row',
            },
          }}
        >
          <NewGridComment {...rest} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default PremedCommentsCard;
