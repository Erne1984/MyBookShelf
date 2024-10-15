import style from "./UserShelves.module.css";

import GridView from "../../../SearchPage/components/SearchResults/components/GridView/GridView";

interface UserShelvesProps {
    readingList: [],
    readedList: []
}

export default function UserShelves(props: UserShelvesProps) {

    return (
        <section className={style["user-shelve-container"]}>

            <h2>Minhas Estantes</h2>

            <h3>Lidos ({props.readedList.length})</h3>
            <div className={style["readed-container"]}>
                {
                    props.readedList.length > 0 ?
                        <GridView books={props.readedList} />
                        :
                        <div>Nenhum livro adicionado</div>
                }
            </div>

            <h3>Lendo ({props.readingList.length})</h3>
            <div className={style["reading-container"]}>
                {
                    props.readingList.length > 0 ?
                        <GridView books={props.readingList} />
                        :
                        <div>Nenhum livro adicionado</div>
                }
            </div>

        </section>
    )
}