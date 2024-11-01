export default async function useAddBookList(userId: string, bookId: string, listId: string) {
    try {
        const response = await fetch("http://localhost:8080/addBookToList", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userId, bookId, listId })
        })

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Erro ao adicionar livro na lista');
        }

        window.location.reload()
    } catch (error: any) {
        console.error('Erro:', error);
        alert(`Falha ao adicionar livro na lista: ${error.message || 'Recaregue a página e tente novamente'}`);
    }
}