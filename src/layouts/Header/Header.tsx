import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import './Header.css'

import { AuthContext } from '../../context/AuthContextUser';
import DropdownMenuLoggedIn from './components/DropdownMenuLoggedIn/DropdownMenuLoggedIn';
import DropdownMenuLoggedOut from './components/DropdownMenuLoggedOut/DropdownMenuLoggedOut';
import SearchInput from '../../common/SearchInput/SearchInput';

import Logo from '/assets/mybookshelf-logo.png?url';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';

export default function Header() {

    const isAuthenticated = useContext(AuthContext)?.isAuthenticated;

    return (
        <header>

            <div className='header-left'>

                <Link to={"/"}>
                    <img src={Logo}></img>
                </Link>

                <SearchInput />

            </div>

            <div className='header-right'>

                <ul className='menu-links'>
                    <li className='selected'>Home</li>
                    <li>Meus Livros</li>
                    <li>Lista de Desejos</li>
                    <li>Sobre Nós</li>
                </ul>

                {
                    isAuthenticated ?
                        <DropdownMenuLoggedIn />
                        :
                        <DropdownMenuLoggedOut />
                }

            </div>


        </header>
    )
}