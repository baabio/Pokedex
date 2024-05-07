import React from 'react'
import { BrowserRouter, Routes, Route, Link  } from 'react-router-dom'
import Details from './Details'
import App from '../App'

const Base = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>} />
            <Route path='/pokemon/:id' element={<Details/>}  />
        </Routes>
    </BrowserRouter>
  )
}

export default Base