import './Navbar.css'

import { Link, NavLink } from 'react-router-dom'

import { Icon } from '@iconify/react';

const Navbar = ( { show } ) => {
  const setores = [['Processador', 'bi:cpu'], ['Memória', 'bi:memory'], ['Placa de vídeo', 'bi:gpu-card'], 
  ['Armazenamento', 'bi:device-hdd'], ['Fonte', 'entypo:power-plug'], ['Gabinete', 'bi:pc']]

  return (
    <nav className={ show === false ? "divNavBar" : "show" }>
      <div className="layer">
        <div className="navBarLogo">
          <Icon className="menu" icon="fa-solid:layer-group" width="24" height="24"/>
          <span className="navBarLinkName">CATÁLOGO</span>
        </div>
        <div className="navBarList">
          {setores.map((setor, index) => {
            return <a href="#" className="navBarLink" key={index}>
              <Icon className="categoriaIcone" icon={setor[1]} width="24" height="24" />
              <span className="navBarLinkName">{setor[0]}</span>
            </a>
          })}
        </div>
      </div>
      <a href="#" className="navBarLink">
        <Icon className="botaoSair" icon="ri:logout-box-line" width="24" height="24" />
        <span className="navBarLinkName">Log out</span>
      </a>
    </nav>
  )
}

export default Navbar

// <nav>
    //     <Link to="/">HOME</Link>
    //     <Link to="/about">SOBRE</Link>
    //     <NavLink to="/" className={({isActive}) => (isActive ? 'ativo' : 'naoAtivo')}>HOME</NavLink>
    //     <NavLink to="/about" className={({isActive}) => (isActive ? 'ativo' : 'naoAtivo')}>SOBRE</NavLink>
    // </nav>