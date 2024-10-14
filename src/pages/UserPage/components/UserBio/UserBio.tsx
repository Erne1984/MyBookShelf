import style from "./UserBio.module.css";

interface UserBioProps {
    userName: string;
    userBio: string | undefined;
}

export default function UserBio(props: UserBioProps) {

    return(
        <section className={style["userBio-container"]}>

            <h2>{props.userName}</h2>

            <p>{props.userBio}</p>

        </section>
    )
}