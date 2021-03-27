import React, { useEffect, useState, useContext } from 'react';
import fromApi from '../actions/fromApi.js';
import useFromApi from '../hooks/useFromApi.js';
import MovieBox from '../components/MovieBox';
import { createUseStyles } from "react-jss";
import BookmarkedMovieContext from '../context/BookmarkedMovieContext';
import FavoriteMovieContext from '../context/FavoriteMovieContext';

const useStyles = createUseStyles({
    moviesContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        flexWrap: 'wrap'
    },
    searchTerm: {
        marginTop: "20px",
        width: "20%",
        border: "3px solid #00B4CC",
        borderRight: "none",
        padding: "5px",
        height: "20px",
        borderRadius: "5px 0 0 5px",
        outline: "none",
        color: "#9DBFAF"
    },
    search: {
        
    }, 
    searchButton: {
        width: "40px",
        height: "36px",
        border: "1px solid #00B4CC",
        background: "#00B4CC",
        textAlign: "center",
        color: "#FFF",
        borderRadius: "0 5px 5px 0",
        cursor: "pointer",
    }
})

export default function Homepage() {
    const classes = useStyles();

    const [keywordInput, setKeywordInput] = useState();
    const [keywordSearch, setKeywordSearch] = useState();
    const [movies, setMovies] = useState("hello");
    const { loading, data } = useFromApi(fromApi.searchMovie(keywordSearch, 1), [keywordSearch]);
    
    const { bookmarked, setBookmarked } = useContext(BookmarkedMovieContext);
    const { favorite, setFavorite } = useContext(FavoriteMovieContext);

    function inputHandler(e) {
        setKeywordInput(e.target.value);
    }

    function submitHandler(e) {
        e.preventDefault();
        setKeywordSearch(keywordInput);
    }

    useEffect(() => {
        setMovies(data);
    }, [data]);

    return (
        <>
            <form onSubmit={submitHandler}>
                <div className={classes.search}>
                    <input type="text" className={classes.searchTerm} placeholder="Mau cari film apa?" value={keywordInput} onInput={inputHandler} required></input>
                    <button type="submit" className={classes.searchButton}>Cari</button>
                </div>
            </form>
            <div className={classes.moviesContainer}>
                {loading ? 
                    "Loading"
                    :
                    movies?.data?.Search?.map((movie) => <MovieBox movie={movie} />)
                }
            </div>
        </>
    );
}