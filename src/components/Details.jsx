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

    // useEffect(() => {
    //     const pokemonId = window.location.pathname.split('/').pop();
    //     axios.get(`https://pokebuildapi.fr/api/v1/pokemon/ability/${pokemonId}`)
    //         .then((res) => {
    //             setPokemon(res.data);
    //         })
    //         .catch((error) => {
    //             console.error('Error fetching Pokemon details:', error);
    //         });
    // }, []);
    return (
        <>
            <Navbar />
            <div>
                <img src={pokemon.image} alt="" height="450px" className='photo' />
            </div>
            <div className='nom'>{pokemon.name}</div>
            <hr />
            <div className="row justify-content-center">
                <div className="col-4">
                    ABILITIES
                <ul>
                    <li>Height:</li>
                    <li>Weight: {pokemon.id} </li>
                    <li>Base experience: {pokemon.Prototype} </li>
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