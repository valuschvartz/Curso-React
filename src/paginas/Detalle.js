import React, { useState, useEffect } from 'react';
import { getProductsById } from '../stock';
import ItemDetail from '../components/ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getProductsById(id)
      .then(response => {
        setProduct(response);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  return (
    <div className="ItemDetailContainer">
      {product && <ItemDetail {...product} />}
    </div>
  );
};

export default ItemDetailContainer;