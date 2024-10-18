import { useEffect, useState } from "react";
import { Rating } from "../../interfaces/Book";


export default function useGetBookRatings(bookId: string) {
    const [data, setData] = useState<Rating[] | null>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`http://localhost:8080/getBookRatings?bookId=${bookId}`);

                if (!response.ok) throw new Error('Erro na resposta do servidor');

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
        if (bookId) {
            fetchData();
        }
    }, [bookId])

    return { data, loading, error }
}