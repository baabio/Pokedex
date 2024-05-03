import React from 'react'
import img1 from '../assets/Images/International_Pokémon_logo.svg.png'

const Navbar = () => {
  return (
    <nav class="navbar fixed-top bg-primary" data-bs-theme="dark">
      <img src={img1} alt="pokemon" height='50px' className='d-flex justify-content-center'/>
  </nav>
  )
}

export default Navbar