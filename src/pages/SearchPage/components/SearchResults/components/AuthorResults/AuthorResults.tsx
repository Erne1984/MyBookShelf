import { useState } from "react";
import { Author } from "../../../../../../interfaces/Book";
import AuthorRow from "./components/AuthorsRow";
import Pagination from "../../../../../../common/Pagination/Pagination";

import style from "./AuthorResults.module.css";

interface AuthorResultsProps {
    authors: Author[];
}

export default function AuthorResults(props: AuthorResultsProps) {
    const [currentPage, setCurrentPage] = useState<number>(1);

    const authorsPerPage = 8;

    const startIndex = (currentPage - 1) * authorsPerPage;
    const endIndex = startIndex + authorsPerPage;
    const currentAuthors = props.authors.slice(startIndex, endIndex);


    return (
        <>
            {
                props.authors.length != 0 ?
                    <div className={style.container}>
                        {currentAuthors.map((author) => (
                            <AuthorRow
                                key={author._id}
                                authorImg={author.imageUrl}
                                authorId={author._id}
                                authorName={author.name}
                                followersNumber={author.followers?.length}
                                worksNumber={author.works?.length} />
                        ))}
                    </div>
                    :
                    <p>Nenhum Autor Encontrado</p>
            }

            <Pagination
                totalBooks={props.authors.length}
                booksPerPage={authorsPerPage}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
            />
        </>
    );
}
