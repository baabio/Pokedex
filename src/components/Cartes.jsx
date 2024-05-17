import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const Cartes = () => {
    const [pokemons, setPokemons] = useState([]);
    useEffect ( () => {
        axios.get('https://pokebuildapi.fr/api/v1/pokemon/limit/36').then(response =>{
            console.log(response.data)
            setPokemons(response.data)
        })
    }, [] ) 

    return (
        <>
<Navbar/>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {pokemons.map((pokemon, index) => (
                    <div className="col">
                        <div className="card">
                            <img src={pokemon.image} className="card-img-top" alt="images" />
                            <div className="card-body" key={index}>
                                <h5 className="card-title"> {pokemon.name} </h5>
                                <p className="card-text" >x{pokemon.id}</p>
                                <Link to={`/pokemon/${pokemon.id}`}  ><button className='btns'>Voir {pokemon.name}</button></Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Cartes