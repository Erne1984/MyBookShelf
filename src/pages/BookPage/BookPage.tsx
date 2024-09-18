import { useEffect, useState } from "react";
import Header from "../../layouts/Header/Header";
import LeftColBook from "./components/LeftColBook/LeftColBook";
import RightColBook from "./components/RightColBook/RightColBook";

import staticData from "../../data/books.json";
import getBookData from "../../hooks/getBookData";
import styles from "./BookPage.module.css";
import { useParams } from "react-router-dom";

export default function BookPage() {
    let { data, loading, error } = getBookData();
    const [bookData, setBookData] = useState(data);

    const { bookISBN } = useParams();


    useEffect(() => {
        if (!data || error) {
            const filteredBook = staticData.filter((book) => book.identifiers.isbn_13[0] == bookISBN?.slice(1));
            setBookData(filteredBook);
            console.log(filteredBook)
            console.log(bookISBN?.slice(1))
        } else {
            setBookData(data);
        }
    }, [data, error]);

    if (loading) return <p>Carregando...</p>;
    if (!bookData) return <p>Erro em buscar dados do livro</p>;

    return (
        <>
            <Header />
            <div className={styles["container-page-book"]}>

                <LeftColBook bookCover={bookData[0].cover?.large}></LeftColBook>

                <RightColBook
                    bookTitle={bookData[0].title}
                    bookAuthor={bookData[0].authors[0].name}
                    bookScore={bookData[0].score}
                    bookDescri={bookData[0].descri}
                    bookAnalysis={bookData[0].reviews}
                    bookRatings={bookData[0].ratingsReference}
                    bookGenres={bookData[0].subjects}
                />


            </div>
        </>
    );
}