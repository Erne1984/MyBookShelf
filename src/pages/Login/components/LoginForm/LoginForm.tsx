import './LoginForm.css';

import Logo from '/assets/mybookshelf-logo.png?url';
import ButtonForm from '../../../../common/ButtonForm/ButtonForm';

import loginUser from '../../../../hooks/loginUser';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

export default function LoginForm() {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;

        if (email && password) {
            await loginUser(email, password);
        } else {
            console.error("Email ou senha não fornecidos");
        }
    };

    return (
        <form className="login-form" onSubmit={handleSubmit}>

            <div className='form-logo-box'>
                <Link to="/">
                    <img className='form-logo' src={Logo} alt="Logo do MyBookShelf" />
                </Link>
            </div>


            <h3>Login</h3>

            <div className='form-inputs-box'>
                <input
                    type='text'
                    className='login-inputs'
                    placeholder='Email'
                    ref={emailRef}
                />

                <input
                    type='password'
                    className='login-inputs'
                    placeholder='Senha'
                    ref={passwordRef}
                />

                <ButtonForm btnContent='Entrar' formMethod='/' />
            </div>

            <div className='forgot-password'>
                <span>Não possui conta? <span className='sign-up-link'>Cadastra-se!</span></span>
            </div>
        </form>
    );
}