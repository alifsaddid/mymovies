import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage';
import BookmarkedMoviePage from './pages/BookmarkedMoviePage';
import FavoriteMoviePage from './pages/FavoriteMoviePage';

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Homepage} exact/>
                <Route path="/bookmark" component={BookmarkedMoviePage} exact/>
                <Route path="/favorite" component={FavoriteMoviePage} exact/>
            </Switch>
        </BrowserRouter>
    );
}