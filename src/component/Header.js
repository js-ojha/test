import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

function Header() {
  return (
    <div className="App"> 
             <Link to="/" >Go to Home  </Link> 
             <Link to="/about" > Go to About </Link> 
             <Link to="/contact" > Go to Contacts </Link> 
    </div> 
  )
}

export default Header