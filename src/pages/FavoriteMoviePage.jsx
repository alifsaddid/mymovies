import React, { useContext } from 'react';
import FavoriteMovieContext from '../context/FavoriteMovieContext';
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

export default function FavoriteMoviePage() {
    const classes = useStyles();

    const { favorite } = useContext(FavoriteMovieContext);

    return (
        favorite.length == 0 ?
        "Belum ada film yang dibookmark"
        :
        <div className={classes.moviesContainer}>
            {favorite.map((movie) => <MovieBox movie={movie} />)}
        </div>
    )
}