import React from 'react';
import { SelectProps } from '@mui/material';
import { FieldProps } from 'formik';
declare type PremedSelectOptions = {
    value: any;
    label: string;
};
declare type Props = {
    options: PremedSelectOptions[];
};
declare const PremedFormSelect: React.FC<FieldProps & Props & SelectProps>;
export default PremedFormSelect;
//# sourceMappingURL=index.d.ts.map