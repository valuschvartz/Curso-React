import React, { useState, useEffect } from 'react';
import { getProducts } from '../../stock';
import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount'; // Importa el componente ItemCount
import { Link } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="catalog-container">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.img} alt={product.name} className="product-image" />
          <h3 className="product-name">{product.name}</h3>
          <p className="product-price">${product.price}</p>
          <ItemCount stock={product.stock} initial={1} onAdd={(quantity) => console.log('Cantidad agregada', quantity)} />
          <Link to={`/detail/${product.id}`}>
          <button className='Button'>Descripcion</button>
          </Link>
        </div>
      ))}
    </div>
  );
};


export default ItemListContainer;