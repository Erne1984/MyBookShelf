import { useEffect, useState } from "react";


export default function getBookAverage(bookId: string) {
    const [bookAverage, setBookAverage] = useState<number>(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`http://localhost:8080/getBookAverage?bookId=66fa2b19a4458ec2bded2ec7`);

                if (!response.ok) {
                    throw new Error('Erro na resposta do servidor');
                }

                const result = await response.json();

                setBookAverage(result.averageRating);
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

    return { bookAverage, loading, error };
}