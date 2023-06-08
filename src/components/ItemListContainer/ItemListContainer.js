import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../stock';
import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (categoryId) {
      getProductsByCategory(categoryId)
        .then((response) => {
          setProducts(response);
        })
        .catch((error) => {
          console.error('Error al obtener los productos por categoría:', error);
        });
    } else {
      getProducts()
        .then((response) => {
          setProducts(response);
        })
        .catch((error) => {
          console.error('Error al obtener los productos:', error);
        });
    }
  }, [categoryId]);

  const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredProducts = products.filter((product) => product.category === categoryId);
        resolve(filteredProducts);
      }, 500);
    });
  };

  return (
    <div className="catalog-container">
      <h1>{greeting}</h1>
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.img} alt={product.name} className="product-image" />
          <h3 className="product-name">{product.name}</h3>
          <p className="product-price">${product.price}</p>
          <ItemCount stock={product.stock} initial={1} onAdd={(quantity) => console.log('Cantidad agregada', quantity)} />
        </div>
      ))}
    </div>
  );
};

export default ItemListContainer;
