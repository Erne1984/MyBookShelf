import style from "./UserListsBook.module.css";

import GridView from "../../../../common/GridView/GridView";
import ListView from "../../../../common/ListView/ListView";
import Pagination from "../../../../common/Pagination/Pagination";
import { useState } from "react";
import Book from "../../../../interfaces/Book";

interface UserListsBooksProps {
    books: Book[];
}

export default function UserListsBooks(props: UserListsBooksProps) {
    const [viewMode, setViewMode] = useState<string>("grid");

    return (
        <>

            <div className={style["container"]}>
                {
                    viewMode == "grid"
                        ? <GridView books={props.books} />
                        : <ListView books={props.books} />
                }
            </div>

        </>
    )
}