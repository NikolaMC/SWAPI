import React, { useState, useEffect } from "react";
import MovieDetails from "./components/MovieDetails";
import MovieList from "./components/MovieList";
import "./App.css";

const App = () => {

    const [movies, setMovies] = useState([]);
    const [movieDetails, setMovieDetails] = useState({});
    const [loading, setLoading] = useState(true);
    const [view, setView] = useState("");

    const getMovies = async () => {
        const res = await fetch("https://swapi.dev/api/films");
        const data = await res.json();
        setMovies(data.results);
        setLoading(false);
    }

    useEffect(() => { getMovies() }, []);

    const detailedView = (selectedMovie) => {
        setMovieDetails(selectedMovie);
        setView("movieDetails");
    }

    switch (view) {
        case "movieDetails":
            return (
                <div className="App">
                    <MovieDetails movieDetails={movieDetails} setView={setView}></MovieDetails>
                </div>
            )
        default:
            return (
                <div className="App">
                    {loading ? <h1>Loading...</h1> : <MovieList movies={movies} detailedView={detailedView}></MovieList>}
                </div>
            )
    }
}

export default App;
