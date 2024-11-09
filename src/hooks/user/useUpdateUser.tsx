import { useState } from "react";

export default function useUpdateUser() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState(null);

    const updateUser = async (userId: string, updatedData: object) => {
        setLoading(true);
        try {
            const response = await fetch(`http://localhost:8080/updateUser/${userId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedData),
            });

            if (!response.ok) {
                const errorMessage = await response.text();
                console.log(errorMessage)
                throw new Error("Erro ao atualizar o usuário.");
            }

            const data = await response.json();
            setData(data);
        } catch (err) {
            setError("Erro ao atualizar o usuário.");
        } finally {
            setLoading(false);
        }
    };

    return { updateUser, loading, error, data };
}