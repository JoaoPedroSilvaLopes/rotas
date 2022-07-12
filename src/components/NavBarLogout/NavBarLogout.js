// CSS
import './NavBarLogout.css'

// BIBLIOTECAS
import { NavLink } from 'react-router-dom'
import { Icon } from '@iconify/react';

const NavBarLogout = () => {
  return (
    <NavLink to="/" className='navBarLogout'>
      <Icon icon='ri:logout-box-line' width="25" height="25"/>
      <span className="textLogout">Log out</span>
    </NavLink>
  )
}

export default NavBarLogout