//Sistema de rutas principal
import React from  'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { AnimeScreen } from '../components/Anime/AnimeScreen';
import { NavBar } from '../components/ui/NavBar';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
    return(

        <Router>
            <div>
                <Switch>
                    <Route path='/auth' component={AuthRouter} />
                    <Route exact path='/inicio' component={AnimeScreen} />
                    <Redirect to='/inicio' />
                </Switch>
            </div>
        </Router>

    )
}