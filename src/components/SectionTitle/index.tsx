import * as React from 'react';
import { Paper, Typography } from '@mui/material';

export type HeaderTitleProps = {
  label: string;
  bgcolor?: 'primary' | 'secondary';
  color?: 'primary' | 'secondary';
  variant?: 'h4' | 'h5' | 'h6';
  elevation?: number;
  align?: 'center' | 'inherit' | 'justify' | 'left' | 'right';
};

const PremedSectionTitle: React.FC<HeaderTitleProps> = ({
  label,
  bgcolor = 'primary',
  color = 'primary',
  variant = 'h4',
  elevation = 2,
  align = 'inherit',
}) => {
  return (
    <Paper
      sx={{
        pl: '4%',
        bgcolor: `${bgcolor}.main`,
        color: `${color}.contrastText`,
        borderRadius: 0,
      }}
      elevation={elevation}
    >
      <Typography component='div' variant={variant} align={align}>
        {label}
      </Typography>
    </Paper>
  );
};
export default PremedSectionTitle;
