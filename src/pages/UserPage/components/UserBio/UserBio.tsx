import { useContext } from "react";
import UserVisitorActions from "../../../UserVisitingPage/components/UserVisitorActions/UserVisitorActions";
import style from "./UserBio.module.css";
import { AuthContext } from "../../../../context/AuthContextUser";

interface UserBioProps {
    userId: string;
    userName: string;
    userBio: string | undefined;
}

export default function UserBio(props: UserBioProps) {
    const userId = useContext(AuthContext)?.userId;

    return (
        <section className={style["userBio-container"]}>

            <h2>{props.userName}</h2>

            {
                userId !== props.userId && <UserVisitorActions targetUserId={props.userId} />
            }

            <p>{props.userBio}</p>

        </section>
    )
}