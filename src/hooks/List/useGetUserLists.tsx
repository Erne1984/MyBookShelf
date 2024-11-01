import { useEffect, useState } from "react";

export default function useGetUserLists(userId: string) {
    const [userLists, setUserLists] = useState<[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!userId) return;

        const fetchUserLists = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(`http://localhost:8080/getUserLists?userId=${userId}`);
                
                if (!response.ok) {
                    throw new Error("Failed to fetch user lists");
                }

                const data = await response.json();
                setUserLists(data);
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        };

        fetchUserLists();
    }, [userId]);

    return { userLists, loading, error };
}