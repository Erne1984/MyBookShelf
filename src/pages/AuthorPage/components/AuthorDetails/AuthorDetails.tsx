import style from "./AuthorDetails.module.css";

interface AuthorDetailsProps {
    authorBirth: string | undefined;
    authorDeathDate: string | undefined;
}

export default function AuthorDetails(props: AuthorDetailsProps) {

    return (
        <div className={style["container"]}>
            {/*}
            <div className={style["info-row"]}>
                <dt className={style[""]}>Nascimento:</dt>
                <dd className={style[""]}>{ props.authorBirth }</dd>
            </div>

            <div className={style["info-row"]}>
                <dt className={style[""]}>Falecimento:</dt>
                <dd className={style[""]}>{ props.authorDeathDate }</dd>
            </div>

            {*/}

        </div>
    )
}