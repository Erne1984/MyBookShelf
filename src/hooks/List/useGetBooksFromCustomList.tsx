import { useEffect, useState } from "react";
import Book from "../../interfaces/Book";


export default function useGetBooksFromCustomList(userId: string, listId: string) {
    const [booksCustomList, setBooksCustomList] = useState<Book[]>();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
        if (!userId) return;

        const fetchUserLists = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(`http://localhost:8080/getBooksFromCustomList?userId=${userId}&listId=${listId}`);
                
                if (!response.ok) {
                    throw new Error("Failed to fetch user books");
                }

                const data = await response.json();
                setBooksCustomList(data);
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        };

        fetchUserLists();
    }, [userId, listId]);

    return { booksCustomList, loading, error };
}