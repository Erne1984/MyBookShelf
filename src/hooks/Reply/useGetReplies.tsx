import { useState } from "react";

export interface Reply {
    _id: string;
    respondingToReference: string;
    userId: string;
    content: string;
    createdAt: string;
}

export default function useGetReplies() {
    const [replies, setReplies] = useState<Reply[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const getReplies = async (respondingToReference: string) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(`http://localhost:8080/getReplys/${respondingToReference}`);

            if (!response.ok) {
                throw new Error("Falha ao carregar as respostas.");
            }

            const data = await response.json();
            setReplies(data.replies);
            return data.replies;
        } catch (err: any) {
            setError(err.message);
            throw err;
        } finally {
            setIsLoading(false);
        }
    };

    return { replies, getReplies, isLoading, error };
}