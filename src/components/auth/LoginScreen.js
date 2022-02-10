import React from  'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { startLogin } from '../actions/auth';

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const[formLoginValues, handleLoginInputChange ] = useForm({
        lemail: 'karen@mep.com',
        lpassword: '123456'
    });

    const {lemail, lpassword} = formLoginValues;

    const handleLogin = (e)=>{
        e.preventDefault();
        dispatch(startLogin(lemail, lpassword))

    }


    return(

        <div>
        <h3 className='auth__title'>Iniciar sesion</h3>

        <form onSubmit={handleLogin}>

            <input
                type='text'
                placeholder='Correo electronico'
                name='lemail'
                className='auth__input'
                autoComplete='off'
                value={lemail}
                onChange={handleLoginInputChange}>
            </input>

            <input
                type='password'
                placeholder='Contraseña'
                name='lpassword'
                className='auth__input'
                value={lpassword}
                onChange={handleLoginInputChange}>
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