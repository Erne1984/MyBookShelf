import style from "./RatingsDistribution.module.css";

interface RatingsDistributionProps {
    bookRatings: number[],
}

export default function RatingsDistribution(props: RatingsDistributionProps) {

    function getPercentage(count: number) {
        const total = props.bookRatings.length;
        return total === 0 ? 0 : (count / total * 100).toFixed(1);
    }

    function getRatingsCount(stars: number) {
        return props.bookRatings.filter(rating => rating === stars).length;
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

                    <div className={style["rating-percentage"]}>
                        {`${getRatingsCount(star)} (${getPercentage(getRatingsCount(star))}%)`}
                    </div>
                </div>
            ))}

        </div>
    )
}
