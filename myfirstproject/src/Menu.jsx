import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
     <h3>
        <Link to='/home'>Home</Link> || 
        <Link to='/about'>About</Link> || 
        <Link to='/contact'>Contact</Link>  ||   
        <Link to='/lifecycle'> Lifecycle - Class</Link> ||    
        <Link to='/lifecyclefunc'> Lifecycle - Function</Link>         
        </h3>
    </div>
  )
}

export default Menu
