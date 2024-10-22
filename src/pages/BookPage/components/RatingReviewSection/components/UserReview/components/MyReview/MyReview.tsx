import RantingStars from "../../../../../../../../common/RantingStars/RatingStars";
import PrimaryButton from "../../../../../../../../common/PrimaryButton/PrimaryButton";
import style from "./MyReview.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import ModalEditReview from "../../../../../../../../common/ModalEditReview/ModalEditReview";
import { useEffect, useState } from "react";
import useGetUsertRating from "../../../../../../../../hooks/rating/useGetUsertRating";

interface MyReviewProps {
    bookId: string;
    userId: string | undefined;
    bookTitle: string,
    createdAt: string;
    content: string,
}

export default function MyReview(props: MyReviewProps) {
    const [modalShow, setModalShow] = useState<boolean>(false);
    const { data, error } = useGetUsertRating(props.userId, props.bookId);
    const [score, setScore] = useState<number | undefined>();

    useEffect(() => {
        if (data && !error) {
            setScore(data.score)
        }
    }, [data])


    function onClose() {
        setModalShow(!modalShow);
    }

    return (
        <div className={style["my-review-container"]}>
            <h3>Minha review</h3>
            <section className={style["review-box"]}>
                <div className={style["rating-date-box"]}>
                    <RantingStars score={score} editable={false} />
                    <time dateTime={props.createdAt}>{new Date(props.createdAt).toLocaleDateString()}</time>
                </div>

                <p className={style["review-content"]}>
                    {props.content}
                </p>

                <div className={style["btn-my-review"]} onClick={onClose}>
                    <PrimaryButton btnContent="Editar Review" />
                </div>

                <div className={style["box-others-reviews"]}>
                    <span>Ver minhas reviews</span>
                    <FontAwesomeIcon icon={faChevronRight} className={style["icon"]} />
                </div>
            </section>

            <ModalEditReview userId={props.userId}
                bookId={props.bookId}
                content={props.content}
                onClose={onClose}
                modalShow={modalShow}
                bookTitle={props.bookTitle}
                score={score} />
        </div>
    )
}