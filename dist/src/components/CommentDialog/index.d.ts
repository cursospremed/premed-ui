/// <reference types="react" />
interface PremedCommentDialogProps {
    data: any;
    handleClose: () => void;
    open: boolean;
    onClick: (comentario: string) => void;
    titulo?: string;
    label?: string;
    instruccion?: boolean;
}
/**
 * Primary UI component for user interaction
 */
declare const PremedCommentDialog: ({ data, handleClose, open, onClick, titulo, label, instruccion, }: PremedCommentDialogProps) => JSX.Element;
export default PremedCommentDialog;
//# sourceMappingURL=index.d.ts.map