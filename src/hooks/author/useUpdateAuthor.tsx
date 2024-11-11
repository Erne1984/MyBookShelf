import { useState } from "react";

export default function useUpdateAuthor() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState(null);

    async function updateAuthor(authorId: string, updatedData: object) {
        try {
            const response = await fetch(`http://localhost:8080/updateAuthor?authorId=${authorId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedData),
            });

            if (!response.ok) {
                throw new Error("Erro ao atualizar a autor.");
            }

            const data = await response.json();
            setData(data);
        } catch (err) {
            setError("Erro ao atualizar a autor.");
        } finally {
            setLoading(false);
        }
    }

    return { updateAuthor, loading, error, data };
}