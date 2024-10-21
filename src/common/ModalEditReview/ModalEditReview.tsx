import { useEffect, useRef, useState } from "react";
import style from "./ModalEditReview.module.css";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import getUserProfile from "../../hooks/user/getUserProfile";
import { User } from "../../interfaces/Book";

interface ModalEditReviewProps {
    bookId: string,
    bookTitle: string,
    content: string,
    modalShow: boolean;
    onClose: () => void;
}

export default function ModalEditReview(props: ModalEditReviewProps) {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const [content, setContent] = useState(props.content);
    const { user, loading, error } = getUserProfile();
    const [profileData, setProfileData] = useState<User>();

    useEffect(() => {
        const dialog = dialogRef.current;
        console.log(props.bookId)

        if (props.modalShow) {
            dialog?.showModal();
            dialog?.focus();
        } else {
            dialog?.close();
        }
    }, [props.modalShow]);

    useEffect(() => {
        if(user) setProfileData(user);
    })

    const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value);
    };

    return (
        <dialog className={style["modal-container"]} ref={dialogRef}>
            <div className={style["box"]}>
                <h2>{props.bookTitle}: Descrição</h2>

                <textarea
                    rows={12}
                    value={content}
                    onChange={handleContentChange}
                ></textarea>

                <div className={style["btn-box"]}>
                    <div onClick={props.onClose}>
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