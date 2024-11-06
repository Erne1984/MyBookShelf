import { useState, useEffect } from "react";
import { List } from "../../interfaces/Book";

export default function useGetCustomListsUser(userId: string | undefined) {
    const [userCustomLists, setUserCustomLists] = useState<List[]>();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        if (!userId) return;

        const fetchUserLists = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(`http://localhost:8080/getCustomListsUser?userId=${userId}`);
                
                if (!response.ok) {
                    throw new Error("Failed to fetch user books");
                }

                const data = await response.json();
                setUserCustomLists(data);
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        };

        fetchUserLists();
    }, [userId]);

    return { userCustomLists, loading, error };
}