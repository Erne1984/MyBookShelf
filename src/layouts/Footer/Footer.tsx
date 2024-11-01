import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {

    return (
        <footer>

            <div className='footer-col-1'>

                <ul>
                    <li>Plataforma</li>
                    <li className='footer-clickbel'>
                        <a href="/aboutUs">Sobre Nós</a>
                    </li>
                    <li className='footer-clickbel'>Contato</li>
                    <li className='footer-clickbel'>Termos</li>
                </ul>

                <ul>
                    <li>Contato</li>
                    <div className='footer-box-icons'>
                        <FontAwesomeIcon className='footer-icons' icon={faFacebook} />
                        <FontAwesomeIcon className='footer-icons' icon={faInstagram} />
                        <FontAwesomeIcon className='footer-icons' icon={faXTwitter} />
                    </div>
                </ul>

            </div>


            <span>&copy; {new Date().getFullYear()} MyBookShelf</span>

            {/* 
            
                        <div className='footer-col-2'>

            </div>
            
            */}


        </footer>
    )
}