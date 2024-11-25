import style from "./UserListsPage.module.css";

import Header from "../../layouts/Header/Header";
import UserListsHeader from "./components/UserListsHeader/UserListsHeader";
import UserListsSideFilters from "./components/UserListsSideFilters/UserListsSideFilters";
import UserListsBooksDisplay from "./components/UserListsBooksDisplay/UserListsBooksDisplay";
import { useEffect, useState } from "react";

import useGetAllBooksUser from "../../hooks/List/useGetAllBooksUser";
import useGetCustomListsUser from "../../hooks/List/useGetCustomListsUser";
import { useParams } from "react-router-dom";
import Book, { List, User } from "../../interfaces/Book";
import getUserProfile from "../../hooks/user/getUserProfile";

export default function UserListsPage() {
    const [filter, setFilter] = useState<string>("todos");
    const { userId } = useParams();
    const { user } = getUserProfile();
    const [profileData, setProfileData] = useState<User | undefined>();
    const { userBooks } = useGetAllBooksUser(userId);
    const { userCustomLists } = useGetCustomListsUser(userId);
    const [books, setBooks] = useState<Book[]>([]);
    const [customLists, setCustomLists] = useState<List[]>([]); 

    const getBooksByIds = (ids: string[]): Book[] => {
        return userBooks?.filter(book => ids.includes(book._id)) || [];
    };

    useEffect(() => {
        if (userId?.slice(1) && profileData) {
            setCustomLists(userCustomLists ?? []);

            switch (filter) {
                case "todos":
                    setBooks(userBooks ?? []);
                    break;
                case "quero ler":
                    setBooks(getBooksByIds(profileData.toReadList || []));
                    break;
                case "lendo":
                    setBooks(getBooksByIds(profileData.readingList || []));
                    break;
                case "lido":
                    setBooks(getBooksByIds(profileData.readedList || []));
                    break;
                default:
                    const selectedList = userCustomLists?.find(list => list.name === filter);
                    const selectedListBooks = selectedList?.books as unknown as Book[];
                    
                    if (selectedListBooks) {
                        setBooks(selectedListBooks);
                    }
            }
        }
    }, [userId, userBooks, filter, userCustomLists, profileData]);

    useEffect(() => {
        if (user) {
            setProfileData(user);
        }
    }, [user]);

    return (
        <>
            <Header />

            <main className={style["user-lists-page-container"]}>
                <UserListsHeader />

                <div className={style["main-content"]}>
                    <UserListsSideFilters 
                    userId={userId} 
                    customLists={customLists} 
                    currentFilter={filter} 
                    setFilter={setFilter}
                    readedNumber={user?.readedList.length}
                    readingNumber={user?.readingList.length} 
                    toReadingNumber={user?.toReadList.length}/>
                    <UserListsBooksDisplay books={books} />
                </div>
            </main>
        </>
    );
}