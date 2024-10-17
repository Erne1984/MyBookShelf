import style from "./Comment.module.css";
import RantingStars from "../../../../../../common/RantingStars/RatingStars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faEllipsis, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

export default function Comment() {
    return (
        <article className={style["comment-box"]}>

            <div className={style["user-box"]}>
                <img
                    src="https://www.hollywoodreporter.com/wp-content/uploads/2011/06/drive_primary.jpg?w=1440&h=810&crop=1"
                    className={style["user-avatar"]}
                    alt="User avatar"
                />
                <small className="username">UserName</small>
            </div>

            <section className={style["review-box"]}>

                <div className={style["rating-date-box"]}>
                    <RantingStars score={3} editable={false} />
                    <time dateTime="2020-08-28">August 28, 2020</time>
                </div>

                <p className={style["review-content"]}>
                    Popular Culture: An Alphabetical Contempt. a) Let’s not mince words. All populist entertainment is repulsive, useless, dangerous and witheringly anti-intellectual. b) Except maybe Doctor Who. But that’s hardly Beckett, is it? c) I first became an intellectual snob in my late teens. I witnessed first hand the slow declension of burgeoning intellects through a routine of television, video games and a fear of reading books.
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