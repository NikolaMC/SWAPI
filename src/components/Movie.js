import React from "react";

const Movie = ({ movie, detailedView }) => {

    const getMovie = () => {
        detailedView(movie);
    }

    return (
        <div onClick={getMovie}>
            <h1 className="homeTitle">{movie.title} - {movie.release_date}</h1>
        </div>
    )
}

export default Movie;