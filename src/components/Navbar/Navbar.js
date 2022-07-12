// CSS
import './Navbar.css'

// COMPONENTES
import NavBarLink from '../NavBarLink/NavBarLink';
import NavBarLogout from '../NavBarLogout/NavBarLogout';
import NavBarMenu from '../NavBarMenu/NavBarMenu';

const Navbar = ( { showDefault, reference } ) => {

  const setores = [['Processador', 'bi:cpu', ['AMD', 'Intel']], ["Memoria", 'bi:memory', ['Corsair', 'XPG', 'Cruciall', 'G.SKill']], 
  ['GPUs', 'bi:gpu-card', ['AMD', 'Nvidia']], ['Armazenamento', 'bi:device-hdd', ['Seagate', 'Western Digital', 'Kingston', 'XPG']], 
  ['Fonte', 'entypo:power-plug', ['XPG', 'Corsair', 'Thermaltake']], ['Gabinete', 'bi:pc', ['Corsair', 'Thermaltake', 'Asus', 'Redragon']]]

  return (
    <nav className={ !showDefault ? "divNavBar" : "show" } ref={reference}>
      <div className='layer'>
        <NavBarMenu />
        {setores.map((setor, index) => {
          return <NavBarLink 
            rota={`/products/${setor[0].toLowerCase()}`}
            nomeIcone={setor[1]} 
            texto={setor[0]} 
            marcas={setor[2]}
            key={index}
          />
        })}
      </div>
      <NavBarLogout />
    </nav>
  )
}

export default Navbar