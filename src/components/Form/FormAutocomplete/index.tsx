import * as React from 'react';

import { Autocomplete, TextFieldProps, TextField } from '@mui/material';
import { FieldProps, getIn } from 'formik';

interface IMapObject {
  key: string;
  defaultValue: any;
}

interface PremedAutocompleteProps {
  options: any;
  getOptionLabel: (option: any) => string;
  unstructured?: IMapObject[];
}

const PremedFormAutocomplete: React.FC<FieldProps & PremedAutocompleteProps & TextFieldProps> = (
  props,
) => {
  const isTouched = getIn(props.form.touched, props.field.name);
  const errorMessage = getIn(props.form.errors, props.field.name);
  const { error, helperText, field, form, options, unstructured, getOptionLabel, ...rest } = props;
  const { setTouched, setFieldValue } = form;
  const { name } = field;

  return (
    <Autocomplete
      options={options}
      getOptionLabel={getOptionLabel}
      onChange={(_, value) => {
        const cuttent_value = value ? value : null;
        setTouched({ [name]: cuttent_value === null });
        if (unstructured !== null) {
          unstructured?.forEach((obj: IMapObject) =>
            setFieldValue(obj.key, value ? value[obj.key] : obj.defaultValue),
          );
          return;
        }
        setFieldValue(name, cuttent_value);
      }}
      onBlur={() => setTouched({ [name]: true })}
      renderInput={(params) => (
        <TextField
          error={error ?? Boolean(isTouched && errorMessage)}
          helperText={helperText ?? (isTouched && errorMessage ? errorMessage : undefined)}
          {...params}
          {...field}
          {...rest}
        />
      )}
    />
  );
};
export default PremedFormAutocomplete;
