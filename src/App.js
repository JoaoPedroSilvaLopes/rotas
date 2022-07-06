import './App.css';
import './components/Header/Header.css'

import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';

import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';

function App() {
  const [show, setShow] = useState(true)

  const handleShow = (e) => {
    e.preventDefault()
    setShow(!show)
  }

  return (
    <div className="App">
      <Header handleShow={handleShow} show={show}/>
      <Navbar show={show}/>
    </div>
  );
}

export default App;

// ROTAS

// 1 - CONFIGURANDO O REACT ROUTER
//import {BrowserRouter, Routes, Route} from "react-router-dom"

// pages
// import Home from './pages/Home/Home';
// import About from './pages/About/About';
// import Navbar from './components/Navbar/Navbar';
// import Products from './pages/Products/Products';
// import Info from './pages/Info/Info';
// import NotFound from './pages/NotFound/NotFound';
// import SeachForm from './components/SearchForm/SeachForm';
// import Search from './pages/Search/Search';

{/* <BrowserRouter>
        <Navbar></Navbar>
        <SeachForm></SeachForm>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/products/:id" element={<Products />}/>
          <Route path="/products/:id/info" element={<Info />}/>
          <Route path="/search" elemento={<Search />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter> */}