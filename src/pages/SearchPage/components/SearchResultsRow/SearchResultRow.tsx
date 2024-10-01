import style from "./SearchResultRow.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faTableCells } from "@fortawesome/free-solid-svg-icons";
import { Dispatch, SetStateAction } from "react";

interface SearchResultRowProps {
    numberResults: number,
    viewMode: string,
    setViewMode: Dispatch<SetStateAction<string>>,
}

export default function SearchResultRow(props: SearchResultRowProps) {

    const toggleView = (mode: string) => {
        props.setViewMode(mode);
    }

    return (
        <div className={style["container"]}>
            <div className={style["result-count"]}>
                Página 1 de {props.numberResults} resultados
            </div>

            <div className={style["view-toggle"]}>
                <div>Visualizar:</div>

                <div className={style["icons"]}>
                    <FontAwesomeIcon
                        className={[style["icon"], props.viewMode === "grid" ? style["selected"] : ""].join(" ")}
                        icon={faTableCells}
                        onClick={() => toggleView("grid")}
                    />

                    <FontAwesomeIcon
                        className={[style["icon"], props.viewMode === "list" ? style["selected"] : ""].join(" ")}
                        icon={faList}
                        onClick={() => toggleView("list")}
                    />
                </div>
            </div>
        </div>
    );
}
