import style from "./DropdownMenuCommentUser.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faFlag } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function DropdownMenuCommentUser() {
    const [dropdownMenu, setDropdownMenu] = useState<boolean>(false);

    function handleClick() {
        setDropdownMenu(prevState => !prevState);
    }

    return (
        <div className={style["dropdown-box"]}>
            <div className={style["icon"]}>
                <FontAwesomeIcon icon={faEllipsis} onClick={handleClick} />
            </div>
            <ul className={`${style["dropdown-menu"]} ${dropdownMenu ? style.active : style.none}`}>

                <div className={style["menu-item"]}>
                    <FontAwesomeIcon icon={faFlag} />
                    <li>Denúnciar Review</li>
                </div>

            </ul>
        </div>
    )
}