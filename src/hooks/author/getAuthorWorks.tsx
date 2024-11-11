import { useEffect, useState } from "react";
import Book from "../../interfaces/Book";

export default function getAuthorWorks(authorId: string) {
    const [data, setData] = useState<Book[]>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`http://localhost:8080/getAuthorWorks?authorId=${authorId}`);

                if (!response.ok) {
                    throw new Error('Erro na resposta do servidor: ' + response.statusText);
                }

                const data = await response.json();

                setData(data);
            } catch (err: any) {
                setError(err.message || 'Erro ao buscar o autor');
            } finally {
                setLoading(false);
            }
        }

        if (authorId) {
            fetchData();
        } 
    }, [authorId, data]);

    return { data, loading, error };
}