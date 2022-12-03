import React from 'react';
export declare type Elemento = {
    componente: React.ReactNode;
    width?: number;
    titulo?: string;
    alignHorizontal?: 'left' | 'right' | 'center' | string;
    alignTitulo?: 'left' | 'right' | 'center' | string;
    alignVertical?: 'top' | 'center' | 'bottom' | string;
};
interface PremedContainerProps {
    data: Elemento[];
}
/**
 * Primary UI component for user interaction
 */
declare const PremedContainer: ({ data }: PremedContainerProps) => JSX.Element;
export default PremedContainer;
//# sourceMappingURL=index.d.ts.map