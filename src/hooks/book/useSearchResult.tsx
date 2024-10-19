import { useEffect, useState } from "react";

export default function useSearchResult(searchQuery: string | undefined) {
    const [data, setData] = useState<any | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(`http://localhost:8080/queryBook?query=${searchQuery}`);

                if (!response.ok) {
                    throw new Error("Erro na requisição ao servidor");
                }

                const result = await response.json();

                console.log(result)
                setData(result);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("An unknown error occurred");
                }
            } finally {
                setLoading(false);
            }
        }


        fetchData();
    }, [searchQuery]);

    return { data, loading, error };
}