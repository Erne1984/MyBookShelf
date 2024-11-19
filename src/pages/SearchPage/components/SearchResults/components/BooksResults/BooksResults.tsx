import style from "./BooksResults.module.css";

import SearchResultRow from "../../../SearchResultsRow/SearchResultRow";
import GridView from "../../../../../../common/GridView/GridView";
import ListView from "../../../../../../common/ListView/ListView";

import Pagination from "../../../../../../common/Pagination/Pagination";
import { useState } from "react";
import Book from "../../../../../../interfaces/Book";

interface BooksREsultsProps {
    books: Book[];
}

export default function BooksResults(props: BooksREsultsProps) {
    const [viewMode, setViewMode] = useState<string>("grid");
    const [currentPage, setCurrentPage] = useState<number>(1);

    const booksPerPage = 8;

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