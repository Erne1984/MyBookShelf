import style from "./DropdownUserActions.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function DropdownUserActions() {
    const [dropdownMenu, setDropdownMenu] = useState<boolean>(false);

    function handleClick() {
        setDropdownMenu(prevState => !prevState);
    }

    return (
        <div className={style["dropdown-box"]}>

            <div className={style["more-button"] } onClick={handleClick}>
                <p>More</p>
                <FontAwesomeIcon className={style["icon"]} icon={dropdownMenu ? faChevronUp : faChevronDown} />
            </div>

            <ul className={`${style["dropdown-menu"]} ${dropdownMenu ? style.active : style.none}`}>
                <li>Mensagem</li>
                <li>Denúnciar</li>
                <li>Bloquear</li>
            </ul>
        </div>
    )
}