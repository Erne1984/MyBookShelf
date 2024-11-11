import { useEffect, useRef } from "react";
import style from "./ModalUpdateAuthor.module.css";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import useUpdateAuthor from "../../hooks/author/useUpdateAuthor";

interface ModalUpdateAuthorProps {
    authorId: string | undefined;
    authorBio: string | undefined;
    modalShow: boolean;
    onClose: () => void;
}

export default function ModalUpdateAuthor(props: ModalUpdateAuthorProps) {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const { updateAuthor } = useUpdateAuthor();

    useEffect(() => {
        const dialog = dialogRef.current;

        if (props.modalShow) {
            dialog?.showModal();
            dialog?.focus();
            
            if (textareaRef.current && props.authorBio) {
                textareaRef.current.value = props.authorBio;
            }
        } else {
            dialog?.close();
        }
    }, [props.modalShow, props.authorBio]);

    const handleSave = () => {
        const updatedData = { bio: textareaRef.current?.value };
        if (props.authorId) {
            updateAuthor(props.authorId, updatedData);
            window.location.reload()
        }
    };

    return (
        <dialog className={style["modal-container"]} ref={dialogRef}>
            <div className={style["box"]}>
                <h2>Dados Autor</h2>

                <textarea rows={12} ref={textareaRef}></textarea>

                <div className={style["btn-box"]}>
                    <div onClick={handleSave}>
                        <PrimaryButton btnContent="Salvar" />
                    </div>
                    <div onClick={() => props.onClose()}>
                        <PrimaryButton btnContent="Cancelar" />
                    </div>
                </div>
            </div>
        </dialog>
    );
}