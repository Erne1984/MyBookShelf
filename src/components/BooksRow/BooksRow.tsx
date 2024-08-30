import './BooksRow.css';

import BookCard from '../BookCard/BookCard';
import GetBooks from '../../hooks/getBooks';;

import { transliterate } from 'transliteration';

export default function BooksRow() {
    const { data, loading, error } = GetBooks();

    if (loading) return <p>Carregando...</p>;
    if (error) return <p>Erro: {error}</p>;


    return (
        <section className='books-row'>
            {data && data.map(book => (
                <BookCard
                    key={book.identifiers.isbn_10[0]}
                    BookImg={book.cover?.medium}
                    BookTitle={book.title}
                    BookAuthor={transliterate(book.authors[0].name)}
                    BookRanting={book.score}
                    BookScore={book.score}
                />
            ))}
        </section>
    )
}