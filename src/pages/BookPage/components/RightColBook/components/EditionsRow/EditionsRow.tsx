import style from "./EditionsRow.module.css";

import { Edition } from "../../../../../../interfaces/Book";

interface EditionRowProps {
    editionsBook: Edition[] | undefined,
}


export default function EditionsRow(props: EditionRowProps) {

    if (!props.editionsBook) return <div></div>

    return (
        <div className={style.container}>

            <div className={style["box-title"]}>
                <h2>Outras Edições</h2>
                <p>Ver Mais</p>
            </div>

            <div className={style["editions-row"]}>
                {
                    props.editionsBook.map((edition) => {
                        return (
                            <div className={style["edition-box"]} key={edition.cover + edition.title}>
                                <img src={edition.cover}></img>
                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}