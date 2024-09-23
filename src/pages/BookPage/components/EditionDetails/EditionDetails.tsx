import style from "./EditionDetails.module.css";

interface EditionDetailsProps {
    bookFormat: string | undefined,
    bookIsbn: string,
    bookLanguage: string | undefined,
    bookPublishDate: string,
    bookPublisher: string,
}


export default function EditionDetails(props: EditionDetailsProps) {

    return (
        <div className={style.container}>
            <h2>Sobre a Edição</h2>

            <dl className={style["info-row"]}>


                <div className={style["data-row"]}>
                    <dt className={style[""]}>Formato:</dt>
                    <dd className={style[""]}>{props.bookFormat ? props.bookFormat : "Paperback"}</dd>
                </div>

                <div className={style["data-row"]}>
                    <dt className={style[""]}>Publicação:</dt>
                    <dd className={style[""]}>{props.bookPublishDate}</dd>
                </div>

                <div className={style["data-row"]}>
                    <dt className={style[""]}>Editora:</dt>
                    <dd className={style[""]}>{props.bookPublisher}</dd>
                </div>

                <div className={style["data-row"]}>
                    <dt className={style[""]}>ISBN:</dt>
                    <dd className={style[""]}>{props.bookIsbn}</dd>
                </div>

                {/* 
                <div className={style["data-row"]}>
                    <dt className={style[""]}>Língua:</dt>
                    <dd className={style[""]}>{props.bookLanguage}</dd>
                </div>

                */}
            </dl>
        </div>
    )
}