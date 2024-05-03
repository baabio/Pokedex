import { useState } from 'react'
import Navbar from './components/Navbar'
import Search from './components/Search'
// import PokemonList from './components/PokemonList'
import Liste from './components/Liste'
import Cartes from './components/Cartes'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Search/>
     <Liste/>
     {/* <PokemonList/> */}
     <Cartes/>
    </>
  )
}

export default App
