import React from 'react';
import { Card, Badge, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Item.css';

function Item({ item }) {
  const { id, nombre, precio, img, stock } = item;

  return (
    <Card className="Item bg-pink h-100 shadow-lg p-3 mb-3 mr-2 ml-2 rounded">
      <Card.Title>{nombre}</Card.Title>
      <Link to={`/item/${id}`} className="d-block mb-3">
        <Card.Img className="picHover" variant="top" src={img} alt={nombre} />
      </Link>
      <Container className="d-flex justify-content-center text-center align-middle w-100 mw-30">
        <Badge bg="danger me-2 mb-4 text-center">{precio} $</Badge>
        <Badge className="mb-4 text-center">Stock {stock}</Badge>
      </Container>
      <Link to={`/item/${id}`} className="btn btn-info mt-3">
        Ver detalles
      </Link>
    </Card>
  );
}

export default Item;
