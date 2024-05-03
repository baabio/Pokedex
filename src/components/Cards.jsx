import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Cards = () => {
    const [pokemons, setPokemons] = useState([]);
    useEffect ( () => {
        axios.get('https://pokebuildapi.fr/api/v1/pokemon/limit/10').then(response =>{
            console.log(response.data)
            setPokemons(response.data)
        })
    }, [] ) 

  return (
    <div>
    <h1>Liste des Pokemon</h1> <hr />
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {pokemons.map((pokemon, index) => ( 
    <div key={pokemon.id}> {pokemon.name} </div>
      ))}
      </div>
    </div>

  )
}

export default Cards