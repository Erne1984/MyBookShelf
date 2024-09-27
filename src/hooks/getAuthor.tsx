import { useEffect, useState } from "react";
import { Author } from "../interfaces/Book";

export default function getAuthor(authorKey: string | undefined) {
    const [data, setData] = useState<Author>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchAuthorData() {
            try {
                console.log(authorKey)
                const response = await fetch(`http://localhost:8080/getAuthor?authorKey=${authorKey}`);

                if (!response.ok) {
                    throw new Error('Erro na resposta do servidor: ' + response.statusText);
                }

                const data = await response.json();

                setData(data);
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

        if (authorKey) {
            fetchAuthorData();
        }
    }, [authorKey])

    return { data, loading, error }
}