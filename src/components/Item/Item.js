import React from 'react';
import { Card, Badge, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useCartContext from '../../store/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import './Item.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function Item({ item }) {
  const { addToCart, getItemQuantity, isInCart } = useCartContext();

  const { id, name, price, img, stock } = item;
  const itemQuantityInCart = getItemQuantity(id);

  return (
    <Card className="Item bg-pink h-100 shadow-lg p-3 mb-3 mr-2 ml-2 rounded">
      <Card.Title>{name}</Card.Title>
      {itemQuantityInCart > 0 && ( // Mostrar el ícono del carrito solo cuando la cantidad en el carrito es mayor que 0
        <span className="position-absolute top-4 end-4 translate-middle badge rounded-pill bg-info">
          <div className="cart-icon2">
            <FontAwesomeIcon icon={faCartShopping} size="1x" color="black" />
            <div className="mostrar-cantidadItem">{itemQuantityInCart}</div>
          </div>
        </span>
      )}
      <Link to={`/item/${id}`}>
        <Card.Img className="picHover" variant="top" src={img} alt={name} />
      </Link>
      <Container className="d-flex justify-content-center text-center align-middle w-100 mw-30">
        <Badge bg="success me-2 mb-4 text-center">{price} $</Badge>
        <Badge className="mb-4 text-center">Stock {stock}</Badge>
      </Container>
      {isInCart(item) ? null : (
        <div className="d-flex justify-content-center">
          <ItemCount stock={stock} initial={1} onAdd={(count) => addToCart(item, count)} itemName={name} />
        </div>
      )}
    </Card>
  );
}

export default Item;