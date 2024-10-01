import style from "./SearchResults.module.css";
import Book from "../../../../interfaces/Book";
import { useState } from "react";

import SearchResultRow from "../SearchResultsRow/SearchResultRow";
import GridView from "./components/GridView/GridView";
import ListView from "./components/ListView/ListView";

import Pagination from "./components/Pagination/Pagination";

interface SearchResultsProps {
    books: Book[]
}

export default function SearchResults(props: SearchResultsProps) {
    const [viewMode, setViewMode] = useState<string>("grid");
    const [currentPage, setCurrentPage] = useState<number>(1); 
    const booksPerPage = 5;

    const startIndex = (currentPage - 1) * booksPerPage;
    const endIndex = startIndex + booksPerPage;
    const currentBooks = props.books.slice(startIndex, endIndex); 

    return (
        <>
            <SearchResultRow numberResults={props.books.length} viewMode={viewMode} setViewMode={setViewMode} />

            <div className={style["container"]}>
                {
                    viewMode == "grid"
                        ? <GridView books={currentBooks} /> 
                        : <ListView books={currentBooks} />
                }
            </div>

            <Pagination
                totalBooks={props.books.length}
                booksPerPage={booksPerPage}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
            />
        </>
    )
}
