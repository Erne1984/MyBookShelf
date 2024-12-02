import { useEffect, useState } from "react";
import { FormattedReview } from "../../interfaces/Book";

export default function useFilterReviewsByClassification(bookId: string, classification: string) {
    const [data, setData] = useState<FormattedReview[] | undefined>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(
                    `http://localhost:8080/getFilteredReviews?bookId=${bookId}&classification=${classification}`
                );

                if (!response.ok) throw new Error("Erro na resposta do servidor");

                const result = await response.json();

                setData(result);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("Ocorreu um erro desconhecido");
                }
            } finally {
                setLoading(false);
            }
        }

        if (bookId && classification) fetchData();
    }, [bookId, classification]);

    return { data, loading, error };
}