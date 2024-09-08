import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import './Header.css'

import { AuthContext } from '../../context/AuthContextUser';
import DropdownMenu from './components/DropdownMenu/DropdownMenu';

import Logo from '/assets/mybookshelf-logo.png?url';

export default function Header() {

    const isAuthenticated = useContext(AuthContext)?.isAuthenticated;

    return (
        <header>

            <div className='header-left'>
                <img src={Logo}></img>

                <div className='search-box'>

                    <FontAwesomeIcon className='search-icon' icon={faMagnifyingGlass} />

                    <input type='text' placeholder='Buscar Livros' className='search-input'></input>

                </div>
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
                        <DropdownMenu />
                        :
                        <Link to={"/login"}>
                            <FontAwesomeIcon icon={faRightToBracket} />
                        </Link>
                }

            </div>


        </header>
    )
}