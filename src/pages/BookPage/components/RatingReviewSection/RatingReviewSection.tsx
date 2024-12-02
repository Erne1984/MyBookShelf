import style from "./RatingReviewSection.module.css";
import UserReview from "./components/UserReview/UserReview";
import BookStatsSection from "./components/BookStatsSection/BookStatsSection";
import ReviewSection from "./components/ReviewsSection/ReviewsSection";
import useFilterReviewsByClassification from "../../../../hooks/review/usefilterReviewsbyClassificition";
import useGetBookReviews from "../../../../hooks/review/useGetBookReviews";
import { FormattedReview } from "../../../../interfaces/Book";
import { useEffect, useState } from "react";

interface RatingReviewSectionProps {
    bookId: string;
    bookTitle: string;
    bookReviews: [];
    bookRatings: [];
}

export default function RatingReviewSection(props: RatingReviewSectionProps) {
    const [activeFilter, setActiveFilter] = useState<string | null>(null);
    const [reviews, setReviews] = useState<FormattedReview[] | undefined>();

    const { data: filteredData } = useFilterReviewsByClassification(
        props.bookId, activeFilter || ""
    );

    const { data: allData } = useGetBookReviews(props.bookId);

    useEffect(() => {
        if (activeFilter === null) {
            setReviews(allData);
        } else if (filteredData) {
            setReviews(filteredData);
        }
    }, [activeFilter, filteredData, allData]);

    return (
        <section className={style["rating-review-section"]}>
            <h2 className={style["section-title"]}>Resenhas e Avaliações</h2>

            <UserReview bookId={props.bookId} bookTitle={props.bookTitle} />

            <BookStatsSection
                bookId={props.bookId}
                bookRatings={props.bookRatings}
                bookReviews={props.bookReviews}
            />

            <ReviewSection
                bookReviews={reviews}
                activeFilter={activeFilter}
                onFilterChange={setActiveFilter}
            />
        </section>
    );
}
