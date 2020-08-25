import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/login';
import Main from './pages/main';
import Character from './pages/character';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/characters" component={Main} />
            <Route path="/character/:id" component={Character} />
        </Switch>
    </BrowserRouter>
);

export default Routes;