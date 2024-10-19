import { useEffect, useState } from "react";
import { FormattedReview } from "../../interfaces/Book";


export default function useGetUserReview(bookId: string, userId: string) {
    const [data, setData] = useState<FormattedReview | undefined>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`http://localhost:8080/getUserReview?bookId=${bookId}&userId=${userId}`);

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

        if (bookId && userId) fetchData();
    }, [bookId, userId])

    return { data, loading, error }
}