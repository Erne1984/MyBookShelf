import style from "./FiltersComment.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

interface FiltersCommentProps {
    activeFilter: string | null;
    onFilterChange: (filter: string | null) => void;
}

export default function FiltersComment({ activeFilter, onFilterChange }: FiltersCommentProps) {
    const [dropdownMenu, setDropdownMenu] = useState<boolean>(false);

    function handleClick() {
        setDropdownMenu(prevState => !prevState);
    }

    function handleFilterClick(filter: string) {
        if (activeFilter === filter) return;
        onFilterChange(filter);
    }

    function handleClearFilter() {
        onFilterChange(null);
    }

    return (
        <div className={style["filters-comment-box"]}>
            <button className={style["filters-button"]} onClick={handleClick}>
                <FontAwesomeIcon icon={faFilter} />
                Filtros
            </button>

            <div className={`${style["dropdown-menu"]} ${dropdownMenu ? style.active : style.none}`}>
                {/* Opção "Sem Filtros" */}
                <div
                    className={`${style["menu-item"]} ${activeFilter === null ? style.active : ""}`}
                    onClick={handleClearFilter}
                >
                    <li>Sem Filtros</li>
                </div>

                {/* Opções de filtro */}
                <div
                    className={`${style["menu-item"]} ${activeFilter === "positivo" ? style.active : ""}`}
                    onClick={() => handleFilterClick("positivo")}
                >
                    <li>positivo</li>
                </div>
                <div
                    className={`${style["menu-item"]} ${activeFilter === "negativo" ? style.active : ""}`}
                    onClick={() => handleFilterClick("negativo")}
                >
                    <li>negativo</li>
                </div>
                <div
                    className={`${style["menu-item"]} ${activeFilter === "neutro" ? style.active : ""}`}
                    onClick={() => handleFilterClick("neutro")}
                >
                    <li>neutro</li>
                </div>
            </div>
        </div>
    );
}
