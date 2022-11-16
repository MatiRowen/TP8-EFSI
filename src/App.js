import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import QuienSomos from './pages/QuienSomos';
import DetalleProducto from './pages/DetalleProducto';
import Productos from './pages/Productos';
import Contacto from './pages/Contacto';
import Carrito from './pages/Carrito';
import Navbar from './components/NavBar';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>     
          <Route path='/' element={<Home />} />
          <Route path='/QuienSomos' element={<QuienSomos/>} />
          <Route path='/DetalleProducto/:id' element={<DetalleProducto />} />
          <Route path='/Productos' element={<Productos/>} />
          <Route path='/Contacto' element={<Contacto/>} />
          <Route path='/Carrito' element={<Carrito/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
