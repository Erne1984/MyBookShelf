import style from "./Reply.module.css";
import Comment from "../../../../../ReviewsSection/components/Comment/Comment";
import { ReplyInteface } from "../../../../../../../../interfaces/Book";
import { useState, useContext } from "react";
import useAddReply from "../../../../../../../../hooks/Reply/useAddReply";
import { AuthContext } from "../../../../../../../../context/AuthContextUser";

interface ReplieInterface {
    replies: ReplyInteface[];
    reviewId: string; // Para enviar a resposta para o review correto
}

export default function Reply({ replies, reviewId }: ReplieInterface) {
    const { addReply, isLoading, error } = useAddReply(); // Consome o hook para adicionar resposta
    const [replyContent, setReplyContent] = useState(""); // Controla o conteúdo do input
    const [localError, setLocalError] = useState<string | null>(null); // Erro local do input
    const userId = useContext(AuthContext)?.userId

    const handleAddReply = async () => {
        if (!replyContent.trim()) {
            setLocalError("O conteúdo da resposta não pode estar vazio.");
            return;
        }

        try {
            await addReply(reviewId, userId, replyContent);
            setReplyContent(""); // Limpa o input após sucesso
        } catch (err) {
            setLocalError("Falha ao adicionar a resposta.");
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setReplyContent(e.target.value);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleAddReply();
        }
    };

    return (
        <div className={style["container-replies"]}>
            {replies &&
                replies.map((reply) => (
                    <Comment
                        key={reply._id}
                        content={reply.content}
                        createdAt={reply.createdAt}
                        reviewId={reply.respondingToReference}
                        score={0} // Ajustar se houver sistema de pontuação para respostas
                        username={reply.username}
                        userIdComment={reply._id}
                        userImg={reply.imgUserUrl}
                    />
                ))}

            {/* Exibe erro se houver */}
            {localError && <p className={style.error}>{localError}</p>}

            {/* Input para nova resposta */}
            <input
                type="text"
                value={replyContent}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                placeholder="Escreva aqui..."
                className={style["reply-input"]}
            />

            {/* Botão de envio */}
            <button
                onClick={handleAddReply}
                disabled={isLoading || !replyContent.trim()}
                className={style["submit-button"]}
            >
                {isLoading ? "Enviando..." : "Responder"}
            </button>

            {/* Exibe erro global se houver */}
            {error && <p className={style.error}>{error}</p>}
        </div>
    );
}
