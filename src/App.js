import './App.css';
import { useState } from 'react';
import AppRoutes from "./AppRoutes";
import { createUseStyles } from 'react-jss';
import FavoriteMovieContext from './context/FavoriteMovieContext';
import BookmarkedMovieContext from './context/BookmarkedMovieContext';
import { NavLink, Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import BookmarkedMoviePage from './pages/BookmarkedMoviePage';
import FavoriteMoviePage from './pages/FavoriteMoviePage';

const useStyles = createUseStyles({
  container: {
    width: "90%"
  }
})


function App() {
  const classes = useStyles();
  const [bookmarked, setBookmarked] = useState([]);
  const [favorite, setFavorite] = useState([]);

  const bookmarkedMovieContext = { bookmarked, setBookmarked }
  const favoriteMovieContext = { favorite, setFavorite }

  return (
    <FavoriteMovieContext.Provider value={favoriteMovieContext}>
      <BookmarkedMovieContext.Provider value={bookmarkedMovieContext}>
        <div className={classes.container}>
          <Router>
            <ul>
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
            
            <Switch>
                <Route path="/" component={Homepage} exact/>
                <Route path="/bookmarked" component={BookmarkedMoviePage} exact/>
                <Route path="/favorite" component={FavoriteMoviePage} exact/>
            </Switch>
          </Router>
        </div>
      </BookmarkedMovieContext.Provider>
    </FavoriteMovieContext.Provider>
  );
}

export default App;
