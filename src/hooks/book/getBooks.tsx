import { useState, useEffect } from "react";
import Book from "../../interfaces/Book";

export default function GetBooks() {
    const [data, setData] = useState<Book[] | null>(null); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch('http://localhost:8080/getBooks');
                if (!response.ok) {
                    throw new Error('Erro na resposta do servidor');
                }
                const result = await response.json();
                console.log('Dados retornados:', result);
                setData(result);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('An unknown error occurred');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);

    return { data, loading, error };
}
