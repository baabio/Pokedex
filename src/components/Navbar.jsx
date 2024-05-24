import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../assets/Images/International_Pokémon_logo.svg.png'

const Navbar = () => {
  return (
    <nav className="navbar fixed-top bg" data-bs-theme="dark">
      <Link to='/'><img src={img1} alt="pokemon" height='50px' className='baba'/></Link>
  </nav>
  )
}

export default Navbar