import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import { getProducts } from './stock';

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
    <Router>
      <div className="App">
        <NavBar />
        <ItemListContainer  products={products} />
      </div>
    </Router>
  );
}

export default App;