import style from "./RatingsDistribution.module.css";
import { useEffect, useState } from "react";
import useGetBookRatings from "../../../../../../../hooks/book/useGetBookRatings";
import { Rating } from "../../../../../../../interfaces/Book";

interface RatingsDistributionProps {
    bookId: string,
}

export default function RatingsDistribution({ bookId }: RatingsDistributionProps) {
    const { data, loading, error } = useGetBookRatings(bookId);
    const [ratings, setRatings] = useState<Rating[] | null>();


    useEffect(() => {
        setRatings(data)
        console.log(ratings)

    }, [data]);


    function getPercentage(count: number) {
        const total = Array.isArray(ratings) ? ratings.length : 0;
        return total === 0 ? 0 : ((count / total) * 100).toFixed(1);
    }

    function getRatingsCount(stars: number) {
        return Array.isArray(ratings)
            ? ratings.filter(rating => Math.round(rating.score) === stars).length
            : 0;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className={style["ratings-distribution-container"]}>
            {[5, 4, 3, 2, 1].map((star) => (
                <div className={style["ratings-distribution"]} key={star}>
                    <div className={style["star-label"]}>{star}</div>

                    <div className={style["progress-bar"]}>
                        <div
                            className={style["filled-bar"]}
                            style={{ width: `${getPercentage(getRatingsCount(star))}%` }}
                        />
                    </div>

                    <div className={style["rating-percentage-box"]}>
                        <small>{getRatingsCount(star)}</small>
                        <small className={style["rating-percentage"]}>({getPercentage(getRatingsCount(star))})</small>
                    </div>
                </div>
            ))}
        </div>
    );
}