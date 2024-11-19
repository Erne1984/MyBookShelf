import style from "./UserInfo.module.css";
import formatDate from "../../../../utils/formatDate";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../../context/AuthContextUser";

interface UserInfoProps {
    userId: string;
    createdAt: string;
    dateBirth: string | undefined;
    country: string | undefined;
    gender: string | undefined;
}

export default function UserInfo(props: UserInfoProps) {
    const userIdLogged = useContext(AuthContext)?.userId

    return (
        <div className={style["info-content"]}>

            <div className={`${style["title-row"]} `}>
                <h4>Info</h4>
                {
                    props.userId == userIdLogged && <Link to={`/user/${props.userId}/config`}><FontAwesomeIcon icon={faPen} /></Link>
                }
            </div>

            <div className={style["info-row"]}>
                <dt>Registro:</dt>
                <dd>{formatDate(props.createdAt)}</dd>
            </div>

            {
                props.dateBirth &&
                <div className={style["info-row"]}>
                    <dt>Nascimento:</dt>
                    <dd>{formatDate(props.dateBirth)}</dd>
                </div>
            }

            {
                props.gender &&
                <div className={style["info-row"]}>
                    <dt>Genêro:</dt>
                    <dd>{props.gender}</dd>
                </div>
            }

            {
                props.country &&
                <div className={style["info-row"]}>
                    <dt>Nacionalidade:</dt>
                    <dd>{props.country}</dd>
                </div>
            }

        </div>
    )
}