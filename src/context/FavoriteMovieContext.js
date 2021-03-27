import { createContext } from 'react';

const FavoriteMovieContext = createContext({
    favorite: [],
    setFavorite: () => {}
});
export default FavoriteMovieContext;