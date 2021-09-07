import React from "react";
import Movie from "./Movie";

const movieList = ({ movies, detailedView }) => {
    return (
        <div>
            {
                movies.map((movie, i) => (
                    <Movie key={i} movie={movie} detailedView={detailedView}></Movie>
                ))
            }
        </div>
    )
}

export default movieList;