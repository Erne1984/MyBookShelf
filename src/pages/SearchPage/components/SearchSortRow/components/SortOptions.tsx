import style from "./SortOptions.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function SortOptions() {

    return (
        <div className={style["sortContainer"]}>

            <div className={style["sortLabel"]}>
                Ordenar Por
            </div>

            <div className={style["sortType"]}>
                <div>Popular </div>

                <FontAwesomeIcon className={style["icon"]} icon={faChevronDown} />
            </div>

        </div>
    )
}