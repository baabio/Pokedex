import { useState } from 'react'
import Navbar from './components/Navbar'
import Search from './components/Search'
import Cards from './components/Cards'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Search/>
     <Cards/>
    </>
  )
}

export default App
