import styles from "./RightColBook.module.css";

import { transliterate } from 'transliteration';

import RantingStars from "../../../../common/RantingStars/RatingStars";
import RowAnalysisRating from "./components/RowAnalysisRating/RowAnalysisRating";
import GenreRow from "./components/GenreRow/GenreRow";
import EditionDetails from "./components/AboutTheEdition/EditionDetails";

import { Subject } from "../../../../interfaces/Book";

interface RightColBookProps {
    bookTitle: string,
    bookDescri: string,
    bookAuthor: string,
    bookScore: number,
    bookGenres: Subject[],
    bookAnalysis: [],
    bookRatings: [],
    bookFormat: string,
    bookLanguage: string | undefined,
    bookIsbn: string,
    bookPublishDate: string,
    bookPublisher: string,
}

export default function RightColBook(props: RightColBookProps) {

    return (
        <section className={styles["container-right-col"]}>

            <div className={styles["box-title-book"]}>
                <h1> {props.bookTitle} </h1>
                <h3> {transliterate(props.bookAuthor)} </h3>
            </div>

            <div className={styles["rating-statistics-row"]}>

                <RantingStars score={props.bookScore} editable={false} />

                <RowAnalysisRating bookAnalysis={props.bookAnalysis} bookRatings={props.bookRatings} bookScore={props.bookScore} />

            </div>

            <h2 className={styles.title}>Descrição</h2>

            <div className={styles["descri"]} dangerouslySetInnerHTML={{ __html: props.bookDescri }} />

            <GenreRow bookGenres={props.bookGenres} />

            <EditionDetails
                bookFormat={props.bookFormat}
                bookLanguage={props.bookLanguage}
                bookIsbn={props.bookIsbn}
                bookPublishDate={props.bookPublishDate}
                bookPublisher={props.bookPublisher}
            />

        </section>
    )
} 