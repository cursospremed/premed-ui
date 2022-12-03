import * as React from 'react';
import { ButtonProps } from '@mui/material';
interface PremedButtonFilePickerProps {
    onChange: (e: any) => any;
    fileType: Array<string>;
    multiple?: boolean;
}
/**
 * Primary UI component for user interaction sdsd
 */
declare const PremedButtonFilePicker: <C extends React.ElementType<any>>(props: {
    component?: C | undefined;
} & {
    children?: React.ReactNode;
    classes?: Partial<import("@mui/material").ButtonClasses> | undefined;
    color?: "error" | "info" | "inherit" | "primary" | "secondary" | "success" | "warning" | undefined;
    disabled?: boolean | undefined;
    disableElevation?: boolean | undefined;
    disableFocusRipple?: boolean | undefined;
    endIcon?: React.ReactNode;
    fullWidth?: boolean | undefined;
    href?: string | undefined;
    size?: "small" | "medium" | "large" | undefined;
    startIcon?: React.ReactNode;
    sx?: import("@mui/material").SxProps<import("@mui/material").Theme> | undefined;
    variant?: "text" | "outlined" | "contained" | undefined;
} & Omit<{
    action?: React.Ref<import("@mui/material").ButtonBaseActions> | undefined;
    centerRipple?: boolean | undefined;
    children?: React.ReactNode;
    classes?: Partial<import("@mui/material").ButtonBaseClasses> | undefined;
    disabled?: boolean | undefined;
    disableRipple?: boolean | undefined;
    disableTouchRipple?: boolean | undefined;
    focusRipple?: boolean | undefined;
    focusVisibleClassName?: string | undefined;
    LinkComponent?: React.ElementType<any> | undefined;
    onFocusVisible?: React.FocusEventHandler<any> | undefined;
    sx?: import("@mui/material").SxProps<import("@mui/material").Theme> | undefined;
    tabIndex?: number | undefined;
    TouchRippleProps?: Partial<import("@mui/material/ButtonBase/TouchRipple").TouchRippleProps> | undefined;
    touchRippleRef?: React.Ref<import("@mui/material/ButtonBase/TouchRipple").TouchRippleActions> | undefined;
}, "classes"> & import("@mui/material/OverridableComponent").CommonProps & import("@mui/types").DistributiveOmit<React.ComponentPropsWithRef<C>, keyof import("@mui/material/OverridableComponent").CommonProps | "tabIndex" | "color" | "children" | "action" | "centerRipple" | "disabled" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "LinkComponent" | "onFocusVisible" | "sx" | "TouchRippleProps" | "touchRippleRef" | "disableElevation" | "disableFocusRipple" | "endIcon" | "fullWidth" | "href" | "size" | "startIcon" | "variant" | "component"> & PremedButtonFilePickerProps) => JSX.Element;
export default PremedButtonFilePicker;
//# sourceMappingURL=index.d.ts.map