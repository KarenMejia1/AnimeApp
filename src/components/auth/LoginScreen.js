import React from  'react';
import { Link } from 'react-router-dom';

export const LoginScreen = () => {
    return(

        <div>
        <h3 className='auth__title'>Iniciar sesion</h3>

        <form>

            <input
                type='text'
                placeholder='Correo electronico'
                name='email'
                className='auth__input'
                autoComplete='off'>
            </input>

            <input
                type='password'
                placeholder='Contraseña'
                name='password'
                className='auth__input'>
            </input>

            <button
                type='submit'
                className='btn btn-primary'
                >
                Iniciar Sesion
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
                        <b>Iniciar sesion con Google</b>
                    </p>
                </div>
            </div>

            <Link to='/auth/register'
            className='link'>
                Crea una nueva cuenta
            </Link>

        </form>
    </div>

    )
}