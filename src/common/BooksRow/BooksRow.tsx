import { useEffect, useState } from 'react';
import './BooksRow.css';
import BookCard from '../BookCard/BookCard';
import GetBooks from '../../hooks/getBooks';
import staticData from '../../data/books.json';
import { transliterate } from 'transliteration';
import { Link } from 'react-router-dom';

export default function BooksRow() {
    const [visibleRows, setVisibleRows] = useState(1);
    let { data, loading, error } = GetBooks();
    const [booksData, setBookData] = useState(data);

    useEffect(() => {
        if (!data || error) {
            setBookData(staticData);  
        } else {
            setBookData(data);
        }
    }, [data, error]);

    if (loading) return <p>Carregando...</p>;
    if (!booksData) return <p>Erro em buscar dados do livro</p>;

    const columns = 4;
    const booksToShow = booksData.slice(0, columns * visibleRows);

    const hasMoreBooks = booksToShow.length < booksData.length;

    const handleLoadMore = () => {
        setVisibleRows(visibleRows + 1);
    };

    return (
        <section className='books-row'>
            {booksData && booksToShow.map(book => (
                <Link to={`/book/:${book.identifiers.isbn_13}`}>
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