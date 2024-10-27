import style from "./UserCurrentlyReading.module.css";

import ListView from "../../../../common/ListView/ListView";

interface UserCurrentlyReadingProps {
    toReadList: [],
}

export default function UserCurrentlyReading(props: UserCurrentlyReadingProps) {

    return (
        <section className={style["currently-reading-container"]}>

            <h2>Lendo Atualmente</h2>

            {
                props.toReadList.length > 0 ?
                <ListView books={props.toReadList}/>
                :
                <div>Nenhum Livro Adicionado</div>
            }
            

        </section>
    )
}