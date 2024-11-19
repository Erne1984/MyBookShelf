import style from "./SearchingForTabs.module.css";

interface SearchingForTabsProps {
    currentType: "Books" | "Authors" | "Users";
    onTypeChange: (type: "Books" | "Authors" | "Users") => void;
}

export default function SearchingForTabs({ currentType, onTypeChange }: SearchingForTabsProps) {
    return (
        <ul className={style["search-tabs"]}>
            <li
                className={currentType === "Books" ? style.active : ""}
                onClick={() => onTypeChange("Books")}
            >
                Livros
            </li>
            <li
                className={currentType === "Authors" ? style.active : ""}
                onClick={() => onTypeChange("Authors")}
            >
                Autores
            </li>
            {
                /*  Implementar o Controller do SearchUsers depois
                    <li 
                className={currentType === "Users" ? style.active : ""} 
                onClick={() => onTypeChange("Users")}
            >
                Usuários
            </li>
                */
            }
        </ul>
    );
}
