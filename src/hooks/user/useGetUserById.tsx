import { useEffect, useState } from "react";
import { User } from "../../interfaces/Book";


export default function useGetUserById(userId: string) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!userId) {
            setLoading(false);
            setUser(null);
            return;
        }

        const fetchUserData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/getUserById?userid=${userId}`);
                if (!response.ok) {
                    throw new Error('Erro ao buscar dados do usuário');
                }

                const data = await response.json();
                setUser(data);
            } catch (error) {
                setError('Erro ao buscar perfil');
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [userId]);

    return { user, loading, error };
}