import { useEffect, useRef, useState } from "react";
import style from "./ModalEditReview.module.css";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import useUpdateReview from "../../hooks/review/useUpdateReview";
import RantingStars from "../RantingStars/RatingStars";

interface ModalEditReviewProps {
    userId: string | undefined;
    bookId: string;
    bookTitle: string;
    content: string;
    score: number | undefined
    modalShow: boolean;
    onClose: () => void;
}

export default function ModalEditReview(props: ModalEditReviewProps) {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const [userScore, setUserScore] = useState<number>(0);
    const [content, setContent] = useState(props.content);

    const { updateReview, loading, error } = useUpdateReview();
    const handleSave = async () => {
        if (props.userId) {
            await updateReview(props.userId, props.bookId, content, userScore);
            location.reload()
        }
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

    const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value);
    };

    const handleScoreChange = (newScore: number) => {
        setUserScore(newScore);
    };

    return (
        <dialog className={style["modal-container"]} ref={dialogRef}>
            <div className={style["box"]}>
                <h2>{props.bookTitle}: Descrição</h2>

                <div className={style["user-rating"]}>
                    <p>Minha nota:</p>
                    <RantingStars
                        editable={true}
                        score={props.score}
                        onChange={handleScoreChange}
                    />
                </div>

                <textarea
                    rows={12}
                    value={content}
                    onChange={handleContentChange}
                ></textarea>

                <div className={style["btn-box"]}>
                    <div onClick={handleSave}>
                        <PrimaryButton btnContent={loading ? "Salvando..." : "Salvar"} />
                    </div>
                    <div onClick={props.onClose}>
                        <PrimaryButton btnContent="Cancelar" />
                    </div>
                </div>

                {error && <p className={style["error"]}>{error}</p>}
            </div>
        </dialog>
    );
}
