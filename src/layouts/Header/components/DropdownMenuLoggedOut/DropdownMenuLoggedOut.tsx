/* TO IMPLEMETING YET */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./DropdownMenuLoggedOut.module.css";

import { useState } from "react";
import { faRightToBracket, faSun, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


export default function DropdownMenuLoggedOut() {
    const [dropdownMenu, setDropdownMenu] = useState<boolean>(false);

    function handleClick() {
        setDropdownMenu(prevState => !prevState);
    }

    return (
        <div className={style.dropdown}>
            <FontAwesomeIcon className={style.icon} icon={faRightToBracket} onClick={handleClick} />
            <ul className={`${style['dropdown-menu']} ${dropdownMenu ? style.active : style.none}`}>

                <Link to={"/login"}>
                    <div className={style['menu-item']}>

                        <FontAwesomeIcon className={""} icon={faUser} />
                        <li>Login</li>

                    </div>
                </Link>

                <div className={style['menu-item']}>
                    <FontAwesomeIcon icon={faSun} />
                    <li>Tema</li>
                </div>

            </ul>
        </div>
    )
}