import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Link,
    NavLink,
    Route,
    Switch,
} from "react-router-dom";
import { startLogout } from '../actions/auth';
import { BuscarAnimeScreen } from '../Anime/BusarAnimeScreen';
import { BuscarMangaScreen } from '../Manga/BuscarMangaScreen';
import { PrincipalScreen } from '../Principal/PrincipalScreen';


import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

export const NavBar = () => {

    const { name } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(startLogout());
    }


    return (

        <Router>

            <div className='navbar_main'>
                <nav className='navbar__main'>

                    <div className='navbar__izq'>

                    <Link to='/inicio' className='link logo'>Animep</Link>
                            <NavLink to='/animes' className='link item'>
                                Animes
                            </NavLink>
                            <NavLink to='/mangas' className='link item'>
                                Mangas
                            </NavLink>
                            

                            
                    </div>

                    <div className='navbar__der'>
                        <ul>
                            <span>
                                {name}
                            </span>

                            <button onClick={handleLogout}>
                                Cerrar sesion
                            <i className="fas fa-sign-out-alt"></i> 
                            </button>
                        </ul>
                    </div>
                </nav>

            </div>

            <Switch>
                <Route exact path='/inicio' component={PrincipalScreen} />
                <Route exact path='/animes' component={BuscarAnimeScreen} />
                <Route exact path='/mangas' component={BuscarMangaScreen} />


            </Switch>

        </Router >
    )
}