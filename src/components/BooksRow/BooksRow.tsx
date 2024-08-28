import './BooksRow.css';

import BookCard from '../BookCard/BookCard';
import GetBooks from '../../hooks/getBooks';;

export default function BooksRow() {
    const { data, loading, error } = GetBooks();

    if (loading) return <p>Carregando...</p>;
    if (error) return <p>Erro: {error}</p>;


    return (
        <section>
            {data && data.map(book => (
                <div key={book.identifiers.isbn_10[0]}>{book.title}</div>
            ))}
        </section>
    )
}