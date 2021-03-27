import React from 'react';
import { createUseStyles } from 'react-jss';
import fromApi from '../actions/fromApi';
import useFromApi from '../hooks/useFromApi';
import MovieDetail from './MovieDetail';

const useStyles = createUseStyles({
    modal: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.6)",
        "&:hover": {
            cursor: "pointer"
        }
    },
    displayBlock: {
        display: "block"
    },
    modalMain: {   
        position: "fixed",
        background: "white",
        width: "80%",
        height: "auto",
        maxHeight: "90%",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        overflow: "scroll"
    },
});

export default function Modal(props) {
    const classes = useStyles();

    const {loading, data} = useFromApi(fromApi.getMovieDetail(props.imdb), []);

    return (
        <div className={`${classes.modal} ${classes.displayBlock}`} onClick={props.onClose}>
            <section className={classes.modalMain}>
                {loading ?
                    <p>Loading</p>
                    :
                    <MovieDetail movie={data}/>
                }
            </section>
        </div>
    )
}