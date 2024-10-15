import style from "./RatingReviewSection.module.css";

import UserReview from "./components/UserReview/UserReview";
import BookStatsSection from "./components/BookStatsSection/BookStatsSection";

interface RatingReviewSectionProps {
    bookReviews: [],
    bookRatings: [],
}

export default function RatingReviewSection(props: RatingReviewSectionProps) {

    return (
        <section className={style.container}>

            <h2>Resenhas e Avaliações</h2>

            <UserReview />

            <BookStatsSection bookRatings={props.bookRatings} bookReviews={props.bookReviews}/>

        </section>
    )
}