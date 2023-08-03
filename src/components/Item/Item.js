import React, { useState } from 'react';
import { Card, Badge, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useCartContext from "../../CartContext/CartContext";
import './Item.css';



function Item({ item }) {
  const { id, nombre, precio, img, stock } = item;
  const { addToCart, isInCart } = useCartContext(); // Access addToCart and isInCart functions from the context

  const [quantity, setQuantity] = useState(1); // State to keep track of the item quantity

  const handleAddToCart = () => {
    if (!isInCart(id)) {
      // Check if the item is not already in the cart to avoid duplicates
      addToCart(item, quantity); // Add the item to the cart with the selected quantity
    }
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= stock) {
      // Ensure the new quantity is within the allowed range (1 to stock)
      setQuantity(newQuantity);
    }
  };

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
      {/* Counter to adjust the quantity */}
      <div className="d-flex align-items-center justify-content-center mt-3">
        <button
          onClick={() => handleQuantityChange(quantity - 1)}
          className="btn btn-secondary me-2"
          disabled={quantity === 1}
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          onClick={() => handleQuantityChange(quantity + 1)}
          className="btn btn-secondary ms-2"
          disabled={quantity === stock}
        >
          +
        </button>
      </div>

      {/* Add "Add to Cart" button */}
      <button onClick={handleAddToCart} className="btn btn-primary mt-3">
        Add to Cart
      </button>
    </Card>
  );
}

export default Item;

