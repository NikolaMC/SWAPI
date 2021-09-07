import React, { useState, useEffect } from "react";

const MovieDetails = ({ movieDetails, setView }) => {

    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    const getCharacters = async () => {
        const character = await Promise.all(movieDetails.characters.map(url => fetch(url).then(character => character.json())));
        setCharacters(character.sort((a, b) => {
            if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
            if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
            return 0;
        }));
        setLoading(false);
    }

    useEffect(() => { 
        getCharacters();
     }, []);

    const goBack = () => {
        setView("");
    }

    return (
        <div>
            {
                loading ? <h1>Loading...</h1> : 
                <div>
                    <button onClick={goBack}>Go back</button>
                    <h1>{movieDetails.title}</h1>
                    <h2>Characters:</h2>
                    {
                        characters.map((character, i) => (
                            <p key={i}>{character.name}</p>
                        ))
                    }
                </div>
            }

        </div>
    )
}

export default MovieDetails;