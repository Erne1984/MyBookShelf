import style from "./RatingReviewSection.module.css";

import UserReview from "./components/UserReview/UserReview";
import BookStatsSection from "./components/BookStatsSection/BookStatsSection";
import ReviewSection from "./components/ReviewsSection/ReviewsSection";

import useGetBookReviews from "../../../../hooks/review/useGetBookReviews";
import { FormattedReview } from "../../../../interfaces/Book";
import { useEffect, useState } from "react";

interface RatingReviewSectionProps {
    bookId: string,
    bookTitle: string,
    bookReviews: [],
    bookRatings: [],
}

export default function RatingReviewSection(props: RatingReviewSectionProps) {

    const { data, error } = useGetBookReviews(props.bookId);
    const [reviews, setReviews] = useState<FormattedReview[] | undefined>();

    useEffect(() => {
        if (data && !error) {
            setReviews(data);
        }
    }, [data])


    return (
        <section className={style["rating-review-section"]}>

            <h2 className={style["section-title"]}>Resenhas e Avaliações</h2>

            <UserReview  bookId={props.bookId} bookTitle={props.bookTitle} />

            <BookStatsSection bookId={props.bookId} bookRatings={props.bookRatings} bookReviews={props.bookReviews} />

            <ReviewSection bookReviews={reviews} />

        </section>
    )
}