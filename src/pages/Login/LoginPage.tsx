import style from './LoginPage.module.css';

import LoginForm from './components/LoginForm/LoginForm';


export default function LoginPage() {

    return (
        <div className={style["login-form-container"]}>

            <LoginForm />

        </div>
    )
}