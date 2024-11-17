import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { AuthContext } from '../../context/AuthContextUser';
import DropdownMenuLoggedIn from './components/DropdownMenuLoggedIn/DropdownMenuLoggedIn';
import DropdownMenuLoggedOut from './components/DropdownMenuLoggedOut/DropdownMenuLoggedOut';
import SearchInput from '../../common/SearchInput/SearchInput';
import { useLocation } from 'react-router-dom';
import Logo from '/assets/mybookshelf-logo.png?url';

export default function Header() {
    const [currentPage, setCurrentPage] = useState<string>("");
    const isAuthenticated = useContext(AuthContext)?.isAuthenticated;
    const location = useLocation();

    useEffect(() => {
        setCurrentPage(location.pathname); 
    }, [location.pathname]);

    return (
        <header>
            <div className='header-left'>
                <Link to={"/"}>
                    <img src={Logo} alt="MyBookShelf Logo" />
                </Link>
                <SearchInput />
            </div>

            <div className='header-right'>
                <ul className='menu-links'>
                    <li className={currentPage === "/" ? "selected" : ""}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={currentPage === "/aboutUs" ? "selected" : ""}>
                        <Link to="/aboutUs">Sobre Nós</Link>
                    </li>
                    <li className={currentPage === "/recommendations" ? "selected" : ""}>
                        <Link to="/recommendations">Recomendações</Link>
                    </li>
                </ul>

                {isAuthenticated ? <DropdownMenuLoggedIn /> : <DropdownMenuLoggedOut />}
            </div>
        </header>
    );
}
