import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartView from './components/CartView/CartView';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { CartContextProvider } from './CartContext/CartContext';
import Footer from './components/Footer';
import CheckOut from './pages/CheckOut/index';
import Inicio from './pages/Inicio/index';
import Servicios from './pages/Servicios/index';
import Acerca from './pages/Acerca/index';
import Contacto from './pages/Contacto/index';
import firebaseApp from './services/FireStore';

function App() {
  return (
    <>
      <CartContextProvider>
        <HashRouter>
          <NavBar />
          <main>
            <Routes>
              <Route path="/inicio" element={<Inicio />} />
              <Route path="/servicios" element={<Servicios />} />
              <Route path="/acercade" element={<Acerca />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/checkout" element={<CheckOut />} />
              <Route path="/item/:id" element={<ItemDetailContainer greeting="Detalle de producto" />} />
              <Route path="/" element={<ItemListContainer greeting="Menú!" />} />
              <Route path="/cart" element={<CartView greeting="Este es su carrito" />} />
              <Route path="/category/:category" element={<ItemListContainer greeting="Categoría" />} />
            </Routes>
            <hr />
            <div className="back1">
              <div className="back1 back2">
                <div className="back1 back3"></div>
              </div>
            </div>
          </main>
          <Footer />
        </HashRouter>
      </CartContextProvider>
    </>
  );
}

export default App;
