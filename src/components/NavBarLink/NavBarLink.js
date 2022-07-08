// CSS
import './NavBarLink.css'

// BIBLIOTECAS
import { NavLink } from 'react-router-dom'
import { Icon } from '@iconify/react';

const NavBarLink = ( {rota, classname, nomeIcone, texto} ) => {
  return (
    <NavLink to={rota} className={classname} >
        <Icon className="menu" icon={nomeIcone} width="24" height="24"/>
        <span className="navBarLinkName">{texto}</span>
    </NavLink>
  )
}

export default NavBarLink