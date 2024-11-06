import style from "./GridView.module.css";
import BookCard from "../BookCardGrid/BookCardGrid";
import Book from "../../interfaces/Book";
import { Link } from "react-router-dom";
import { transliterate } from "transliteration";

interface GridViewProps {
    books: Book[];
}

export default function GridView(props: GridViewProps) {
    return (
        <div className={style["container-grid"]}>
            {props.books && props.books.map((book) => {
                const isbnForLink = book.identifiers?.isbn_13?.[0] || book.identifiers?.isbn_10?.[0] || "isbn-desconhecido";

                return (
                    <Link
                        to={`/book/${isbnForLink}`}
                        key={isbnForLink}
                    >
                        <BookCard
                            key={book._id}
                            BookImg={book.cover?.medium}
                            BookTitle={book.title}
                            BookAuthor={transliterate(book.authors[0] ? book.authors[0].name : "Autor Desconhecido")}
                            BookRanting={book.score}
                            BookScore={book.score}
                        />
                    </Link>
                );
            })}
        </div>
    );
}
