// CSS
import './App.css';

// BIBLIOTECAS
import { Route, Routes, BrowserRouter } from 'react-router-dom'

// HOOKS
import { useState, useRef } from 'react';
import useOnClickOutside from './hooks/useOnClickOutside';

// COMPONENTES
import Dashboard from './components/Dashboard/Dashboard';
import Products from './pages/Products/Products';
import Info from './pages/Info/Info';
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';

function App() {
  const [showDefault, setShowDefault] = useState(true)

  /* 
    referenciar a sidebar para possibilitar o filtro de
    click em locais que não são a propria sidebar
  */
  const ref = useRef()

  /* 
    handleShow é responsável por controlar prioritariamente o estado de 
    showDefault possibilitando que o botão de menu mude o estilo da sidebar
    com base no estado de showDefault
  */
  const handleShow = (e) => {
    e.preventDefault()
    setShowDefault(!showDefault)
  }

  /*
    Função encarregada de pegar a largura atual da pagina
    para filtrar a funcionalidade do hook useOnClickOutside
    somente no tamanho mobile e manipulando showDefault para
    manter sua funcionalidade
  */
  function controlState() {
    const {innerWidth} = window // capturar a largura atual da pagina

    if (innerWidth < 768 && !showDefault) {
      setShowDefault(!showDefault)
    }
  }

  // Hook para clicar fora da sidebar e a mesma fechar
  useOnClickOutside(ref, controlState)

  return (
    <div className={ showDefault ? "App" : "AppBar"}>
      <BrowserRouter>
        <Routes>
          <Route element={
            <Dashboard handleShow={handleShow} 
            showDefault={showDefault} 
            reference={ref}/>
          }>
            <Route path="/" element={<Home />}/>
            <Route path="/products/:tipo" element={<Products />}/>S
            <Route path="/products/:tipo/:modelo" element={<Info />}/>
            <Route path="*" element={<NotFound />}/>
          </Route>
          {/* <Route path="/search" elemento={<Search />}/>*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;