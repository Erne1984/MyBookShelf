import RantingStars from "../../../../../../../../common/RantingStars/RatingStars";
import PrimaryButton from "../../../../../../../../common/PrimaryButton/PrimaryButton";
import style from "./MyReview.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

interface MyReviewProps {
    createdAt: string;
    content: string,
}

export default function MyReview(props: MyReviewProps) {

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

                <div className={style["btn-my-review"]}>
                    <PrimaryButton btnContent="Editar Review" />
                </div>

                <div className={style["box-others-reviews"]}>
                    <span>Ver minhas reviews</span>
                    <FontAwesomeIcon icon={faChevronRight} className={style["icon"]}/>
                </div>
            </section>
        </div>
    )
}