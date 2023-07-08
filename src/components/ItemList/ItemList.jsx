import React from 'react';
import Item from '../Item/Item.js';
import './ItemList.css';
import { Container } from 'react-bootstrap';

function ItemList({ items }) {
  return (
    <Container>
      <div className="ItemList">
        {items.map((item) => (
          <Item
            key={item.id}
            item={item}
            nombre={item.nombre}
            category={item.category}
            precio={item.precio}
            img={item.img} // Agrega aquí el campo de imagen correspondiente
          />
        ))}
      </div>
    </Container>
  );
}

export default ItemList;
