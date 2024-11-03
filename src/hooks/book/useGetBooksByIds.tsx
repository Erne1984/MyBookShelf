import { useEffect, useState } from 'react';

export default function useGetBooksByIds(bookIds: string[]) {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            if (bookIds.length === 0) {
                setBooks([]);
                setLoading(false);
                return;
            }

            setLoading(true);
            try {
                const response = await fetch('http://localhost:8080/getBooksByIds', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ bookIds }),
                });

                if (!response.ok) {
                    throw new Error(`Erro: ${response.status} ${response.statusText}`);
                }

                const data = await response.json();
                setBooks(data);
            } catch (err) {
                setError(err.message || 'Erro ao buscar os livros');
            } finally {
                setLoading(false);
            }
        };

        fetchBooks();
    }, [bookIds]);

    return { books, loading, error };
}
