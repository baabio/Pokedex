import React from 'react'

const Search = () => {
  return (
    <div>
         <form className="chercher" role="search">
      <input className="" type="search" placeholder="Search..." aria-label="Search"/>
      <button className="btn btn-outline" type="submit">Search</button>
    </form>
    </div>
  )
}

export default Search