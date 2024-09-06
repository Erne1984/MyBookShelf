import { jwtDecode } from "jwt-decode";

export default function isTokenValid(token: string | null): boolean {
    if (!token) return false;

    try {
        const decodedToken: any = jwtDecode(token); 
        const currentTime = Date.now() / 1000; 
        return decodedToken.exp > currentTime;  
    } catch (error) {
        console.error("Erro ao decodificar token:", error);
        return false;
    }
};
