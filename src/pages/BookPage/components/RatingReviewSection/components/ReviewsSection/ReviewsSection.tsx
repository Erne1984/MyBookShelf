import style from "./ReviewsSection.module.css";
import FiltersComment from "../../../ReviewsSection/components/FilterComment/FiltersComment";
import Comment from "../../../ReviewsSection/components/Comment/Comment";
import { FormattedReview } from "../../../../../../interfaces/Book";

interface ReviewSectionProps {
    bookReviews: FormattedReview[] | undefined;
    activeFilter: string | null;
    onFilterChange: (filter: string | null) => void;
}

export default function ReviewSection({ bookReviews, activeFilter, onFilterChange }: ReviewSectionProps) {
    return (
        <section className={style["reviews-content"]}>
            <FiltersComment activeFilter={activeFilter} onFilterChange={onFilterChange} />

            {bookReviews && bookReviews.map((review) => {
                return (
                    <>
                        <Comment
                            key={review.reviewId}
                            userIdComment={review.userId}
                            reviewId={review.reviewId}
                            username={review.username}
                            userImg={review.imgUserUrl}
                            score={review.score}
                            content={review.content}
                            createdAt={review.createdAt}
                        />

                        
                    </>
                );
            })}
        </section>
    );
}