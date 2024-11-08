import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContextUser";

export default function useUploadUserImg() {
    const token  = useContext(AuthContext)?.token;
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [imageUrl, setImageUrl] = useState<string | null>(null);

    const uploadUserImg = async (file: File) => {
        setUploading(true);
        setError(null);
        setImageUrl(null);

        const formData = new FormData();
        formData.append("image", file);

        try {
            const response = await fetch("http://localhost:8080/uploadImage", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                body: formData,
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Erro ao enviar a imagem");
            }

            const data = await response.json();
            setImageUrl(data.imageUrl);
            window.location.reload()
            return data.imageUrl;
        } catch (error: any) {
            setError(error.message || "Erro ao enviar a imagem");
            console.error("Erro ao fazer upload da imagem:", error);
        } finally {
            setUploading(false);
        }
    };

    return { uploadUserImg, uploading, error, imageUrl };
}