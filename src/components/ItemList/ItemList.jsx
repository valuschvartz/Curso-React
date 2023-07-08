import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from '../Item/Item';
import './ItemList.css';
import { Container } from 'react-bootstrap';

const ItemList = ({ items }) => {
  return (
    <div className="ItemList">
      <Container>
        {items.map((item) => (
          <Item
            key={item.id}
            item={item}
          />
        ))}
      </Container>
    </div>
  );
};

export default ItemList;
