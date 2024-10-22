import { useEffect, useState } from "react";
import { Rating } from "../../interfaces/Book";


export default function useGetUsertRating(userId: string | undefined, bookId: string) {
    const [data, setData] = useState<Rating>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchBookData() {
            try {
                const response = await fetch(`http://localhost:8080/getUserRating?userId=${userId}&bookId=${bookId}`);

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

        if (userId && bookId) {
            fetchBookData();
        }
    }, [userId, bookId]);


    return { data, loading, error };
}