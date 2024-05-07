import { useState } from 'react'
import Navbar from './components/Navbar'
import Search from './components/Search'
import Liste from './components/Liste'
import Cartes from './components/Cartes'
import Details from './components/Details'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Search/>
     <Liste/>
     <Cartes/>
     {/* <Details/> */}
    </>
  )
}

export default App
