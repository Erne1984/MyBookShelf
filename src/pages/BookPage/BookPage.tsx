import { useEffect, useState } from "react";
import Header from "../../layouts/Header/Header";
import LeftColBook from "./components/LeftColBook/LeftColBook";
import RightColBook from "./components/RightColBook/RightColBook";
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

                <RightColBook
                    bookTitle={bookData.title}
                    bookAuthor={bookData.authors[0].name}
                    bookScore={bookData.score}
                    bookDescri={bookData.bookDescri}
                    bookAnalysis={bookData.reviews}
                    bookRatings={bookData.ratings}
                    bookGenres={bookData.subjects}
                    bookFormat={bookData.format}
                    bookPublishDate={bookData.publish_date}
                    bookIsbn={bookData.identifiers.isbn_13 ? bookData.identifiers.isbn_13[0] : bookData.identifiers.isbn_10[0]}
                    bookPublisher={bookData.publishers[0].name}
                    editionsBook={bookData.editions}
                    bookLanguage={bookData.language}
                />
            </div>
        </>
    );
}