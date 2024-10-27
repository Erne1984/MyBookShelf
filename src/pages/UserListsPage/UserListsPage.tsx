import style from "./UserListsPage.module.css";


import Header from "../../layouts/Header/Header"
import UserListsHeader from "./components/UserListsHeader/UserListsHeader";
import UserListsSideFilters from "./components/UserListsSideFilters/UserListsSideFilters";

export default function UserListsPage() {

    return (
        <>
            <Header/>

            <main className={style["user-lists-page-container"]}>

                <UserListsHeader/>

                <UserListsSideFilters/>

            </main>
        </>
    )
}