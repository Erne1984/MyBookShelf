import style from "./FiltersComment.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

export default function FiltersComment() {

    return (
        <button className={style["filters-comment-box"]}>

            <FontAwesomeIcon icon={faFilter} />

            Filtros
            
        </button>
    )
}