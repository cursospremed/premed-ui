import * as React from 'react';
import { TextFieldProps } from '@mui/material';
import { FieldProps } from 'formik';
interface IMapObject {
    key: string;
    defaultValue: any;
}
interface PremedAutocompleteProps {
    options: any;
    getOptionLabel: (option: any) => string;
    unstructured?: IMapObject[];
}
declare const PremedFormAutocomplete: React.FC<FieldProps & PremedAutocompleteProps & TextFieldProps>;
export default PremedFormAutocomplete;
//# sourceMappingURL=index.d.ts.map