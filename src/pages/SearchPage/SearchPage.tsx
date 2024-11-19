import style from "./SearchPage.module.css";

import Header from "../../layouts/Header/Header";
import SearchSortRow from "./components/SearchSortRow/SearchSortRow";
import SearchResults from "./components/SearchResults/SearchResults";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useSearchResult from "../../hooks/book/useSearchResult";
import SearchingForTabs from "./components/SearchingForTabs/SearchingForTabs";

export default function SearchPage() {
    const { query } = useParams<{ query: string }>();
    const [searchType, setSearchType] = useState<"Books" | "Authors" | "Users">("Books");
    const [results, setResults] = useState<any[]>([]);

    const { data, loading, error } = useSearchResult(query, searchType);

    useEffect(() => {
        if (data) {
            setResults(data);
        } else {
            setResults([]);
        }
    }, [query, searchType, data]);

    if (loading) return <p>Carregando...</p>;

    return (
        <>
            <Header />

            <section className={style.container}>
                <SearchSortRow />
                <SearchingForTabs currentType={searchType} onTypeChange={setSearchType} />

                {error ? (
                    <p>Erro ao buscar dados. Tente novamente mais tarde.</p>
                ) : (
                    <SearchResults results={results} currentSearchType={searchType} />
                )}
            </section>
        </>
    );
}