import './LoginForm.css';

import Logo from '/assets/mybookshelf-logo.png?url';
import ButtonForm from '../../../../common/ButtonForm/ButtonForm';

export default function LoginForm() {

    return (

        <form className="login-form">

            <div className='form-logo-box'>
                <img className='form-logo' src={Logo} alt="Logo do MyBookShelf" />
            </div>

            <h3>Login</h3>

            <div className='form-inputs-box'>

                <input
                    type='text'
                    className='login-inputs'
                    placeholder='Email'
                >
                </input>

                <input
                    type='password'
                    className='login-inputs'
                    placeholder='Senha'
                >
                </input>

                <ButtonForm btnContent='Entrar' formMethod='/' />

            </div>

            <div className='forgot-password'>

                <span>Não possui conta? <span className='sign-up-link'>Cadastra-se!</span></span>

            </div>

        </form>

    )
}