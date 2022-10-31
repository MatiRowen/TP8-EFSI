import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import QuienSomos from './pages/QuienSomos';
import Productos from './pages/Productos';
import Contacto from './pages/Contacto';
import Carrito from './pages/Carrito';


function App() {
  return (
    <BrowserRouter>
      <Routes>     
          <Route path='/' element={<Home />} />
          <Route path='/QuienSomos' element={<QuienSomos/>} />
          <Route path='/Productos' element={<Productos/>} />
          <Route path='/Contacto' element={<Contacto/>} />
          <Route path='/Carrito ' element={<Carrito />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
