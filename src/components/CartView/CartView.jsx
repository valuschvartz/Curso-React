import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Badge, Button, Container } from 'react-bootstrap';
import useCartContext from '../../store/CartContext';
import './CartView.css'

const CartView = () => {
  const { cart, removeFromCart, clearCart, getItemQuantity, precioTotal } = useCartContext();

  const handleRemove = (itemId) => {
    removeFromCart(itemId);
  };

  const handleVaciar = () => {
    clearCart();
  };

  if (cart.length === 0) {
    return (
      <section id="Carrito" className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-12">
            <p>No hay items en su carrito</p>
            <Link to="/">regresar al menú</Link>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section id="carrito" className="py-2 text-center container slide-in-fwd-center">
        <div className="row py-lg-2">
          <div>
            <Badge bg="info" className="m-1">
              <h6>Total de items: {cart.length}</h6>
            </Badge>
            <Badge className="m-3" bg="info">
              <h6>Costo Total: {precioTotal()} $</h6>
            </Badge>
            <div></div>
            <div>
              <Link to="/">regresar al catálogo</Link>
            </div>
          </div>
        </div>
        <div className="album py-5">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-3 g-3">
              {cart.map((item) => (
                <Container key={item.id}>
                  {/* Reemplazar la clase bg-warning por product-card */}
                  <Card className="product-card bg-pink shadow-lg p-3 mb-3 mr-2 ml-2 rounded text-center">
                    <Card.Title>{item.name} x{getItemQuantity(item.id)}</Card.Title>
                    <Card.Img variant="top" src={item.img} alt={item.name} />
                    <Card.Body>
                      <Badge className="m-1" bg="success">
                        <h6>x1 {item.price} $</h6>
                      </Badge>
                      <Badge className="m-1" bg="info">
                        <h6>x{getItemQuantity(item.id)} {item.price * getItemQuantity(item.id)} $</h6>
                      </Badge>
                      <Button onClick={() => handleRemove(item.id)} className="btn btn-danger w-50 mt-3">
                        Eliminar
                      </Button>
                    </Card.Body>
                  </Card>
                </Container>
              ))}
            </div>
          </div>
        </div>
        <Button className="m-3 bg-danger" onClick={handleVaciar}>
          Vaciar carrito
        </Button>
        <Link to="/checkout">
          <Button className="bg-success m-3">Ir al pago</Button>
        </Link>
      </section>
    );
  }
};

export default CartView;