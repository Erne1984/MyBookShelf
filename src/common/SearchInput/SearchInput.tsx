import style from "./SearchInput.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SearchInput() {

    return (
        <div className={style['search-box']}>

            <FontAwesomeIcon className={style['search-icon']} icon={faMagnifyingGlass} />

            <input type='text' placeholder='Buscar Livros' className={style['search-input']}></input>

        </div>
    )
}