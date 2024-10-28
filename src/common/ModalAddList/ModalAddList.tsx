import { useEffect, useRef } from "react";
import style from "./ModalAddList.module.css";
import { faTrash, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useAddUserBookStatus from "../../hooks/user/useAddUserBookStatus";
import useDeleteBookFromShelfs from "../../hooks/List/useDeleteBookFromShelfs";

interface ModalAddListProps {
    bookId: string;
    userId: string;
    modalShow: boolean;
    status: string;
    onClose: () => void;
}

export default function ModalAddList(props: ModalAddListProps) {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const addUserBookStatus = useAddUserBookStatus();

    const handleStatusChange = (newStatus: string) => {
        addUserBookStatus(props.bookId, props.userId, newStatus);
    };

    const handleRemoveBook = () => {
        useDeleteBookFromShelfs(props.userId, props.bookId);
        props.onClose();
    };

    useEffect(() => {
        const dialog = dialogRef.current;

        if (props.modalShow) {
            dialog?.showModal();
            dialog?.focus();
        } else {
            dialog?.close();
        }
    }, [props.modalShow]);

    return (
        <dialog className={style["modal-container"]} ref={dialogRef}>
            <div className={style["box"]}>
                <div className={style["title-box"]}>
                    <h2>Escolha uma estante</h2>
                    <div onClick={props.onClose} className={style["close-icon"]}>
                        <FontAwesomeIcon icon={faXmark} />
                    </div>
                </div>

                <div className={style["btn-box"]}>
                    <button
                        onClick={() => handleStatusChange("Quero Ler")}
                        className={props.status === "Quero Ler" ? style.highlight : ""}
                    >
                        Quero Ler
                    </button>
                    <button
                        onClick={() => handleStatusChange("Lendo")}
                        className={props.status === "Lendo" ? style.highlight : ""}
                    >
                        Lendo
                    </button>
                    <button
                        onClick={() => handleStatusChange("Lido")}
                        className={props.status === "Lido" ? style.highlight : ""}
                    >
                        Lido
                    </button>
                </div>

                <div className={style["clear-icon-box"]} onClick={handleRemoveBook}>
                    <FontAwesomeIcon icon={faTrash} />
                    <p>Remover de minha estante</p>
                </div>
            </div>
        </dialog>
    );
}
