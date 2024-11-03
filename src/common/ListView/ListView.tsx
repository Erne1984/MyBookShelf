import { Link } from "react-router-dom";
import style from "./ListView.module.css";
import Book from "../../interfaces/Book";
import BookCardList from "../BookCardList/BookCardList";
import { transliterate } from "transliteration";

interface ListViewProps {
    books: Book[]
}

export default function ListView(props: ListViewProps) {
    return (
        <div className={style["container"]}>
            {
                props.books && props.books.map((book) => {
                    return (
                        <Link
                            to={`/book/${book._id}`}
                            key={book._id}>
                            <BookCardList
                                key={book._id}
                                BookImg={book.cover?.medium}
                                BookTitle={book.title}
                                BookAuthor={transliterate(book.authors[0]?.name || "Autor Desconhecido")}
                                BookRanting={book.score}
                                BookScore={book.score}
                            />
                        </Link>
                    );
                })
            }
        </div>
    );
}