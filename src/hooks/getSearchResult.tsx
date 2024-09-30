import { useEffect, useState } from "react"
import Book from "../interfaces/Book";


export default function getSearchResult(searchQuery: string) {
    const [data, setData] = useState<Book[] | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchData() {

            try {
                const response = await fetch(`http://localhost:8080/getBooks?query=${searchQuery}`);

                if (!response.ok) {
                    throw new Error("Erro na requisição ao servidor")
                }

                const result = await response.json();

                setData(result);

            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('An unknown error occurred');
                }
            } finally {
                setLoading(false);
            }
        }

        fetchData()
    }, [])

    return { data, loading, error };
}