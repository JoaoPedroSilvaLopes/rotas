// CSS
import './NavBarMenu.css'

// BIBLIOTECAS
import { NavLink } from 'react-router-dom'
import { Icon } from '@iconify/react';

const navBarMenu = () => {
  return (
    <NavLink to='/' className='navBarMenu' >
      <Icon icon='fa-solid:layer-group' width="25" height="25"/>
      <span className="titleNavBarMenu">CATÁLOGO</span>
    </NavLink>
  )
}

export default navBarMenu