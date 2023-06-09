import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { getProducts } from './stock';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contacto from './paginas/Contacto';
import Productos from './paginas/Productos';
import Informacion from './paginas/Informacion';
import Inicio from './paginas/Inicio';
import Item from './components/Item/Item';
import Detalle from './paginas/Detalle'

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.log('Error al obtener los productos:', error);
      });
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/informacion" element={<Informacion />} />
          <Route path='/detail/:id' element={<Detalle />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;