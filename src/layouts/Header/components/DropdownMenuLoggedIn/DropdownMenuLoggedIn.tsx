import style from './DropdownMenuLoggedIn.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUsers, faMessage, faQuoteLeft, faRightFromBracket, faSun } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from 'react';

import { AuthContext } from '../../../../context/AuthContextUser';

export default function DropdownMenuLoggedIn() {

    const [dropdownMenu, setDropdownMenu] = useState<boolean>(false);

    function handleClick() {
        setDropdownMenu(prevState => !prevState);
    }

    const logout = useContext(AuthContext)?.logout;

    return (
        <div className={style.dropdown}>
            <FontAwesomeIcon className={style.icon} icon={faUser} onClick={handleClick} />
            <ul className={`${style['dropdown-menu']} ${dropdownMenu ? style.active : style.none}`}>
                <div className={style['menu-item']}>
                    <FontAwesomeIcon className={""} icon={faUser} />
                    <li>Perfil</li>
                </div>
                <div className={style['menu-item']}>
                    <FontAwesomeIcon icon={faUsers} />
                    <li>Amigos</li>
                </div>
                <div className={style['menu-item']}>
                    <FontAwesomeIcon icon={faMessage} />
                    <li>Minhas Reviews</li>
                </div>
                <div className={style['menu-item']}>
                    <FontAwesomeIcon icon={faQuoteLeft} />
                    <li>Frases</li>
                </div>
                <div className={style['menu-item']}>
                    <FontAwesomeIcon icon={faSun} />
                    <li>Tema</li>
                </div>
                <div className={style['menu-item']} onClick={logout}>
                    <FontAwesomeIcon icon={faRightFromBracket} />
                    <li>Deslogar</li>
                </div>
            </ul>
        </div>
    );
}