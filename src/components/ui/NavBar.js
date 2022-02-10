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

export const NavBar = () => {

    const {name} = useSelector( state => state.auth );
    const dispatch = useDispatch();

    const handleLogout = () =>{
        dispatch(startLogout());
    }


    return (

        <Router>

            <div>
                <nav className='navbar__main'>

                    <Link to='/inicio' className='link'>Animep</Link>

                    <div className='navbar__izq'>
                        <div>
                            <NavLink to='/animes' className='link item'>
                                Animes
                            </NavLink>
                            <NavLink to='/mangas' className='link item'>
                                Mangas
                            </NavLink>
                        </div>
                    </div>

                    <div className='navbar__der'>
                        <ul>
                            <span>
                                {name}
                            </span>

                            <button onClick={handleLogout}>
                                Logout
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