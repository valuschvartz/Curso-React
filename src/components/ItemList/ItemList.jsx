import React from 'react';
import Item from '../Item/Item.js';
import './ItemList.css';
import { Container } from 'react-bootstrap';

function ItemList({ items }) {
  return (
    <>
      {items.map((item) => (
        <Container key={item.id}>
          {/* Pasamos las props con los nombres adecuados */}
          <Item
            img={item.img}
            category={item.category}
            stock={item.stock}
            id={item.id}
            nombre={item.nombre}
            descripcion={item.descripcion}
            precio={item.precio}
          />
        </Container>
      ))}
    </>
  );
}

export default ItemList;
