import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

function Header() {
  return (
    <div className="App"> 
             <Link className='mr' to="/" >Go to Home  </Link> 
             <Link className='mr' to="/about" > Go to About </Link> 
             <Link className='mr' to="/contact" > Go to Contacts </Link> 
             <Link className='mr' to="/sitemap" > Go to Sitemap </Link> 
    </div> 
  )
}

export default Header