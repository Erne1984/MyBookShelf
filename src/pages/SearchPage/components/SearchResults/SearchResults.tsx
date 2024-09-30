import style from "./SearchResults.module.css";
import BookCard from "../../../../common/BookCard/BookCard";
import Book from "../../../../interfaces/Book";
import { transliterate } from "transliteration";

interface SearchResultsProps {
    books: Book[]
}

export default function SearchResults(props: SearchResultsProps) {

    return (
        <div className={style["container"]}>

            <div className={style["book-grid"]}>
                {
                    props.books && props.books.map((book) => {
                        return (
                            <BookCard
                                key={book._id}
                                BookImg={book.cover?.medium}
                                BookTitle={book.title}
                                BookAuthor={transliterate(book.authors[0].name)}
                                BookRanting={book.score}
                                BookScore={book.score}
                            />
                        )
                    })
                }
            </div>

        </div>
    )
}