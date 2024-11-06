import style from "./UserListsBookDisplay.module.css";
import GridView from "../../../../common/GridView/GridView";
import ListView from "../../../../common/ListView/ListView";
import { useState } from "react";
import Book from "../../../../interfaces/Book";

interface UserListsBooksProps {
    books: Book[];
}

export default function UserListsBooksDisplay(props: UserListsBooksProps) {
    const [viewMode, setViewMode] = useState<string>("grid");

    return (
        <>
            <div className={style["container"]}>
                {props.books && props.books.length > 0 ? (
                    viewMode === "grid" ? (
                        <GridView books={props.books} />
                    ) : (
                        <ListView books={props.books} />
                    )
                ) : (
                    <p>Nenhum livro adicionado</p>
                )}
            </div>
        </>
    );
}