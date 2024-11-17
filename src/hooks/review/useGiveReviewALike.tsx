import { useState } from "react";

export default function useGiveReviewALike() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const toggleLike = async (userId: string, reviewId: string) => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`http://localhost:8080/giveReviewAlike`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ userId, reviewId }),
            });

            if (!response.ok) {
                throw new Error(await response.text());
            }

            const data = await response.json();
            setLoading(false);
            return data;
        } catch (err: any) {
            setLoading(false);
            setError(err.message || "Erro ao tentar dar o like.");
            throw err;
        }
    };

    return { toggleLike, loading, error };
}
