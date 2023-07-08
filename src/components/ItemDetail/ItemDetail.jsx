import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Badge, Container } from 'react-bootstrap';

const ItemDetail = ({ item }) => {
  return (
    <Card>
      <Card.Img variant="top" src={item.img} alt={item.name} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Subtitle>{item.category}</Card.Subtitle>
        <Card.Text>{item.description}</Card.Text>
        <Container className="d-flex justify-content-center text-center align-middle w-100 mw-30">
          <Badge bg="success me-2 mb-4 text-center">{item.price} $</Badge>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default ItemDetail;
