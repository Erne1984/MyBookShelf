import styles from './DropdownMenu.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUsers, faMessage, faQuoteLeft, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from 'react';

import { AuthContext } from '../../../../context/AuthContextUser';

export default function DropdownMenu() {

    const [dropdownMenu, setDropdownMenu] = useState<boolean>(false);

    function handleClick() {
        setDropdownMenu(prevState => !prevState);
    }

    const logout = useContext(AuthContext)?.logout;

    return (
        <div className={styles.dropdown}>
            <FontAwesomeIcon className={styles.icon} icon={faUser} onClick={handleClick} />
            <ul className={`${styles['dropdown-menu']} ${dropdownMenu ? styles.active : styles.none}`}>
                <div className={styles['menu-item']}>
                    <FontAwesomeIcon className={""} icon={faUser} />
                    <li>Perfil</li>
                </div>
                <div className={styles['menu-item']}>
                    <FontAwesomeIcon icon={faUsers} />
                    <li>Amigos</li>
                </div>
                <div className={styles['menu-item']}>
                    <FontAwesomeIcon icon={faMessage} />
                    <li>Minhas Reviews</li>
                </div>
                <div className={styles['menu-item']}>
                    <FontAwesomeIcon icon={faQuoteLeft} />
                    <li>Frases</li>
                </div>
                <div className={styles['menu-item']} onClick={logout}>
                    <FontAwesomeIcon icon={faRightFromBracket} />
                    <li>Deslogar</li>
                </div>
            </ul>
        </div>
    );
}