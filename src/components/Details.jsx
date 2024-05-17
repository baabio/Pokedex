import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Details = () => {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        const pokemonId = window.location.pathname.split('/').pop();
        axios.get(`https://pokebuildapi.fr/api/v1/pokemon/${pokemonId}`)
            .then((res) => {
                setPokemon(res.data);
            })
            .catch((error) => {
                console.error('Error fetching Pokemon details:', error);
            });
    }, []);

    return (
        <>
            <Navbar />
            <div>
                <img src={pokemon.image} alt="" height="450px" className='photo' />
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="favori" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z" />
                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
                </svg>
            </div>
            <div className='nom'>{pokemon.name}</div>
            <hr />
            <div className="row justify-content-center">
                <div className="col-4">
                    ABILITIES
                    <ul>
                        <li>Height:</li>
                        <li>Weight: {pokemon.id} </li>
                        <li>Base experience: {pokemon.pokedexId} </li>
                    </ul>
                </div>
                <div className="col-4">
                    MOVES
                    <ul>
                        <li>Height:</li>
                        <li>Weight: {pokemon.id} </li>
                        <li>Base experience: {pokemon.Prototype} </li>
                    </ul>
                </div>
                <div className="col-4">
                    STATS
                    <ul>
                        <li>Height:</li>
                        <li>Weight: {pokemon.id} </li>
                        <li>Base experience: {pokemon.Prototype} </li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Details