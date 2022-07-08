// CSS
import './App.css';

// BIBLIOTECAS
import { Route, Routes, BrowserRouter } from 'react-router-dom'

// HOOKS
import { useState } from 'react';

// COMPONENTES
import Dashboard from './components/Dashboard/Dashboard';
import Products from './pages/Products/Products';
import Info from './pages/Info/Info';
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';

function App() {
  const [showDefault, setShowDefault] = useState(true)

  const handleShow = (e) => {
    e.preventDefault()
    setShowDefault(!showDefault)
  }
  
  function settarState() {
    setShowDefault(true)
  }

  return (
    <div className={ showDefault ? "App" : "AppBar"}>
      <BrowserRouter>
        <Routes>
          <Route element={<Dashboard handleShow={handleShow} showDefault={showDefault} settarState={settarState}/>}>
            <Route path="/" element={<Home />}/>
            <Route path="/products/:tipo" element={<Products />}/>
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


// pages
// import Home from './pages/Home/Home';
// import About from './pages/About/About';
// import Navbar from './components/Navbar/Navbar';
// import Products from './pages/Products/Products';
// import Info from './pages/Info/Info';
// import NotFound from './pages/NotFound/NotFound';
// import SeachForm from './components/SearchForm/SeachForm';
// import Search from './pages/Search/Search';