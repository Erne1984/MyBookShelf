import style from "./SearchSortRow.module.css";

import SearchInput from "../../../../common/SearchInput/SearchInput";
import SortOptions from "./components/SortOptions";

export default function SearchSortRow() {

    return (
        <div className={style.container}>

            <SearchInput />

            <SortOptions />

        </div>
    )
}