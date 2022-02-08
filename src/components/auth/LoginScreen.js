import React from  'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {

    const[formValues, handleInputChange ] = useForm({
        email: 'karen@mep.com',
        password: '123456'
    })

    const {email, password} = formValues


    return(

        <div>
        <h3 className='auth__title'>Iniciar sesion</h3>

        <form>

            <input
                type='text'
                placeholder='Correo electronico'
                name='email'
                className='auth__input'
                autoComplete='off'
                value={email}
                onChange={handleInputChange}>
            </input>

            <input
                type='password'
                placeholder='Contraseña'
                name='password'
                className='auth__input'
                value={password}
                onChange={handleInputChange}>
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