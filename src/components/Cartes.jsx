import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
// import PokemonList from './PokemonList'

const Cartes = () => {
    const [pokemons, setPokemons] = useState([]);
    useEffect ( () => {
        axios.get('https://pokebuildapi.fr/api/v1/pokemon/limit/27').then(response =>{
            console.log(response.data)
            setPokemons(response.data)
        })
    }, [] ) 

    return (
        <>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {pokemons.map(pokemon => (
                    <div className="col">
                        <div className="card">
                            <img src={pokemon.image} className="card-img-top" alt="images" />
                            <div className="card-body" key={pokemon.image}>
                                <h5 className="card-title"> {pokemon.name} </h5>
                                <p className="card-text">x{pokemon.id}</p>
                                <button className='btns'>View details</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Cartes