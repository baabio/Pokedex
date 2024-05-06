import { useState } from 'react'
import Navbar from './components/Navbar'
import Search from './components/Search'
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
     <Cartes/>
    </>
  )
}

export default App
