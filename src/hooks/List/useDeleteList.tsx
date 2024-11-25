import { useState } from "react";

export default function useDeleteList() {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const deleteList = async (listId: string, userId: string): Promise<void> => {
        setLoading(true);
        setError(null);
        setSuccessMessage(null);

        try {
            const response = await fetch("http://localhost:8080/deleteList", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ listId, userId }),
            });


            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Erro ao deletar listas');
            }

            window.location.reload();
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return {
        deleteList,
        loading,
        error,
        successMessage,
    };
}