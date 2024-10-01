import style from "./Pagination.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

interface PaginationProps {
    totalBooks: number;
    booksPerPage: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

export default function Pagination({ totalBooks, booksPerPage, currentPage, onPageChange }: PaginationProps) {
    
    const totalPages = Math.ceil(totalBooks / booksPerPage);

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div className={style["container"]}>
            <FontAwesomeIcon
                icon={faChevronLeft}
                className={style["icon"]}
                onClick={handlePreviousPage}
                style={{ cursor: currentPage > 1 ? "pointer" : "not-allowed" }}
            />

            <div className={style["indexes"]}>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <span
                        key={page}
                        className={`${style["index"]} ${page === currentPage ? style["active"] : ""}`}
                        onClick={() => onPageChange(page)}
                        style={{ cursor: "pointer" }}
                    >
                        {page}
                    </span>
                ))}
            </div>

            <FontAwesomeIcon
                icon={faChevronRight}
                className={style["icon"]}
                onClick={handleNextPage}
                style={{ cursor: currentPage < totalPages ? "pointer" : "not-allowed" }}
            />
        </div>
    );
}