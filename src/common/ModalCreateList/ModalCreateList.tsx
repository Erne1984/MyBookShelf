import { useEffect, useRef, useState } from "react";
import style from "./ModalCreateList.module.css";
import useGetUserLists from "../../hooks/List/useGetUserLists";

interface ModalCreateListProps {
    bookId: string;
    userId: string;
    modalShow: boolean;
    onClose: () => void;
    onOpenPreviousModal: () => void;
}

export default function ModalCreateList(props: ModalCreateListProps) {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const { userLists } = useGetUserLists(props.userId);
    const [lists, setLists] = useState<[]>([]);

    useEffect(() => {
        const dialog = dialogRef.current;

        if (props.modalShow) {
            dialog?.showModal();
            dialog?.focus();
        } else {
            dialog?.close();
        }
    }, [props.modalShow]);

    useEffect(() => {
        if (userLists && userLists.length > 0) {
            setLists(userLists);
        }
    }, [userLists]);

    return (
        <dialog className={style["modal-container"]} ref={dialogRef}>
            <div className={style["box"]}>
                <div className={style["title-box"]}>
                    <h2>Adicionar Estantes Personalizadas</h2>
                </div>

                <div className={style["add-new-shelf-container"]}>
                    <input type="text" placeholder="Nova estante" />
                    <button>Adicionar</button>
                </div>

                <div className={style["user-shelfs"]}>
                    {lists && lists.map((list, index) => (
                        <div key={index}>{list}</div>
                    ))}
                </div>

                <button onClick={props.onOpenPreviousModal}>Voltar</button>
                <button onClick={props.onClose} className={style["btn-create-list"]}>Feito!</button>
            </div>
        </dialog>
    );
}