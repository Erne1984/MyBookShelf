import style from "./AuthorsRow.module.css";

import WriteIcon from "/assets/writer.png"

interface AuthorRowProps {
    authorId: string,
    authorImg: string,
    authorName: string,
    followersNumber: number,
    worksNumber: number
}

export default function AuthorRow(props: AuthorRowProps) {

    return (
        <div className={style["container-author-row"]}>

            <div>
                <div className={style["author-photo-box"]}>
                    <img src={props.authorImg ? props.authorImg : WriteIcon}></img>
                </div>

                <div className={style["author-info"]}>
                    <h3>{props.authorName}</h3>
                    <small>{props.followersNumber}</small>
                    <small>{props.worksNumber}</small>
                </div>
            </div>

            <div className={style["btn-actions"]}>

            </div>

        </div>
    )
}