

export default async function CreateUser(username: string | undefined, email: string, password: string) {
    try {
        const response = await fetch("http://localhost:8080/createUser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email, password })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Erro ao criar usuário');
        }

        window.location.href = '/login';

    } catch (error: any) {
        console.error('Erro:', error);
        alert(`Falha ao cadastrar usuário: ${error.message || 'Verifique suas credenciais e tente novamente.'}`);
    }
}
