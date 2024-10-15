import style from "./BookStatsSection.module.css";

import RantingStars from "../../../../../../common/RantingStars/RatingStars";

import RatingsDistribution from "./RatingsDistribution/RatingsDistribution";

interface BookStatsSectionProps {
    bookReviews: [],
    bookRatings: [],
}

export default function BookStatsSection(props: BookStatsSectionProps) {

    function getRatingsAverage(ratings: number[]) {
        if (ratings.length === 0) return 0;
        const sum = ratings.reduce((acc, curr) => acc + curr, 0);
        return sum / ratings.length;
    }

    return (
        <section className={style["book-stats-container"]}>

            <h3>Reviews da Comunidade</h3>

            <div className={style["rating-average-box"]}>
                <RantingStars editable={false} score={0} />
                <div className={style["rating-average"]}>{getRatingsAverage(props.bookRatings)}</div>
            </div>

            <div className={style["rating-review-numbers"]}>
                <small>{props.bookRatings.length} Avaliações</small>
                <small>•</small>
                <small>{props.bookReviews.length} Reviews</small>
            </div>

            <RatingsDistribution bookRatings={props.bookRatings}/>

        </section>
    )
}