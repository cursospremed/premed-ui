export declare type Comentario = {
    foto?: string;
    nombre: string;
    cargo?: string;
    evaluacion?: string;
    fecha?: string;
    comentario: string;
};
export interface NewGridCommentProps {
    id: string;
    data: Comentario[];
    labelContenido?: string;
    color?: string;
    textColor?: string;
    titleColor?: string;
    commentColor?: string;
}
export interface CommentProps extends NewGridCommentProps {
    width?: number | string;
    height?: number | string;
}
//# sourceMappingURL=types.d.ts.map