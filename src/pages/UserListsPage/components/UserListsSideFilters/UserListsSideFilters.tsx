import style from "./UserListsSideFilters.module.css";

export default function UserListsSideFilters() {

    return(
        <aside className={style["side-filters-container"]}>

            <h4 className={style["title-section"]}>Listas</h4>
            <ul className={style["user-lists"]}>
                <li>Todos</li>
                <li>Lido</li>
                <li>Lendo</li>

                <button className={style["button-add-list"]}>Adicionar</button>
            </ul>

            <h4 className={style["title-section"]}>Buscar Livros</h4>
            <ul className={style["user-lists"]}>
                <li>Recomendações</li>
                <li>Explorar</li>
            </ul>

        </aside>
    )
}