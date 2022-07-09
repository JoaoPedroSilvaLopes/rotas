// CSS
import './App.css';

// BIBLIOTECAS
import { Route, Routes, BrowserRouter } from 'react-router-dom'

// HOOKS
import { useState, useEffect, useRef } from 'react';
import useOnClickOutside from './hooks/useOnClickOutside';

// COMPONENTES
import Dashboard from './components/Dashboard/Dashboard';
import Products from './pages/Products/Products';
import Info from './pages/Info/Info';
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';

function App() {
  const [showDefault, setShowDefault] = useState(true)
  const [showMobile, setShowMobile] = useState(showDefault) // lidar com o mobile
  const ref = useRef()

  const handleShow = (e) => {
    e.preventDefault()
    setShowDefault(!showDefault)
  }




  useEffect(() => {
    setShowMobile(showDefault)
  }, [showDefault])

  function controlStates() {
    const {innerWidth} = window

    if (innerWidth < 768 && !showDefault && !showMobile) {
      setShowMobile(!showMobile)
      setShowDefault(!showDefault)
    } 
  }

  useOnClickOutside(ref, controlStates)


  
  return (
    <div className={ showDefault ? "App" : "AppBar"}>
      <BrowserRouter>
        <Routes>
          <Route element={<Dashboard handleShow={handleShow} showDefault={showDefault} reference={ref}/>}>
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