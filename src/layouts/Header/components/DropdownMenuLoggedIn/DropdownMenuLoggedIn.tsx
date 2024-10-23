import style from './DropdownMenuLoggedIn.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUsers, faMessage, faQuoteLeft, faRightFromBracket, faSun } from '@fortawesome/free-solid-svg-icons';
import { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../../../../context/AuthContextUser';
import { Link } from 'react-router-dom';
import getUserProfile from '../../../../hooks/user/getUserProfile';
import { User } from '../../../../interfaces/Book';

export default function DropdownMenuLoggedIn() {

    const [dropdownMenu, setDropdownMenu] = useState<boolean>(false);
    const { user } = getUserProfile();
    const [profileData, setProfileData] = useState<User | undefined>();

    useEffect(() => {
        if(user){
            setProfileData(user)
        }
    }, [user])

    function handleClick() {
        setDropdownMenu(prevState => !prevState);
    }

    const logout = useContext(AuthContext)?.logout;
    const userId = useContext(AuthContext)?.userId;

    return (
        <div className={style.dropdown}>
            {
                profileData?.imgUserUrl ?
                    <img src={profileData.imgUserUrl} className={style.avatar} onClick={handleClick}></img>
                    :
                    <FontAwesomeIcon className={style.icon} icon={faUser} onClick={handleClick} />
            }

            <ul className={`${style['dropdown-menu']} ${dropdownMenu ? style.active : style.none}`}>
                <Link to={`/user/:${userId}`}>
                    <div className={style['menu-item']}>
                        <FontAwesomeIcon className={""} icon={faUser} />
                        <li>Perfil</li>
                    </div>
                </Link>

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