import style from "./UserInfo.module.css";
import formatDate from "../../../../utils/formatDate";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

interface UserInfoProps {
    createdAt: string;
    dateBirth: string | undefined;
    country: string | undefined;
    gender: string | undefined;
}

export default function UserInfo(props: UserInfoProps) {

    return (
        <div className={style["info-content"]}>

            <div className={` ${style["info-row"]} ${style["title-row"]} `}>
                <dt>Info:</dt>
                <FontAwesomeIcon icon={faPen} />
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