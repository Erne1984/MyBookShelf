import style from "./UserImg.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";


interface UserImgProps {
    userAvatar: string | undefined;
}

export default function UserImg( props: UserImgProps ) {

    return (
        <div className={style["user-img-box"]}>
            {
                props.userAvatar ?
                    <img src={props.userAvatar} className={style.avatar}></img>
                    :
                    <FontAwesomeIcon className={style.avatar} icon={faCircleUser} />
            }
        </div>
    )
}