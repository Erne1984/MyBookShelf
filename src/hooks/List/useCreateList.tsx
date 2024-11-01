

export default async function useCreateList(userId: string, bookId: string, listname: string, isPublic: boolean) {
    try {
        const response = await fetch("http://localhost:8080/createList", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userId, bookId, listname, isPublic })
        })

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Erro ao criar lista');
        }

        window.location.reload()

    } catch (error: any) {
        console.error('Erro:', error);
        alert(`Falha ao cadastrar usuário: ${error.message || 'Verifique suas credenciais e tente novamente.'}`);
    }
} 