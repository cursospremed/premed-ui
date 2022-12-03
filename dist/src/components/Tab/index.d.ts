import * as React from 'react';
export declare type Componente = {
    titulo: string;
    componente: React.ReactElement;
    margin?: number;
    description?: string;
    variant?: 'button' | 'caption' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'inherit' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'overline';
    bold?: boolean;
};
interface PremedTabsProps {
    data: Componente[];
    textColor?: string;
    color?: string;
    align?: 'center' | 'left' | 'right';
    activeColor?: string;
    activeTextColor?: string;
}
/**
 * Primary UI component for user interaction sdsd
 */
declare const PremedTabs: ({ data, textColor, color, align, activeColor, activeTextColor, }: PremedTabsProps) => JSX.Element;
export default PremedTabs;
//# sourceMappingURL=index.d.ts.map