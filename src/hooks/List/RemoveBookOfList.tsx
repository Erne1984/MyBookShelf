export default async function RemoveBookOfList(userId: string, bookId: string, listId: string) {
    try {
        const response = await fetch("http://localhost:8080/removeBookOfList", {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userId, bookId, listId })
        })

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Erro ao excluir livro da lista');
        }

        window.location.reload()
    } catch (error: any) {
        console.error('Erro:', error);
        alert(`Falha ao excluir livro da lista: ${error.message || 'Recaregue a página e tente novamente'}`);
    }
}