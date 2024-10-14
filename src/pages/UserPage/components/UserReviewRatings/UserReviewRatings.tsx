import style from "./UserReviewRatings.module.css";

interface UserReviewRatingProps {
    userRatings: number;
    userReviews: number;
}

export default function UserReviewRating(props: UserReviewRatingProps) {

    return (
        <nav className={style["container-review-ratings-aside"]}>

            <div className={style["title-row"]}>
                <h4>Avaliações e resenhas</h4>
            </div>

            <div className={style["link-section"]}>
                <span>{props.userRatings} Avaliações</span>
                <span>{props.userReviews} Resenhas</span>
            </div>

        </nav>
    )
}