import * as React from 'react';

import { Button, ButtonProps } from '@mui/material';

interface PremedButtonFilePickerProps {
  onChange: (e: any) => any;
  fileType: Array<string>;
  multiple?: boolean;
}

/**
 * Primary UI component for user interaction sdsd
 */
const PremedButtonFilePicker = <C extends React.ElementType>(
  props: ButtonProps<C, { component?: C }> & PremedButtonFilePickerProps,
) => {
  const { fileType, onChange, multiple, ...rest } = props;
  const types: string = fileType.join(',');

  return (
    <Button component='label' {...rest}>
      {props.children}
      <input
        hidden
        accept={types}
        multiple={multiple}
        type='file'
        onChange={(e: any) => {
          onChange(e);
        }}
      />
    </Button>
  );
};

export default PremedButtonFilePicker;
