import style from "./SearchPage.module.css";

import Header from "../../layouts/Header/Header";
import SearchSortRow from "./components/SearchSortRow/SearchSortRow";
import FilterRow from "./components/FilterRow/FilterRow";
import SearchResultRow from "./components/SearchResultsRow/SearchResultRow";
import SearchResults from "./components/SearchResults/SearchResults";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useSearchResult from "../../hooks/useSearchResult";
import Book from "../../interfaces/Book";

export default function SearchPage() {

    const { query } = useParams<{ query: string }>();

    const { data, loading, error } = useSearchResult(query?.slice(1));

    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        if (data) {
            setBooks(data.books)
        }
    }, [query, error, data]);

    if (loading) return <p>Carregando</p>
    if (!books) return <p>Erro em buscar dados do livro</p>;

    return (
        <>
            <Header />

            <section className={style.container}>

                <SearchSortRow />

                <FilterRow />

                <SearchResultRow />

                <SearchResults books={books}/>

            </section>
        </>
    )
}