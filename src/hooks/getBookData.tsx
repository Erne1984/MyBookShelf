import { useEffect, useState } from "react";
import Book from "../interfaces/Book";

export default function getBookData() {

    const [data, setData] = useState<Book[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {

        async function fetchBookData() {
            try {
                const response = await fetch('http://localhost:8080/');
                if (!response.ok) {
                    throw new Error('Erro na resposta do servidor');
                }
                const result = await response.json();
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
        }

        fetchBookData();
    }, [])

    return { data, loading, error };
}