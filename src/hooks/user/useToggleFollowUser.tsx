export default async function useToggleFollowUser(userId: string, targetUserId: string) {

    try {
        console.log(`TargedId: ${targetUserId} idLogged: ${userId}`)
        const response = await fetch("http://localhost:8080/toggleFollowUser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ userId, targetUserId }),
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || "Erro ao processar a requisição.");
        }

        const data = await response.json();
        console.log(data.message);
        return data;
    } catch (error) {
        console.error("Erro ao alternar seguir/deixar de seguir:", error);
        throw error;
    }
}