import React from 'react'
import { useState,useRef } from 'react'
import './navbar.css'
import {SiDatabricks} from 'react-icons/si'
import {FaBars ,FaTimes} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const hanNav =()=>setNav(!nav)


  return (
    <div name='top' className='navbar' >
      <div className="containerB" >
        <div className="logo">
            <SiDatabricks className='icon'/>
            <h1> Secured </h1>
        </div>
        <ul className={nav ? 'nav-menu active': 'nav-menu'}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/recovery'>Recovery</Link></li>
            <li><Link to='/cloud'>Cloud</Link></li>
            <li><Link to='/contact'>Content</Link></li>
            <button>Sign in </button>
        </ul>
        <div className="burger" onClick={hanNav}>
          {!nav ? (<FaBars className='icon'/>):(<FaTimes className='icon'/>)}
       
      </div>
      </div>
      
    </div>
  )
}

export default Navbar
