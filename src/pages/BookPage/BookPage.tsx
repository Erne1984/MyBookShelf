import { useEffect, useState } from "react";

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
import ReviewSection from "./components/ReviewsSection/ReviewsSection";

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

    function extractAuthorKey(url: string) {
        if (!url) return null;

        console.log(url + " url")
        
        const cleanUrl = url.trim();
        const regex = /\/authors\/(OL\d+A)(?:\/.*)?/;
        const match = cleanUrl.match(regex);
        
        console.log(match);
        return match ? match[1] : null;
    }

    const authorKey = bookData?.authors?.[0]?.key ? bookData.authors[0].key : extractAuthorKey(bookData.authors[0].url);

    return (
        <>
            <Header />
            <div className={styles["container-page-book"]}>

                <LeftColBook bookCover={bookData.cover?.large}></LeftColBook>

                <div className={styles["right-col-container"]}>
                    <RightColBook
                        bookId={bookData._id}
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

                    <AboutAuthor authorKey={authorKey && authorKey} />

                    <RatingReviewSection bookId={bookData._id} bookRatings={bookData.ratings} bookReviews={bookData.reviews}/>

                    <ReviewSection/>
                </div>
            </div>
        </>
    );
}