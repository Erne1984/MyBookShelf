import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContextUser";

export default function useAddUserBookStatus() {
    const token = useContext(AuthContext)?.token;
    const [error, setError] = useState<string | null>(null);

    const addUserBookStatus = async (bookId: string, userId: string, status: string) => {
        if (!token) return;

        try {
            if (!userId || !bookId) {
                setError("User ID ou Book ID inválido");
                return;
            }

            const response = await fetch(`http://localhost:8080/addUserBookStatus`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ bookId, userId, status }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Erro ao adicionar o status do livro");
            }
            
            window.location.reload();

        } catch (error: any) {
            setError(error.message || "Erro ao adicionar o status do livro");
        }
    };

    if (error) {
        alert(error);
    }

    return addUserBookStatus;
}