import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./UserListsSearchBar.module.css";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";



export default function UserListsSearchBar() {

    return (
        <div className={style['search-box']}>
            <input
                type='text'
                placeholder='Buscar Livros'
                className={style['search-input']}
            />
            <FontAwesomeIcon className={style['search-icon']} icon={faMagnifyingGlass} />
        </div>
    )
}