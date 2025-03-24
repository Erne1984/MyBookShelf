import { useState } from "react";

export default function useAddReply() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const addReply = async (respondingToReference: string, userId: string, content: string) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch("http://localhost:8080/addReply", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    respondingToReference,
                    userId,
                    content,
                }),
            });

            if (!response.ok) {
                throw new Error("Falha ao adicionar a resposta.");
            }

            const data = await response.json();
            return data;
        } catch (err: any) {
            setError(err.message);
            throw err;
        } finally {
            setIsLoading(false);
        }
    };

    return { addReply, isLoading, error };
}