import { useEffect, useRef } from "react";
import style from "./ModalDeleteList.module.css";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import useDeleteList from "../../hooks/List/useDeleteList";

interface ModalDeleteListProps {
    listId: string;
    userId: string | undefined;
    listname: string;
    modalShow: boolean;
    onClose: () => void;
}

export default function ModalDeleteList(props: ModalDeleteListProps) {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const { deleteList } = useDeleteList();

    useEffect(() => {
        const dialog = dialogRef.current;

        if (props.modalShow) {
            dialog?.showModal();
            dialog?.focus();
        } else {
            dialog?.close();
        }
    }, [props.modalShow]);

    async function handleDelete() {
        if (props.userId && props.listId) {
            await deleteList(props.listId, props.userId);
        }
    }

    return (
        <dialog className={style["modal-container"]} ref={dialogRef}>
            <div className={style["box"]}>
                <div className={style["title-box"]}>
                    <h3>Tem certeza que deseja excluir a lista { }</h3>
                </div>


                <div className={style["btns-container"]}>
                    <div onClick={props.onClose}>
                        <PrimaryButton btnContent="Voltar" />
                    </div>

                    <div onClick={handleDelete}>
                        <PrimaryButton btnContent="Deletar" />
                    </div>
                </div>
            </div>
        </dialog>
    )
}