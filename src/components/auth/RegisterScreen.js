import React from  'react';
import { Link } from 'react-router-dom';

export const RegisterScreen = () => {
    return(

        <div>
        <h3 className='auth__title'>Registro</h3>

        <form>

        <input
                type='text'
                placeholder='name'
                name='name'
                className='auth__input'
                autoComplete='off'>
            </input>

            <input
                type='text'
                placeholder='email'
                name='email'
                className='auth__input'
                autoComplete='off'>
            </input>

            <input
                type='password'
                placeholder='password'
                name='password'
                className='auth__input'>
            </input>

            <input
                type='password'
                placeholder='Confirmar contraseña'
                name='password2'
                className='auth__input'>
            </input>

            <button
                type='submit'
                className='btn btn-primary'
                disabled={true}>
                Crear cuenta
            </button>

            <hr />

            <div className='auth__social-networks'>

                <p>Iniciar sesion con Google</p>

                <div
                    className="google-btn"
                >
                    <div className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                    </div>
                    <p className="btn-text">
                        <b>Sign in with google</b>
                    </p>
                </div>
            </div>

            <Link to='/auth/login'
            className='link'>
                Ya tengo una cuenta
            </Link>

        </form>
    </div>

    )
}