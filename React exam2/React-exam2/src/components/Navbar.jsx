import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <div>
      <nav>
        <h1>Кітап сөресі</h1>
        <Link to="/home">Home</Link>
        <Link to="/galery"> Book Galery </Link>
        
       
      </nav>
    </div>
  )
}

