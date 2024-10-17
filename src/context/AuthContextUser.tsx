import React, { createContext, useState, ReactNode, useEffect } from 'react';
import isTokenValid from '../utils/isTokenValid';

interface AuthContextType {
    token: string | null;
    isAuthenticated: boolean;
    userId: string | null;
    isModerator: boolean| null;
    login: (token: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
    const [userId, setUserId] = useState<string | null>(null);
    const [isModerator, setIsModerator] = useState<boolean>(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserId = async () => {
            if (token && isTokenValid(token)) {
                try {
                    const response = await fetch('http://localhost:8080/user/id', {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });

                    if (response.ok) {
                        const data = await response.json();
                        setUserId(data.userId);
                        setIsModerator(data.isModerator);
                    }
                } catch (error) {
                    console.error("Erro ao buscar o ID do usuário:", error);
                } finally {
                    setLoading(false);
                }
            } else {
                logout();
            }
        };

        if (token) {
            fetchUserId();
            console.log(token)
        }
    }, [token]);

    const login = (newToken: string) => {
        localStorage.setItem('token', newToken);
        setToken(newToken);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
        setUserId(null);
        setIsModerator(false);
    };

    return (
        <AuthContext.Provider value={{ token, isAuthenticated: !!token, userId, isModerator, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };