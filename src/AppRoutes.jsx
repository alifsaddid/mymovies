import React from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage';
import BookmarkedMoviePage from './pages/BookmarkedMoviePage';
import FavoriteMoviePage from './pages/FavoriteMoviePage';
import { createUseStyles } from 'react-jss';
import './NavLinks.css';

const useStyle = createUseStyles({
    navLinks: {
        listStyle: "none",
        margin: 0,
        padding: 0,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    title: {

    },
    headerNav: {

    }
})

export default function AppRoutes() {
    const classes = useStyle();

    return (
        <Router>
            <nav>
                <ul className='nav-links'>
                    <li>
                        <NavLink to="/" exact>Homepage</NavLink>
                    </li>
                    <li>
                        <NavLink to="/bookmarked">Bookmarked</NavLink>
                    </li>
                    <li>
                        <NavLink to="/favorite">Favorite</NavLink>
                    </li>
                </ul>
            </nav>
            
            <Switch>
                <Route path="/" component={Homepage} exact/>
                <Route path="/bookmarked" component={BookmarkedMoviePage} exact/>
                <Route path="/favorite" component={FavoriteMoviePage} exact/>
            </Switch>
        </Router>
    );
}