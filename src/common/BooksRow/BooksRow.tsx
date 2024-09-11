import { useState } from 'react';
import './BooksRow.css';
import BookCard from '../BookCard/BookCard';
import GetBooks from '../../hooks/getBooks';
import staticData from '../../data/books.json';
import { transliterate } from 'transliteration';
import { Link } from 'react-router-dom';

export default function BooksRow() {
    const [visibleRows, setVisibleRows] = useState(1);
    let { data, loading, error } = GetBooks();

    if (loading) return <p>Carregando...</p>;
    // if (error) return <p>Erro: {error}</p>;

    if (error) data = staticData;

    if (!data) return <p>Sem livros</p>;

    const columns = 4;
    const booksToShow = data.slice(0, columns * visibleRows);

    const hasMoreBooks = booksToShow.length < data.length;

    const handleLoadMore = () => {
        setVisibleRows(visibleRows + 1);
    };

    return (
        <section className='books-row'>
            {data && booksToShow.map(book => (
                <Link to={`/book/:${book.identifiers.isbn_10}`}>
                    <BookCard
                        key={book.identifiers.isbn_10[0]}
                        BookImg={book.cover?.medium}
                        BookTitle={book.title}
                        BookAuthor={transliterate(book.authors[0].name)}
                        BookRanting={book.score}
                        BookScore={book.score}
                    />
                </Link>
            ))}
            {hasMoreBooks && (
                <button onClick={handleLoadMore} className='load-more'>
                    Ver Mais
                </button>
            )}
        </section>
    );
}
