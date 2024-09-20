import style from "./FormLogo.module.css";
import { Link } from "react-router-dom";
import Logo from '/assets/mybookshelf-logo.png?url';


export default function FormLogo() {
    return (
        <div className={style['form-logo-box']}>
            <Link to="/">
                <img className='form-logo' src={Logo} alt="Logo do MyBookShelf" />
            </Link>
        </div>
    )
}