import style from "./SearchPage.module.css";

import Header from "../../layouts/Header/Header";
import SearchSortRow from "./components/SearchSortRow/SearchSortRow";
import FilterRow from "./components/FilterRow/FilterRow";
import SearchResultRow from "./components/SearchResultsRow/SearchResultRow";
import SearchResults from "./components/SearchResults/SearchResults";

export default function SearchPage() {

    return (
        <>
            <Header />

            <section className={style.container}>

                <SearchSortRow />

                <FilterRow />

                <SearchResultRow />

                <SearchResults />

            </section>
        </>
    )
}