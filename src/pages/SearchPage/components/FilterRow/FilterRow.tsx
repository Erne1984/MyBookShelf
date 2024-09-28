import style from "./FilterRow.module.css";

import FilterItem from "./components/FilterItem/FilterItem";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

export default function FilterRow() {

    return (
        <div className={style.container}>

            <div className={style["filters-box"]}>

                <div className={style["filters-label"]}>
                    <FontAwesomeIcon icon={faFilter} />

                    <div>Filtros: </div>
                </div>

                <FilterItem />
            </div>

            <div className={style["clean-filters"]}>
                Limpar Filtros
            </div>

        </div>
    )
}