import AuthorResults from "./components/AuthorResults/AuthorResults";

import BooksResults from "./components/BooksResults/BooksResults";

interface SearchResultsProps {
    currentSearchType: string,
    results: any[];
}

export default function SearchResults(props: SearchResultsProps) {

    return (
        <>
        { props.currentSearchType == "Books" && (<BooksResults books={props.results} />)}

        { props.currentSearchType == "Authors" && (<AuthorResults authors={props.results} />)}
        </>
    )
}
