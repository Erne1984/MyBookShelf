import RantingStars from "../../../../../../../../common/RantingStars/RatingStars";
import PrimaryButton from "../../../../../../../../common/PrimaryButton/PrimaryButton";
import style from "./MyReview.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import ModalEditReview from "../../../../../../../../common/ModalEditReview/ModalEditReview";
import { useState } from "react";

interface MyReviewProps {
    bookId: string
    bookTitle: string,
    createdAt: string;
    content: string,
}

export default function MyReview(props: MyReviewProps) {
    const [modalShow, setModalShow] = useState<boolean>(false);

    function onClose() {
        setModalShow(!modalShow);
    }

    return (
        <div className={style["my-review-container"]}>
            <h3>Minha review</h3>
            <section className={style["review-box"]}>
                <div className={style["rating-date-box"]}>
                    <RantingStars score={2} editable={false} />
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

            <ModalEditReview bookId={props.bookId} content={props.content} onClose={onClose} modalShow={modalShow} bookTitle={props.bookTitle} />
        </div>
    )
}