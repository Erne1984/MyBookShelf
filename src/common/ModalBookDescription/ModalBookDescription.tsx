import { useEffect, useRef } from "react";
import style from "./ModalBookDescription.module.css";

import PrimaryButton from "../PrimaryButton/PrimaryButton";

interface ModalBookDescriptionProps {
    bookId: string,
    bookTitle: string,
    modalShow: boolean;
    onClose: () => void;
}

export default function ModalBookDescription(props: ModalBookDescriptionProps) {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        const dialog = dialogRef.current;

        if (props.modalShow) {
            dialog?.showModal();
            dialog?.focus();
        } else {
            dialog?.close();
        }
    }, [props.modalShow]);

    async function handleUpdate() {
        try {
            const bookDescri = textareaRef.current?.value;

            const response = await fetch("http://localhost:8080/editBookDescri", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ bookId: props.bookId, bookDescri }) 
            });

            if (!response.ok) {
                throw new Error('Erro ao enviar dados.');
            }

            window.location.reload();
            
        } catch (err) {
            console.error('Erro:', err);
            alert('Falha ao enviar dados para o banco!');
        }
    }

    return (
        <dialog className={style["modal-container"]} ref={dialogRef}>

            <div className={style["box"]}>
                <h2>{props.bookTitle}: Descrição</h2>

                <textarea rows={12} ref={textareaRef}></textarea>

                <div onClick={handleUpdate} className={style["btn-box"]}>
                    <div>
                        <PrimaryButton btnContent="Salvar" />
                    </div>
                    <div onClick={props.onClose}>
                        <PrimaryButton btnContent="Cancelar" />
                    </div>
                </div>
            </div>

        </dialog>
    );
}