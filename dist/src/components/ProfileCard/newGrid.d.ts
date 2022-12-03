/// <reference types="react" />
declare type Color = {
    textColor: string;
    titleColor: string;
};
interface NewGridProfileProps extends Color {
    startIndex: number;
    finalIndex: number;
    data: object;
    flexD: string;
    align: string;
}
export declare const NewGridProfile: ({ data, startIndex, finalIndex, textColor, titleColor, flexD, align, }: NewGridProfileProps) => JSX.Element;
export {};
//# sourceMappingURL=newGrid.d.ts.map