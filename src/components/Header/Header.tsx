import './Header.css';
import Logo from '/assets/mybookshelf-logo.png?url';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';

export default function Header() {

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

                <FontAwesomeIcon icon={faUser} />

            </div>


        </header>
    )
}