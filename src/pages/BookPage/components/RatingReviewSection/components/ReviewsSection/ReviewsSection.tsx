import style from "./ReviewsSection.module.css";

import FiltersComment from "../../../ReviewsSection/components/FilterComment/FiltersComment";
import Comment from "../../../ReviewsSection/components/Comment/Comment";
import { FormattedReview } from "../../../../../../interfaces/Book";

interface ReviewSectionProps {
    bookReviews: FormattedReview[] | undefined;
}

export default function ReviewSection(props: ReviewSectionProps) {

    return (
        <section className={style["reviews-content"]}>

            <FiltersComment />


            {props.bookReviews && props.bookReviews.map((review) => {
                return (
                    <Comment
                    key={review.reviewId}
                    reviewId={review.reviewId}
                    username={review.username}
                    userImg={review.imgUserUrl}
                    score={review.score}
                    content={review.content}
                    createdAt={review.createdAt} 
                />
                )
            })}

        </section>
    )
}