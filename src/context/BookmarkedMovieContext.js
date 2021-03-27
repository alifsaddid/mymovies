import { createContext } from 'react';

const BookmarkedMovieContext = createContext({
    bookmarked: [],
    setBookmarked: () => {}
});
export default BookmarkedMovieContext;