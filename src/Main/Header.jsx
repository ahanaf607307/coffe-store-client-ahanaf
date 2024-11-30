import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'


 
function Header() {
  
  return (
    <div className='h-20 bg-base-200 flex gap-x-5 font-bold text-2xl'>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/signin'>SignIn</NavLink>
      <NavLink to='/signup'>SignUp</NavLink>
      <NavLink to='/users'>Users</NavLink>
    </div>
  )
}

export default Header
