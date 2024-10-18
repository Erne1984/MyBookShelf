import style from "./RatingReviewSection.module.css";

import UserReview from "./components/UserReview/UserReview";
import BookStatsSection from "./components/BookStatsSection/BookStatsSection";

interface RatingReviewSectionProps {
    bookId: string,
    bookReviews: [],
    bookRatings: [],
}

export default function RatingReviewSection(props: RatingReviewSectionProps) {

    return (
        <section className={style["rating-review-section"]}>

            <h2 className={style["section-title"]}>Resenhas e Avaliações</h2>

            <UserReview bookId={props.bookId}/>

            <BookStatsSection bookRatings={props.bookRatings} bookReviews={props.bookReviews}/>

        </section>
    )
}