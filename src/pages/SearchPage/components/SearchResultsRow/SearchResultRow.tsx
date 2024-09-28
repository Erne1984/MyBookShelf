import style from "./SearchResultRow.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faTableCells } from "@fortawesome/free-solid-svg-icons";


export default function SearchResultRow() {

    return (
        <div className={style["container"]}>

            <div className={style["result-count"]}>
                Página 1 de 500 resultados
            </div>

            <div className={style["view-toggle"]}>

                <div>
                    Visualizar:
                </div>


                <div className={style["icons"]}>

                    <FontAwesomeIcon className={style["icon"]} icon={faTableCells} />

                    <FontAwesomeIcon className={style["icon"]} icon={faList} />
                </div>

            </div>


        </div>
    )
}