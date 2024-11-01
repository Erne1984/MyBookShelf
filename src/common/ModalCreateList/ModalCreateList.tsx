import { useEffect, useRef, useState } from "react";
import style from "./ModalCreateList.module.css";
import useGetUserLists from "../../hooks/List/useGetUserLists";
import useCreateList from "../../hooks/List/useCreateList";
import { List } from "../../interfaces/Book";

interface ModalCreateListProps {
    bookId: string;
    userId: string;
    modalShow: boolean;
    onClose: () => void;
    onOpenPreviousModal: () => void;
}

export default function ModalCreateList(props: ModalCreateListProps) {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const listnameRef = useRef<HTMLInputElement>(null);
    const { userLists } = useGetUserLists(props.userId);
    const [lists, setLists] = useState<List[]>([]);

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

    async function handleAddList() {
        const listname = listnameRef.current?.value;

        if(listname && props.userId && props.bookId) {
            await useCreateList(props.userId, props.bookId, listname, false);
        } else{
            alert("insira o nome para estante");
        }
    }

    return (
        <dialog className={style["modal-container"]} ref={dialogRef}>
            <div className={style["box"]}>
                <div className={style["title-box"]}>
                    <h3>Adicionar Estantes Personalizadas</h3>
                </div>

                <div className={style["add-new-shelf-container"]}>
                    <input type="text" placeholder="Nova estante" ref={listnameRef} />
                    <button onClick={handleAddList}>Adicionar</button>
                </div>

                <div className={style["user-shelfs"]}>
                    {lists && lists.map((list) => (
                        <div key={list._id} className={style["list-item"]}>{list.name}</div>
                    ))}
                </div>

                <div className={style["btns-container"]}>
                    <button onClick={props.onOpenPreviousModal}>Voltar</button>
                    <button onClick={props.onClose} className={style["btn-create-list"]}>Feito!</button>
                </div>
            </div>
        </dialog>
    );
}
