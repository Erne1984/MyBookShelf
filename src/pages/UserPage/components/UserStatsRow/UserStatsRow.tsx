import { useEffect } from "react";
import style from "./UserStatsRow.module.css";

interface UserStatsRowProps {
    userToRead: number;
    userReading: number;
    userReaded: number;
}

export default function UserStatsRow(props: UserStatsRowProps) {

    useEffect(() => {
        console.log(props.userReaded)
    }, [])

    return(
        <section className={style["stats-row-container"]}>

            <div className={style["stat-item"]}>
                <h3>Livros Lidos</h3>
                <span>{props.userReaded}</span>
            </div>

            <div className={style["stat-item"]}>
                <h3>Livros para ler</h3>
                <span>{props.userReaded}</span>
            </div>

            <div className={style["stat-item"]}>
                <h3>Lendo</h3>
                <span>{props.userReaded}</span>
            </div>

        </section>
    )
}