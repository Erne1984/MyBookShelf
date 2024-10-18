import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/AuthContextUser';
import { User } from '../../interfaces/Book';


export default function getUserProfile() {
    const token  = useContext(AuthContext)?.token;
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!token) {
            setLoading(false);
            return;
        }

        const fetchUserData = async () => {
            try {
                const response = await fetch('http://localhost:8080/profile', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

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
    }, [token]);

    return { user, loading, error };

}