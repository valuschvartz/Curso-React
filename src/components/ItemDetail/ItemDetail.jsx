import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Badge, Container, Button } from 'react-bootstrap';
import useCartContext from '../../store/CartContext';

const ItemDetail = ({ item }) => {
  const { addItemToCart } = useCartContext();

  const handleAddToCart = () => {
    addItemToCart(item);
  };

  return (
    <Card>
      <Card.Img variant="top" src={item?.img} alt={item?.nombre} />
      <Card.Body>
        <Card.Title>{item?.nombre}</Card.Title>
        <Card.Subtitle>{item?.category}</Card.Subtitle>
        <Card.Text>{item?.descripcion}</Card.Text>
        <Container className="d-flex justify-content-center text-center align-middle w-100 mw-30">
          <Badge bg="success me-2 mb-4 text-center">{item?.precio} $</Badge>
        </Container>
        <Button onClick={handleAddToCart}>Agregar al carrito</Button>
      </Card.Body>
    </Card>
  );
};

export default ItemDetail;
