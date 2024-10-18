import style from "./BookStatsSection.module.css";
import getBookAverage from "../../../../../../hooks/book/getBookAverage";
import RantingStars from "../../../../../../common/RantingStars/RatingStars";
import RatingsDistribution from "./RatingsDistribution/RatingsDistribution";
import { useEffect, useState } from "react";

interface BookStatsSectionProps {
    bookId: string,
    bookReviews: [],
    bookRatings: [],
}

export default function BookStatsSection(props: BookStatsSectionProps) {

    const { bookAverage, loading, error } = getBookAverage(props.bookId);
    const [rating, setRating] = useState<number>(0);

    useEffect(() => {
        if (bookAverage && !error) {
            setRating(bookAverage);
        }
    }, [bookAverage, error]);

    return (
        <section className={style["book-stats-container"]}>

            <h3>Reviews da Comunidade</h3>

            <div className={style["rating-average-box"]}>
                <RantingStars editable={false} score={rating} />
                <div className={style["rating-average"]}>{rating}</div>
            </div>

            <div className={style["rating-review-numbers"]}>
                <small>{props.bookRatings.length} Avaliações</small>
                <small>•</small>
                <small>{props.bookReviews.length} Reviews</small>
            </div>

            <RatingsDistribution bookId={props.bookId} />

        </section>
    );
}