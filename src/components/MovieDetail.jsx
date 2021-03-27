import React from 'react';
import { createUseStyles } from 'react-jss';
import noimage from '../images/noimage.jpg';

const useStyles = createUseStyles({
    container: {
        display: "grid",
        gridTemplateColumns: "3fr 7fr",
        padding: "10px",
        "@media (max-width: 792px)": {
            gridTemplateColumns: "1fr"
        }
    },
    poster: {
        maxWidth: "100%",
    },
    icon: {
        marginRight: "5px"
    },
    icontext: {
        marginRight: "10px"
    },
});

export default function MovieDetail(props) {
    const classes = useStyles();

    console.log(props.movie);

    return (
        <div className={classes.container}>
            <div>
                <img src={(props?.movie?.data?.Poster !== "N/A") ? props?.movie?.data?.Poster : noimage } alt={props?.movie?.data?.Title} className={classes.poster}/>
            </div>
            <div className={classes.detailContainer}>
                <h1>{props?.movie?.data?.Title} ({props?.movie?.data?.Year})</h1>
                <svg className={classes.icon} viewBox="0 0 24 24" width="12" height="12" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 11h6v1h-7v-9h1v8z"/></svg>
                <span className={classes.icontext}>{props?.movie?.data?.Runtime}</span>
                <svg className={classes.icon} viewBox="0 0 24 24" width="15" height="15" fill="gold" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                <span>{props?.movie?.data?.imdbRating}</span>
                <p>{props?.movie?.data?.Plot}</p>
                <p>Genre: {props?.movie?.data?.Genre}</p>
                <p>Director: {props?.movie?.data?.Director}</p>
                <p>Actors: {props?.movie?.data?.Actors}</p>
            </div>
        </div>
    );
}