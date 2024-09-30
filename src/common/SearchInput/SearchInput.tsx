import style from "./SearchInput.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

interface SearchInputProps {
    handleSearch: () => void | null;
}

export default function SearchInput( props: SearchInputProps) {

    return (
        <div className={style['search-box']}>

            <FontAwesomeIcon className={style['search-icon']} icon={faMagnifyingGlass} />

            <input type='text' placeholder='Buscar Livros' className={style['search-input']} onKeyDown={props.handleSearch}></input>

        </div>
    )
}