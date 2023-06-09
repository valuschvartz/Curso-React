import React from 'react';
import { Button, Card, Badge, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import useCartContext from '../../store/CartContext';
import './Item.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Item = ({ item, nombre, precio, img, category }) => {
  const { getItemQuantity, isInCart } = useCartContext();

  return (
    <Card className="Item bg-pink h-100 shadow-lg p-3 mb-3 mr-2 ml-2 rounded">
      <Card.Title>{category}/{nombre}</Card.Title>
      <span className="position-absolute top-4 end-4 translate-middle badge rounded-pill bg-info">
        {isInCart(item) ? (
          <div className="cart-icon2">
            <FontAwesomeIcon icon={faCartShopping} size="1x" color="black" />
            <div className="mostrar-cantidadItem">{getItemQuantity(item)}</div>
          </div>
        ) : (
          <div className="cart-icon2">
            <FontAwesomeIcon icon={faCartShopping} size="1x" color="black" />
            <div className="mostrar-cantidadItem">0</div>
          </div>
        )}
      </span>
      <LinkContainer to={`/item/${item.id}`}>
        <Card.Img className="picHover" variant="top" src={img} alt={nombre} />
      </LinkContainer>
      <Card.Body></Card.Body>
      <Container className="d-flex justify-content-center text-center align-middle w-100 mw-30">
        <Badge bg="success me-2 mb-4 text-center">{precio} $</Badge>
      </Container>
      <LinkContainer to={`/item/${item.id}`}>
        <Button className="btn btn-info">Ver detalles</Button>
      </LinkContainer>
    </Card>
  );
};

export default Item;
