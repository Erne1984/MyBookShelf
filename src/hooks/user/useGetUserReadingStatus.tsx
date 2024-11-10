import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContextUser";

export default function useGetUserReadingStatus(bookId: string, userId: string | null) {
    const token = useContext(AuthContext)?.token;
    const [data, setData] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!token) {
            setLoading(false);
            return;
        }

        const fetchUserData = async () => {
            try {
                if (!userId || !bookId) {
                    setLoading(false);
                    setError("User ID ou Book ID inválido");
                    return;
                }
                const response = await fetch(`http://localhost:8080/getUserReadingStatus?bookId=${bookId}&userId=${userId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error('Erro ao obter dados do status');
                }

                const data = await response.json();
                setData(data);
            } catch (error) {
                setError('Erro ao obter dados do status');
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [token]);

    return { data, loading, error };
}