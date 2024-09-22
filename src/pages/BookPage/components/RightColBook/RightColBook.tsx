import styles from "./RightColBook.module.css";

import { transliterate } from 'transliteration';

import RantingStars from "../../../../common/RantingStars/RatingStars";
import RowAnalysisRating from "./components/RowAnalysisRating/RowAnalysisRating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

//import AboutAuthor from "./components/AboutAuthor/AboutAuthor";

interface RightColBookProps {
    bookTitle: string,
    bookAuthor: string,
    bookScore: number,
    bookAnalysis: [],
    bookRatings: [],
    bookDescri: string,
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

            <div className={styles["box-title"]}>

                <h2 className={styles.title}>Descrição</h2>

                <FontAwesomeIcon icon={faPen} />

            </div>

            <div className={styles["descri"]} dangerouslySetInnerHTML={{ __html: props.bookDescri }} />

            {/* 
                <AboutAuthor name={props.bookAuthor} img={props.authorImg} authorBio={props.authorBio} />
            */}

        </section>
    )
} 