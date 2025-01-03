import { useContext, useEffect, useState } from "react";
import Header from "../../layouts/Header/Header";
import LeftColBook from "./components/LeftColBook/LeftColBook";
import RightColBook from "./components/RightColBook/RightColBook";
import EditionDetails from "./components/EditionDetails/EditionDetails";
import GenreRow from "./components/GenreRow/GenreRow";
import AboutAuthor from "./components/AboutAuthor/AboutAuthor";
import RatingReviewSection from "./components/RatingReviewSection/RatingReviewSection";
import getBookData from "../../hooks/book/getBookData";
import styles from "./BookPage.module.css";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContextUser";

export default function BookPage() {
    const { bookISBN } = useParams();
    const authContext = useContext(AuthContext);

    if (!authContext) return <p>Erro: Contexto de autenticação não encontrado.</p>;

    const { userId, loading: authLoading } = authContext;

    if (authLoading) return <p>Carregando...</p>;
    if (!bookISBN) return <p>ISBN não recebido</p>;

    const { data, loading: bookLoading, error } = getBookData(bookISBN.slice(1));
    const [bookData, setBookData] = useState(data);

    useEffect(() => {
        setBookData(data);
    }, [data, error]);

    if (bookLoading) return <p>Carregando...</p>;
    if (!bookData) return <p>Erro em buscar dados do livro</p>;

    return (
        <>
            <Header />
            <div className={styles["container-page-book"]}>
                <LeftColBook bookId={bookData._id} bookCover={bookData.cover?.large} userId={userId}></LeftColBook>

                <div className={styles["right-col-container"]}>
                    <RightColBook
                        bookId={bookData._id}
                        bookTitle={bookData.title}
                        bookAuthor={bookData.authors[1].name}
                        bookScore={bookData.score}
                        bookDescri={bookData.bookDescri}
                        bookAnalysis={bookData.reviews}
                        bookRatings={bookData.ratings}
                        authorKey={bookData.authors[1].key}
                    />

                    <GenreRow bookGenres={bookData.subjects} />

                    <EditionDetails
                        bookFormat={bookData.format}
                        bookIsbn={bookData.identifiers.isbn_13 ? bookData.identifiers.isbn_13[0] : bookData.identifiers.isbn_10[0]}
                        bookLanguage={bookData.language}
                        bookPublishDate={bookData.publish_date}
                        bookPublisher={bookData.publishers}
                    />

                    <AboutAuthor authorKey={bookData.authors[1].name} />

                    <RatingReviewSection bookId={bookData._id} bookTitle={bookData.title} bookRatings={bookData.ratings} bookReviews={bookData.reviews}/>
                </div>
            </div>
        </>
    );
}
