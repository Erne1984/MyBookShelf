import styles from "./RightColBook.module.css";
import { transliterate } from 'transliteration';
import RantingStars from "../../../../common/RantingStars/RatingStars";

interface RightColBookProps {
    bookTitle: string,
    bookDescri: string,
    bookAuthor: string,
    bookScore: number,
    bookAnalysis: [],
    bookRatings: [],
}

export default function RightColBook(props: RightColBookProps) {

    return (
        <section className={styles["container-right-col"]}>

            <div className={styles["box-title-book"]}>
                <h1> {props.bookTitle} </h1>
                <h2> {transliterate(props.bookAuthor)} </h2>
            </div>

            <div className={styles["rating-statistics-row"]}>

                <RantingStars score={props.bookScore} editable={false} />

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

            <h2 className={styles.title}>Descrição</h2>

            <p>
                {props.bookDescri}
            </p>


        </section>
    )
} 