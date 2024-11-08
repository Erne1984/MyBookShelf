import style from "./UserShelves.module.css";

import GridView from "../../../../common/GridView/GridView";
import useGetAllBooksUser from "../../../../hooks/List/useGetAllBooksUser";
import { Link } from "react-router-dom";

interface UserShelvesProps {
    userId: string;
    readingList: string[];
    readedList: string[];
    toReadList: string[];
}

export default function UserShelves(props: UserShelvesProps) {
    const { userBooks } = useGetAllBooksUser(props.userId);

    if (!userBooks) return <></>;

    const filteredReadedBooks = userBooks.filter(book => props.readedList.includes(book._id));
    const filteredReadingBooks = userBooks.filter(book => props.readingList.includes(book._id));
    const filteredToReadBooks = userBooks.filter(book => props.toReadList.includes(book._id));

    return (
        <section className={style["user-shelve-container"]}>
            <Link to={`/user/${props.userId}/lists`}><h2>Minhas Estantes</h2></Link>

            <h3>Lidos ({filteredReadedBooks.length})</h3>
            <div className={style["readed-container"]}>
                {
                    filteredReadedBooks.length > 0 ?
                        <GridView books={filteredReadedBooks} />
                        :
                        <div className={style["no-books"]}>Nenhum livro adicionado</div>
                }
            </div>

            <h3>Lendo ({filteredReadingBooks.length})</h3>
            <div className={style["reading-container"]}>
                {
                    filteredReadingBooks.length > 0 ?
                        <GridView books={filteredReadingBooks} />
                        :
                        <div className={style["no-books"]}>Nenhum livro adicionado</div>
                }
            </div>

            <h3>Para Ler ({filteredToReadBooks.length})</h3>
            <div className={style["to-read-container"]}>
                {
                    filteredToReadBooks.length > 0 ?
                        <GridView books={filteredToReadBooks} />
                        :
                        <div className={style["no-books"]}>Nenhum livro adicionado</div>
                }
            </div>
        </section>
    );
}
