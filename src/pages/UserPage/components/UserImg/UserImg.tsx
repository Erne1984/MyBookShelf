import style from "./UserImg.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import ModalUploadUserImg from "../../../../common/ModalUploadUserImg/ModalUploadUserImg";
import { useState } from "react";

interface UserImgProps {
    userAvatar: string | undefined;
}

export default function UserImg( props: UserImgProps ) {
    const [modalShow, setModalShow] = useState<boolean>(false);

    function handleModal() {
        setModalShow(!modalShow);
    }

    return (
        <div className={style["user-img-box"]}>
            {
                props.userAvatar ?
                    <img onClick={handleModal} src={props.userAvatar} className={style.avatar}></img>
                    :
                    <FontAwesomeIcon onClick={handleModal} className={style.avatar} icon={faCircleUser} />
            }
            <ModalUploadUserImg modalShow={modalShow} onClose={handleModal}/>
        </div>
    )
}