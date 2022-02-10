//Sistema de rutas principal
import React, { useEffect } from  'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    BrowserRouter as Router,
    Switch,
    Redirect,
} from "react-router-dom";
import { startChecking } from '../components/actions/auth';
import { AnimeScreen } from '../components/Anime/AnimeScreen';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    const dispatch = useDispatch();
    const {checking, uid} = useSelector( state => state.auth );

    useEffect(() =>{
        dispatch(startChecking());
    }, [dispatch]);

    if(checking){
        return <h5>Agregar componente espere</h5>
    }


    return(

        <Router>
            <div>
                <Switch>

                    <PublicRoute 
                    // exact 
                    path='/auth' 
                    component={AuthRouter} 
                    isAuthenticated={!!uid} />


                    <PrivateRoute 
                    exact 
                    path='/inicio' 
                    component={AnimeScreen} 
                    isAuthenticated={!!uid} />
                    
                    <Redirect to='/inicio' />

                </Switch>
            </div>
        </Router>

    )
}