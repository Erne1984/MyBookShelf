import { useEffect, useState } from "react";

import Header from "../../layouts/Header/Header";
import LeftColBook from "./components/LeftColBook/LeftColBook";
import RightColBook from "./components/RightColBook/RightColBook";

import EditionDetails from "./components/EditionDetails/EditionDetails";
import GenreRow from "./components/GenreRow/GenreRow";

import getBookData from "../../hooks/getBookData";
import styles from "./BookPage.module.css";
import { useParams } from "react-router-dom";
import AboutAuthor from "./components/AboutAuthor/AboutAuthor";

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

    const regex = /\/authors\/(OL[0-9]+A)\//;
    const url = bookData.authors[0].url;
    const match = url.match(regex);

    let authorKey = "";

    if (match) {
        authorKey = match[1];
    }

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
                        authorKey={authorKey}
                    />

                    <GenreRow bookGenres={bookData.subjects} />

                    <EditionDetails
                        bookFormat={bookData.format}
                        bookIsbn={bookData.identifiers.isbn_13 ? bookData.identifiers.isbn_13[0] : bookData.identifiers.isbn_10[0]}
                        bookLanguage={bookData.language}
                        bookPublishDate={bookData.publish_date}
                        bookPublisher={bookData.publishers}
                    />

                    <AboutAuthor authorKey={authorKey} />

                </div>
            </div>
        </>
    );
}