import React from 'react';
import Item from '../Item/Item';
import './ItemList.css';
import { Container, Row, Col } from 'react-bootstrap';

function ItemList({ items }) {
  return (
    <Container>
      <Row className="ItemList justify-content-center">
        {items.map((item) => (
          <Col key={item.id} sm={8} md={4} lg={4} xl={4}>
            <Item
              item={item}
              nombre={item.nombre}
              category={item.category}
              precio={item.precio}
              img={item.img}
              descripcion={item.descripcion}
              stock={item.stock}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ItemList;
