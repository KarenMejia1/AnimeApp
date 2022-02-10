import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useForm } from '../../hooks/useForm';
import { startRegister } from '../actions/auth';

export const RegisterScreen = () => {

    const dispatch = useDispatch();

    const [formRegisterValues, handleRegisterInputChange] = useForm({
        rname: 'Karensita',
        remail: 'karen@mep.com',
        rpassword1: '123456',
        rpassword2: '123456'
    });

    const { rname, remail, rpassword1, rpassword2 } = formRegisterValues;

    const handleRegister = (e) =>{
        e.preventDefault();

        if(rpassword1 !== rpassword2){
            return Swal.fire('Error', 'Las contraseñas no coinciden', 'error')
        }
console.log('e')
        dispatch(startRegister(remail, rpassword1, rname))
    }

    return (

        <div>
            <h3 className='auth__title'>Registro</h3>

            <form onSubmit={handleRegister}>

                <input
                    type='text'
                    placeholder='name'
                    name='rname'
                    value={rname}
                    onChange={handleRegisterInputChange}
                    className='auth__input'
                    autoComplete='off'>
                </input>

                <input
                    type='text'
                    placeholder='email'
                    name='remail'
                    value={remail}
                    onChange={handleRegisterInputChange}
                    className='auth__input'
                    autoComplete='off'>
                </input>

                <input
                    type='password'
                    placeholder='password'
                    name='rpassword1'
                    value={rpassword1}
                    onChange={handleRegisterInputChange}
                    className='auth__input'>
                </input>

                <input
                    type='password'
                    placeholder='Confirmar contraseña'
                    name='rpassword2'
                    value={rpassword2}
                    onChange={handleRegisterInputChange}
                    className='auth__input'>
                </input>

                <button
                    type='submit'
                    className='btn btn-primary'
                    >
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