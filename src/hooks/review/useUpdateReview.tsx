import { useState } from "react";

export default function useUpdateReview() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState(null);

    async function updateReview(userId: string, bookId: string, content: string, score: number) {
        try {
            const response = await fetch(`http://localhost:8080/updateReview?userId=${userId}&bookId=${bookId}&content=${content}&score=${score}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error("Erro ao atualizar a resenha.");
            }

            const data = await response.json();
            setData(data);
        } catch (err) {
            setError("Erro ao atualizar a resenha.");
        } finally {
            setLoading(false);
        }
    }

    return { updateReview, loading, error, data };
}