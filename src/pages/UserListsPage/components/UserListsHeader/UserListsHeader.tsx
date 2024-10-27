import UserListsSearchBar from './components/UserListsSearchBar';
import style from './UserListsHeader.module.css';

export default function UserListsHeader() {

    return(
        <div className={style["user-lists-header-container"]}>
            <h1>Meus livros</h1>

            <UserListsSearchBar/>
        </div>
    )
}