import style from "./ConfigUserAvatar.module.css";

import ModalUploadUserImg from "../../../../common/ModalUploadUserImg/ModalUploadUserImg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

interface ConfigUserAvatarProps {
    userAvatar: string,
}

export default function ConfigUserAvatar(props: ConfigUserAvatarProps) {
    const [modalShow, setModalShow] = useState<boolean>(false);

    function handleModal() {
        setModalShow(!modalShow);
    }

    return (
        <div className={style["user-img-box"]}>
            {
                props.userAvatar ?
                    <img className={style["user-img"]} src={props.userAvatar}></img>
                    :
                    <FontAwesomeIcon icon={faUser} />
            }

            <p onClick={handleModal}>Alterar Foto</p>

            <p className={style["delete"]}>Excluir Conta</p>

            <ModalUploadUserImg modalShow={modalShow} onClose={handleModal}/>
        </div>
    )
}