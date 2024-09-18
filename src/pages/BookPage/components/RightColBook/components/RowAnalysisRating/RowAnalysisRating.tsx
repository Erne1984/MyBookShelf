import styles from "./RowAnalysisRating.module.css";

interface RowAnalysisRatingProps {
    bookScore: number,
    bookAnalysis: [],
    bookRatings: [],
}

export default function RowAnalysisRating(props: RowAnalysisRatingProps) {

    return (
        <div className={styles.container}>
            <h3 className={styles["rating-number"]}>{props.bookScore}</h3>

            <div className={styles["box-analysis-rating"]}>

                <div className={styles["stats-row"]}>

                    <div>{props.bookAnalysis.length}</div>

                    <div>Análises</div>

                </div>

                <div className={styles["stats-row"]}>

                    <div>{props.bookRatings.length}</div>

                    <div>Avaliações</div>

                </div>

            </div>
        </div>
    )
}