import style from "./EditionsRow.module.css";

import { Edition } from "../../../../../../interfaces/Book";
import { useEffect } from "react";

interface EditionRowProps {
    editionsBook: Edition[] | undefined,
}

export default function EditionsRow(props: EditionRowProps) {

    if (!props.editionsBook) return (<></>)

    useEffect(() => {
        console.log(props.editionsBook)
    }, [])

    const editionsToShow = props.editionsBook.slice(0, 4);

    if (!props.editionsBook) return <div></div>

    return (
        <div className={style.container}>

            <div className={style["box-title"]}>
                <h2>Outras Edições</h2>
                <p>Ver Mais</p>
            </div>

            <div className={style["editions-row"]}>
                {
                    editionsToShow.map((edition) => {
                        return (
                            <div className={style["edition-box"]} key={edition.coverUrl + edition.title}>
                                <img src={edition.coverUrl}></img>
                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}