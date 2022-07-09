// CSS
import './Navbar.css'

// COMPONENTES
import NavBarLink from '../NavBarLink/NavBarLink';

const Navbar = ( { showDefault, reference } ) => {

  const setores = [['Processador', 'bi:cpu'], ['Memória', 'bi:memory'], ['Placa de vídeo', 'bi:gpu-card'], 
  ['Armazenamento', 'bi:device-hdd'], ['Fonte', 'entypo:power-plug'], ['Gabinete', 'bi:pc']]

  return (
    <nav className={ !showDefault ? "divNavBar" : "show" } ref={reference}>
      <div className="layer">
        <NavBarLink 
          rota="/" 
          classname="navBarLogo" 
          nomeIcone="fa-solid:layer-group" 
          texto={"CATÁLOGO"} 
          key={1}
        />
        {setores.map((setor, index) => {
          return <NavBarLink 
            rota={`/products/${setor[0].toLowerCase()}`}
            classname="navBarLink" 
            nomeIcone={setor[1]} 
            texto={setor[0]} 
            key={index}
          />
        })}
      </div>
      <NavBarLink 
        rota="/"
        classname="navBarLogout" 
        nomeIcone="ri:logout-box-line" 
        texto={"Log out"} 
        key={2}
      />
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