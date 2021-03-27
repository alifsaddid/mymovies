import React, { useState, useContext, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import noimage from '../images/noimage.jpg';
import Modal from './Modal';
import BookmarkedMovieContext from '../context/BookmarkedMovieContext';
import FavoriteMovieContext from '../context/FavoriteMovieContext';

const useStyles = createUseStyles({
    imageBox: {
        border: "1px solid #00B4CC",
        width: "23%",
        marginTop: "15px",
        "&:hover": {
            cursor: "pointer"
        }
    },
    poster: {
        maxWidth: "100%"
    },
    dataContainer: {
        padding: "5px"
    },
    detail: {
        padding: "10px",
        background: "#0069ff",
        width: "auto",
        marginBottom: "100px",
        color: "white",
        borderRadius: "8px"
    }
});

export default function MovieBox(props) {
    const classes = useStyles();
    const [isShowModal, setIsShowModal] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [isLiked, setIsLiked] = useState(false);

    const { bookmarked, setBookmarked } = useContext(BookmarkedMovieContext);
    const { favorite, setFavorite } = useContext(FavoriteMovieContext);

    useEffect(() => {

        setIsBookmarked(bookmarked?.reduce((acc, cur) => {
            return acc || cur.imdbID == props.movie.imdbID
        }, false));

        setIsLiked(favorite?.reduce((acc, cur) => {
            return acc || cur.imdbID == props.movie.imdbID
        }, false))
    }, [])

    function showModal() {
        setIsShowModal(true);
    }

    function closeModal() {
        setIsShowModal(false);
    }

    function checkIsBookmarked() {
        return isBookmarked;
    }

    function handleBookmark() {
        if (isBookmarked) {
            setIsBookmarked(false);
            setBookmarked(bookmarked.filter((movie) => movie.imdbID != props.movie.imdbID));
        } else {
            setIsBookmarked(true);
            setBookmarked([...bookmarked, props.movie])
        }
    }

    function checkIsLiked() {
        return isLiked;
    }

    function handleLike() {
        console.log(isLiked);
        if (isLiked) {
            setIsLiked(false);
            setFavorite(favorite.filter((movie) => movie.imdbID != props.movie.imdbID));
        } else {
            setIsLiked(true);
            setFavorite([...favorite, props.movie])
        }
    }

    return (
        <>
            <div className={classes.imageBox}>
                <img  onClick={showModal} src={(props.movie.Poster !== "N/A") ? props.movie.Poster : noimage } alt={props.movie.Title} className={classes.poster}/>
                <div className={classes.dataContainer}>
                    <h3  onClick={showModal}>{props.movie.Title}</h3>
                    <a  onClick={showModal} className={classes.detail}>Detail</a>
                    <br/>
                    <br/>
                    {!checkIsBookmarked() ? 
                        <svg onClick={handleBookmark} width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M5 0v24l7-6 7 6v-24h-14zm1 1h12v20.827l-6-5.144-6 5.144v-20.827z"/></svg>
                        :
                        <svg onClick={handleBookmark} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 24l-6-5.269-6 5.269v-24h12v24z"/></svg>
                    }
                    {!checkIsLiked() ?
                        <svg onClick={handleLike} width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.161"/></svg>
                        :
                        <svg onClick={handleLike} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/></svg>
                    }
                    </div>
            </div>
                {isShowModal && 
            <Modal imdb={props.movie.imdbID} onClose={closeModal}>
            </Modal>}
        </>
    )
}