import { FormControlLabel, Checkbox } from '@mui/material';
import { FieldProps, FormikValues } from 'formik';

interface IProps {
  label: string;
}

const PremedFormCheckBox: React.FC<FieldProps & IProps> = (props) => {
  const { form, label, field, ...rest } = props;
  const { setFieldValue, values } = form;
  const { name } = field;

  return (
    <FormControlLabel
      control={<Checkbox />}
      label={label}
      checked={values[name]}
      onChange={() => setFieldValue(name, !values[name])}
    />
  );
};

export default PremedFormCheckBox;
