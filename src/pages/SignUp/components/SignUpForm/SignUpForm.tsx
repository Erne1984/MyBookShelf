import style from './SignUpForm.module.css';
import FormLogo from '../../../../common/FormLogo/FormLogo';
import ButtonForm from '../../../../common/ButtonForm/ButtonForm';
import CreateUser from '../../../../hooks/createUser';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

export default function SignUpForm() {
    const userNameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const confirmPasswordRef = useRef<HTMLInputElement>(null);

    function verifyPassword() {
        if (passwordRef.current?.value !== confirmPasswordRef.current?.value) {
            alert("Senhas não estão batendo");
        }
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        verifyPassword();

        const username = userNameRef.current?.value;
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;

        if (email && password && username) {
            await CreateUser(username, email, password);
        } else {
            console.error("Email, senha ou nome de usuário não fornecidos");
        }
    }

    return (
        <form className={style["sign-up-form"]} onSubmit={handleSubmit}>
            <FormLogo />
            <h3>Criar Conta</h3>
            <div className={style['form-inputs-box']}>
                <input
                    type='text'
                    className={style['sign-inputs']}
                    placeholder='Username'
                    ref={userNameRef}
                    required
                />
                <input
                    type='text'
                    className={style['sign-inputs']}
                    placeholder='Email'
                    ref={emailRef}
                    required
                />
                <input
                    type='password'
                    className={style['sign-inputs']}
                    placeholder='Senha'
                    ref={passwordRef}
                    required
                />
                <input
                    type='password'
                    className={style['sign-inputs']}
                    placeholder='Confirmar Senha'
                    ref={confirmPasswordRef}
                    required
                />
                <ButtonForm btnContent='Cadastrar' formMethod='/' />
            </div>
            <div className={style['forgot-password']}>
                <span>Já possui conta? <Link to="/login" className={style['sign-up-link']}>Entre</Link></span>
            </div>
        </form>
    );
}
