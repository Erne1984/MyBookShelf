import style from "./SearchInput.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function SearchInput() {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const navigate = useNavigate();

    const { query } = useParams<{ query: string }>();

    useEffect(() => {
        if (query) {
            setSearchQuery(query);
        }
    }, [query]);

    const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && searchQuery.trim()) {
            navigate(`/search/:${searchQuery}`);
        }
    };

    return (
        <div className={style['search-box']}>
            <input
                type='text'
                placeholder='Buscar Livros'
                className={style['search-input']}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearch}
            />
            <FontAwesomeIcon className={style['search-icon']} icon={faMagnifyingGlass} />
        </div>
    );
}
