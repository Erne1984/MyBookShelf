import style from "./Comment.module.css";
import RantingStars from "../../../../../../common/RantingStars/RatingStars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faEllipsis, faThumbsUp, faCircleUser } from "@fortawesome/free-solid-svg-icons";

interface CommentProps {
    username: string;
    userImg: string | null;
    score: number;
    content: string;
    createdAt: string;
}

export default function Comment({ username, userImg, score, content, createdAt }: CommentProps) {
    return (
        <article className={style["comment-box"]}>
            <div className={style["user-box"]}>
                {userImg ?
                    <img
                        src={userImg}
                        className={style["user-avatar"]}
                        alt={`${username}'s avatar`}
                    />
                    :
                    <FontAwesomeIcon className={style["user-avatar"]} icon={faCircleUser} />
                }

                <small className={style["username"]}>{username}</small>
            </div>

            <section className={style["review-box"]}>
                <div className={style["rating-date-box"]}>
                    <RantingStars score={score} editable={false} />
                    <time dateTime={createdAt}>{new Date(createdAt).toLocaleDateString()}</time>
                </div>

                <p className={style["review-content"]}>
                    {content}
                </p>

                <div className={style["likes-responses"]}>
                    <div className={style["likes"]}>
                        <small>1983 likes</small>
                    </div>
                    <small>•</small>
                    <div className={style["replys"]}>
                        <small>100 replies</small>
                    </div>
                </div>

                <div className={style["options-row"]}>
                    <div className={style["icon-box"]} aria-label="Like">
                        <FontAwesomeIcon icon={faThumbsUp} />
                        <span>Curtir</span>
                    </div>

                    <div className={style["icon-box"]} aria-label="Comment">
                        <FontAwesomeIcon icon={faComment} />
                        <span>Comentar</span>
                    </div>

                    <div className={style["other-options"]} aria-label="More options">
                        <FontAwesomeIcon icon={faEllipsis} />
                    </div>
                </div>
            </section>
        </article>
    );
}
