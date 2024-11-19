import { useState, useContext } from "react";
import style from "./Comment.module.css";
import RantingStars from "../../../../../../common/RantingStars/RatingStars";
import DropdownMenuCommentUser from "./components/DropdownMenuCommentUser/DropdownMenuCommentUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faThumbsUp, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../../../../../context/AuthContextUser";
import useGiveReviewALike from "../../../../../../hooks/review/useGiveReviewALike";
import { Link } from "react-router-dom";

interface CommentProps {
    userIdComment: string | null,
    username: string;
    reviewId: string;
    userImg: string | null;
    score: number;
    content: string;
    createdAt: string;
}

export default function Comment({ userIdComment, username, reviewId, userImg, score, content, createdAt }: CommentProps) {
    const userId = useContext(AuthContext)?.userId;
    const { toggleLike, loading, error } = useGiveReviewALike();
    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);

    const handleLikeClick = async () => {
        if (!userId) {
            console.error("Usuário não autenticado.");
            return;
        }

        try {
            const data = await toggleLike(userId, reviewId);
            setLiked(data.liked);
            setLikes(data.totalLikes);
        } catch (err) {
            console.error("Erro ao curtir a review:", err);
        }
    };

    return (
        <article className={style["comment-box"]}>
            <div className={style["user-box"]}>
                {userImg ? (
                    <img
                        src={userImg}
                        className={style["user-avatar"]}
                        alt={`${username}'s avatar`}
                    />
                ) : (
                    <FontAwesomeIcon className={style["user-avatar"]} icon={faCircleUser} />
                )}
                <Link to={`/userVisiting/${userIdComment}`}>
                    <small className={style["username"]}>{username}</small>
                </Link>
            </div>

            <section className={style["review-box"]}>
                <div className={style["rating-date-box"]}>
                    <RantingStars score={score} editable={false} />
                    <time dateTime={createdAt}>{new Date(createdAt).toLocaleDateString()}</time>
                </div>

                <p className={style["review-content"]}>{content}</p>

                <div className={style["likes-responses"]}>
                    <div className={style["likes"]}>
                        <small>{likes} likes</small>
                    </div>
                    <small>•</small>
                    <div className={style["replys"]}>
                        <small>100 replies</small>
                    </div>
                </div>

                <div className={style["options-row"]}>
                    <div
                        className={`${style["icon-box"]} ${liked ? style["liked"] : ""}`}
                        aria-label="Like"
                        onClick={handleLikeClick}
                        style={{ pointerEvents: loading ? "none" : "auto" }}
                    >
                        <FontAwesomeIcon icon={faThumbsUp} />
                        <span>{liked ? "Descurtir" : "Curtir"}</span>
                    </div>

                    <div className={style["icon-box"]} aria-label="Comment">
                        <FontAwesomeIcon icon={faComment} />
                        <span>Comentar</span>
                    </div>

                    <DropdownMenuCommentUser />
                </div>

                {error && <p className={style["error"]}>{error}</p>}
            </section>
        </article>
    );
}