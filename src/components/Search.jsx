import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Search = () => {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [keyWord, setKeyWord] = useState("");
  const navigate = useNavigate();
  const searchByName = (keyWord) => {
    setFilteredPokemons(pokemons.filter(pokemons => pokemons.name.toLowerCase().includes(keyWord)))
    console.log(filteredPokemons);
  }

  return (
    <div>
      <form className="chercher" role="search">
        <input className="bouton" type="search" placeholder="Search..." onChange={(e) => searchByName(e.target.value)} />
        <button className="btn btn-outline" type="submit" onClick={() => goToDetail(pokemons.id)}>Search{pokemons.name}</button>
      </form>
    </div>
  )
}

export default Search