// CSS
import './NavBarLink.css'

// HOOKS 
import { useState } from 'react';

// BIBLIOTECAS
import { NavLink } from 'react-router-dom'
import { Icon } from '@iconify/react';

const NavBarLink = ( {rota, nomeIcone, texto, marcas} ) => {
  const [openNavLink, setOpenNavLink] = useState(false)

  const handleOpen = (e) => {
    e.preventDefault()
    setOpenNavLink(!openNavLink)
  }

  return (
    <>
      <NavLink to={rota} className='navBarLink'>
        <div className='container'>
          <Icon className="menu" icon={nomeIcone} width="20" height="20"/>
          <span className="navBarLinkName">{texto}</span>
        </div>
        <Icon className="dropDownButton" icon='dashicons:arrow-right-alt2' width="20" height="20" onClick={handleOpen}/>
      </NavLink>
      {!openNavLink ? 
        <></> : 
        marcas.map((marca, index) => {
          return (
            <NavLink to={rota} className={({ isActive }) => isActive ? 'navBarActive' : 'dropDownNavLink'} key={(index+1) * 10}>
              <span className="navBarLinkName">{marca}</span>
            </NavLink>
          )
        })
      }
    </>
  )
}

export default NavBarLink