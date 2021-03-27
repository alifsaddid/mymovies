import React, { useContext } from 'react';
import BookmarkedMovieContext from '../context/BookmarkedMovieContext';
import MovieBox from '../components/MovieBox';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    moviesContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        flexWrap: 'wrap'
    },
})

export default function BookmarkedMoviePage() {
    const classes = useStyles();

    const { bookmarked } = useContext(BookmarkedMovieContext);

    return (
        bookmarked.length == 0 ?
        "Belum ada film yang dibookmark"
        :
        <div className={classes.moviesContainer}>
            {bookmarked.map((movie) => <MovieBox movie={movie} />)}
        </div>
    )
}