
export default async function loginUser(email: string, password: string) {
    try {
        const response = await fetch("http://localhost:8080/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })

        if (!response.ok) {
            throw new Error('Erro ao realizar login');
        }

        const data = await response.json();

        localStorage.setItem('token', data.token);

        window.location.href = '/';

    } catch (error) {
        console.error('Erro:', error);
        alert('Falha ao realizar login. Verifique suas credenciais e tente novamente.');
    }
}