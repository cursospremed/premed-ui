import React from 'react';

import { SelectProps, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import { FieldProps } from 'formik';

type PremedSelectOptions = {
  value: any;
  label: string;
};

type Props = {
  options: PremedSelectOptions[];
};

const PremedFormSelect: React.FC<FieldProps & Props & SelectProps> = (props) => {
  const { error, field, form, options, ...rest } = props;
  const { setFieldValue } = form;
  const { name } = field;
  const { label } = rest;
  return (
    <FormControl fullWidth>
      <InputLabel id={`premed-select-${label}`}>{label}</InputLabel>
      <Select
        labelId={`premed-select-${label}`}
        {...field}
        onChange={(e) => {
          setFieldValue(name, e.target.value);
        }}
        {...rest}
      >
        {options?.map((option: PremedSelectOptions, index: number) => (
          <MenuItem key={`options-${index}-${option.value}`} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default PremedFormSelect;
