import style from './SignUpForm.module.css';

import FormLogo from '../../../../common/FormLogo/FormLogo';
import ButtonForm from '../../../../common/ButtonForm/ButtonForm';

import { useRef } from 'react';
import { Link } from 'react-router-dom';


export default function SignUpForm() {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const consfirmPasswordRef = useRef<HTMLInputElement>(null);

    return (
        <form className={style["sign-up-form"]}>

            <FormLogo />

            <h3>Criar Conta</h3>

            <div className={style['form-inputs-box']}>
                <input
                    type='text'
                    className={style['sign-inputs']}
                    placeholder='Email'
                    ref={emailRef}
                />

                <input
                    type='password'
                    className={style['sign-inputs']}
                    placeholder='Senha'
                    ref={passwordRef}
                />

                <input
                    type='password'
                    className={style['sign-inputs']}
                    placeholder='Senha'
                    ref={consfirmPasswordRef}
                />

                <ButtonForm btnContent='Cadastrar' formMethod='/' />
            </div>

            <div className='forgot-password'>
                <span>Já possui conta? <Link to="/login" className='sign-up-link'>Entre</Link></span>
            </div>
        </form>
    )
}