import React from 'react'
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'
import call from '../../assets/call.png'
import whatsapp from '../../assets/whatsapp.png'

const Header = () => {
  return (
    <div className='flex flex-cols'>
      
      <div className='w-100'>
        <img src={logo}   alt='logo icon' className='h-20'/>
        <h2>COLLABORATED WITH NIHA TAILOR</h2>
      </div>
      <div className='flex gap-10'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/service">Service</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
      </div>
      <div>
        <img src={whatsapp} alt='whatsapp'/>
        <img src={call} alt='call icon'/>
      </div>
    </div>
  )
}

export default Header