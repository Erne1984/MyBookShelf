import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContextUser";

export default function useProfile() {
    const token  = useContext(AuthContext)?.token;
    const [profile, setProfile] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProfile = async () => {
            if (!token) {
                setError('Não autenticado');
                setLoading(false);
                return;
            }

            try {
                const response = await fetch('http://localhost:8080/profile', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error('Erro ao buscar perfil');
                }

                const data = await response.json(); 
                setProfile(data); 
            } catch (err) {
                setError('Erro ao buscar perfil');
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, [token]);  

    return { profile, loading, error };
}