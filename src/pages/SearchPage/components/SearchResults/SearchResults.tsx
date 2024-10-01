import style from "./SearchResults.module.css";
import Book from "../../../../interfaces/Book";
import SearchResultRow from "../SearchResultsRow/SearchResultRow";
import { useState } from "react";

import GridView from "./components/GridView/GridView";
import ListView from "./components/ListView/ListView";

interface SearchResultsProps {
    books: Book[]
}

export default function SearchResults(props: SearchResultsProps) {
    const [viewMode, setViewMode] = useState<string>("grid");

    return (
        <>
            <SearchResultRow numberResults={props.books.length} viewMode={viewMode} setViewMode={setViewMode} />

            <div className={style["container"]}>
                
                {
                    viewMode == "grid" ? <GridView books={props.books}/> : <ListView books={props.books}/>
                }

            </div>
        </>
    )
}