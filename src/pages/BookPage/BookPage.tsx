import { useEffect, useState } from "react";

import Header from "../../layouts/Header/Header";
import LeftColBook from "./components/LeftColBook/LeftColBook";
import RightColBook from "./components/RightColBook/RightColBook";
import EditionsRow from "./components/RightColBook/components/EditionsRow/EditionsRow";
import GenreRow from "./components/RightColBook/components/GenreRow/GenreRow";

import getBookData from "../../hooks/getBookData";
import styles from "./BookPage.module.css";
import { useParams } from "react-router-dom";

export default function BookPage() {
    const { bookISBN } = useParams();

    if (!bookISBN) return (<p>isbn não recebido</p>)

    const { data, loading, error } = getBookData(bookISBN.slice(1));
    const [bookData, setBookData] = useState(data);

    useEffect(() => {
        setBookData(data);
    }, [data, error]);

    if (loading) return <p>Carregando...</p>;
    if (!bookData) return <p>Erro em buscar dados do livro</p>;


    return (
        <>
            <Header />
            <div className={styles["container-page-book"]}>

                <LeftColBook bookCover={bookData.cover?.large}></LeftColBook>

                <div className={styles["right-col-container"]}>
                    <RightColBook
                        bookTitle={bookData.title}
                        bookAuthor={bookData.authors[0].name}
                        bookScore={bookData.score}
                        bookDescri={bookData.bookDescri}
                        bookAnalysis={bookData.reviews}
                        bookRatings={bookData.ratings}
                    />

                    <GenreRow bookGenres={bookData.subjects}/>



                </div>
            </div>
        </>
    );
}