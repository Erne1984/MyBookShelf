import { useState, useEffect } from "react";
import Book from "../../interfaces/Book";

export default function useGetAllBooksUser(userId: string | undefined) {
    const [userBooks, setUserBooks] = useState<Book[]>();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        if (!userId) return;

        const fetchUserLists = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(`http://localhost:8080/getAllBooksUser?userId=${userId}`);
                
                if (!response.ok) {
                    throw new Error("Failed to fetch user books");
                }

                const data = await response.json();
                setUserBooks(data);
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        };

        fetchUserLists();
    }, [userId]);

    return { userBooks, loading, error };
}