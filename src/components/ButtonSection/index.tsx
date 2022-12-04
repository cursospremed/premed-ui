import React from 'react';

import { Box, Button, ButtonProps } from '@mui/material';

interface PremedButtonSectionProps {
  label?: string;
  icon?: React.ReactNode;
  width?: number;
}

const PremedButtonSection = <C extends React.ElementType>(
  props: ButtonProps<C, { component?: C }> & PremedButtonSectionProps,
) => {
  const { label, icon, width, ...rest } = props;
  return (
    <Box>
      <Button {...rest}>
        <Box sx={{ width: width ? width : '100px' }}>
          {label && <p>{label}</p>}
          {icon && icon}
        </Box>
      </Button>
    </Box>
  );
};

export default PremedButtonSection;
