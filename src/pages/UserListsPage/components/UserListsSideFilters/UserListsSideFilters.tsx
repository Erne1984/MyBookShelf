import { List } from "../../../../interfaces/Book";
import style from "./UserListsSideFilters.module.css";

interface UserListsSideFiltersProps {
    currentFilter: string;
    setFilter: (filter: string) => void;
    customLists: List[] | undefined;
}

export default function UserListsSideFilters({ currentFilter, setFilter, customLists }: UserListsSideFiltersProps) {
    return (
        <aside className={style["side-filters-container"]}>
            <h4 className={style["title-section"]}>Listas</h4>
            <ul className={style["user-lists"]}>
                <li
                    className={`${style["list-item"]} ${currentFilter === "todos" ? style["actived"] : ""}`}
                    onClick={() => setFilter("todos")}
                >
                    Todos
                </li>
                <li
                    className={`${style["list-item"]} ${currentFilter === "lido" ? style["actived"] : ""}`}
                    onClick={() => setFilter("lido")}
                >
                    Lido
                </li>
                <li
                    className={`${style["list-item"]} ${currentFilter === "lendo" ? style["actived"] : ""}`}
                    onClick={() => setFilter("lendo")}
                >
                    Lendo
                </li>
                <li
                    className={`${style["list-item"]} ${currentFilter === "quero ler" ? style["actived"] : ""}`}
                    onClick={() => setFilter("quero ler")}
                >
                    Quero Ler
                </li>
                {customLists && customLists.map(list => (
                    <li
                        key={list._id}
                        className={`${style["list-item"]} ${currentFilter === list.name ? style["actived"] : ""}`}
                        onClick={() => setFilter(list.name)}
                    >
                        {list.name}
                    </li>
                ))}
                <button className={style["button-add-list"]}>Adicionar</button>
            </ul>

            <h4 className={style["title-section"]}>Buscar Livros</h4>
            <ul className={style["user-lists"]}>
                <li>Recomendações</li>
                <li>Explorar</li>
            </ul>
        </aside>
    );
}