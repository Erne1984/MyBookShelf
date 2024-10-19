import { useEffect, useRef, useState } from "react";
import style from "./ModalReview.module.css";

import PrimaryButton from "../PrimaryButton/PrimaryButton";
import RantingStars from "../RantingStars/RatingStars";

interface ModalReviewProps {
    userId: string | undefined,
    bookId: string,
    bookTitle: string;
    modalShow: boolean;
    onClose: () => void;
}

export default function ModalReview(props: ModalReviewProps) {
    const [userScore, setUserScore] = useState<number>(0);
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

    const handleScoreChange = (newScore: number) => {
        setUserScore(newScore);
    };

    async function handleClick() {
        try {
            const userReview = textareaRef.current?.value;

            const response = await fetch("http://localhost:8080/createReviews", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userId: props.userId, bookId: props.bookId, content: userReview, score: userScore }) 
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
                <h2>{props.bookTitle}</h2>

                <div className={style["user-rating"]}>
                    <p>Minha nota:</p>
                    <RantingStars
                        editable={true}
                        score={userScore}
                        onChange={handleScoreChange}
                    />
                </div>

                <textarea rows={12} ref={textareaRef}></textarea>

                <div className={style["btn-box"]}>
                    <div onClick={handleClick}>
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