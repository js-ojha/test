import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

function Header() {
  return (
    <div className="App"> 
             <Link className='mr' to="test/" >Go to Home  </Link> 
             <Link className='mr' to="test/about" > Go to About </Link> 
             <Link className='mr' to="test/contact" > Go to Contacts </Link> 
             <Link className='mr' to="test/sitemap" > Go to Sitemap </Link> 
    </div> 
  )
}

export default Header