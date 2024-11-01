

export default async function useDeleteBookFromShelfs(userId: string, bookId: string) {
    try {
        const response = await fetch("http://localhost:8080/deleteBookFromShelfs", {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userId, bookId })
        })

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Erro ao deletar listas');
        }

        window.location.reload();

    } catch (error: any) {
        console.error('Erro:', error);
        alert(`Falha ao deletar listas: ${error.message || 'Verifique sua conexão e tente novamente.'}`);
    }
}