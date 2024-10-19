import styles from "./RightColBook.module.css";

import { transliterate } from 'transliteration';

import RantingStars from "../../../../common/RantingStars/RatingStars";
import RowAnalysisRating from "./components/RowAnalysisRating/RowAnalysisRating";
import ModalBookDescription from "../../../../common/ModalBookDescription/ModalBookDescription";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../context/AuthContextUser";
import getBookAverage from "../../../../hooks/book/getBookAverage";

interface RightColBookProps {
    bookId: string,
    bookTitle: string,
    bookAuthor: string,
    bookScore: number,
    bookAnalysis: [],
    bookRatings: [],
    bookDescri: string,
    authorKey: string | null
}

export default function RightColBook(props: RightColBookProps) {
    const { bookAverage, loading, error } = getBookAverage(props.bookId);
    const [rating, setRating] = useState<number>(0);
    const isAuthenticated = useContext(AuthContext)?.isAuthenticated
    const isModerator = useContext(AuthContext)?.isModerator

    const [showModal, setShowModal] = useState<boolean>(false);

    function toggleModal() {
        setShowModal(!showModal)
    }

    useEffect(() => {
        if (bookAverage && !error) {
            setRating(bookAverage);
        }
    }, [bookAverage, error]);

    return (
        <section className={styles["container-right-col"]}>

            <div className={styles["box-title-book"]}>
                <h1> {props.bookTitle} </h1>
                <Link to={`/author/:${props.authorKey}`}>
                    <h3> {transliterate(props.bookAuthor)} </h3>
                </Link>
            </div>

            <div className={styles["rating-statistics-row"]}>

                <RantingStars score={bookAverage} editable={false} />

                <RowAnalysisRating bookAnalysis={props.bookAnalysis} bookRatings={props.bookRatings} bookScore={bookAverage} />

            </div>

            <div className={styles["box-title"]}>

                <h2 className={styles.title}>Descrição</h2>

                {isAuthenticated ? (
                    <>
                        {isModerator && <FontAwesomeIcon onClick={toggleModal} className={styles["icon"]} icon={faPen} />}
                    </>
                ) :
                    <>
                    </>}
            </div>

            <ModalBookDescription bookId={props.bookId} bookTitle={props.bookTitle} modalShow={showModal} onClose={toggleModal} />

            <div className={styles["descri"]} dangerouslySetInnerHTML={{ __html: props.bookDescri }} />

        </section>
    )
} 