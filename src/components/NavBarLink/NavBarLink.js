// CSS
import './NavBarLink.css'

// BIBLIOTECAS
import { NavLink } from 'react-router-dom'
import { Icon } from '@iconify/react';

const NavBarLink = ( {rota, activeClassName, classname, nomeIcone, texto} ) => {
  return (
    <NavLink to={rota} className={({ isActive }) => isActive ? activeClassName : classname}>
        <Icon className="menu" icon={nomeIcone} width="20" height="20"/>
        <span className="navBarLinkName">{texto}</span>
    </NavLink>
  )
}

export default NavBarLink