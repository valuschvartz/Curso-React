import React, { useState, useEffect } from 'react';
import { Badge, Container, Breadcrumb } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../LoadingSpinner/';
import useCartContext from '../../store/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import '../../assets/css/animaciones.css';

function ItemDetail({ detalle }) {
  const [isInCart, setIsInCart] = useState(false);
  const { addToCart, estaEnCarrito, cartItems } = useCartContext();

  useEffect(() => {
    // Aquí deberíamos verificar si el item está en el carrito utilizando alguna propiedad única del item,
    // como el ID o algún otro identificador único. Por ejemplo, si el ID del item es único, podríamos hacer:
    setIsInCart(estaEnCarrito(detalle.id));
  }, [detalle.id, estaEnCarrito]);

  // Función para agregar al carrito
  function onAdd(count) {
    setIsInCart(true);
    addToCart(detalle, count);
  }

  // Función para obtener la cantidad de un item en el carrito
  function getItemQuantity(itemId) {
    const cartItem = cartItems.find(item => item.id === itemId);
    return cartItem ? cartItem.cant : 0; // Usar "cant" en lugar de "quantity"
  }

  if (!detalle) {
    return <LoadingSpinner />;
  }

  document.title = `Estuardo ${detalle.category}/${detalle.nombre}`;

  return (
    <>
      <Container className="d-flex text-center justify-content-center p-5 slide-in-fwd-center">
        <Breadcrumb listProps={{ className: "justify-content-center" }} className="justify-content-center">
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>catálogo</Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: `/category/${detalle.category}` }}>
            {detalle.category}
          </Breadcrumb.Item>
          <Breadcrumb.Item active>{detalle.nombre}</Breadcrumb.Item> {/* Usar "nombre" en lugar de "name" */}
        </Breadcrumb>
      </Container>
      <div className="container bootstrap snippets bootdey slide-in-fwd-center">
        <div className="row">
          <div className="col-sm-6 col-md-6 col-lg-6 push-bit align-middle">
            <span className="position-absolute top-10 end-90 translate-middle badge rounded-pill bg-info">
              {isInCart ? (
                <div className="cart-icon2">
                  <FontAwesomeIcon icon={faCartShopping} size="3x" color="black" />
                  <div className="mostrar-cantidadItem">{getItemQuantity(detalle.id)}</div>
                </div>
              ) : (
                <div className="cart-icon2">
                  <FontAwesomeIcon icon={faCartShopping} size="3x" color="black" />
                  <div className="mostrar-cantidadItem">0</div>
                </div>
              )}
            </span>
            <img src={detalle.img} alt={detalle.nombre} className="img-fluid push-bit align-middle h-100" /> {/* Usar "img" en lugar de "picture" */}
            {isInCart ? (
              <Link to="/cart">
                <div className="card-img-overlay h-100 d-flex flex-row justify-content-end">
                  <div className="card-text border-0 bg-semitransparent text-center">
                    <Badge className="bg-success">Ir al carrito</Badge>
                  </div>
                </div>
              </Link>
            ) : null}
          </div>
          <div className="col-sm-6 col-md-6 col-lg-6 push-bit text-center">
            <div className="clearfix py-3">
              <div className="pull-right">
                <h1><strong className="text-success">{detalle.nombre}</strong><br /></h1> {/* Usar "nombre" en lugar de "name" */}
                <h3><strong className="text-success">{detalle.category}</strong><br /></h3>
                <span className="h2"><strong><Badge bg="success">Precio {detalle.price}$</Badge></strong> {/* Usar "price" en lugar de "precio" */}
                  {isInCart ? (
                    <Badge className="bg-secondary ms-2">x{getItemQuantity(detalle.id)} = {detalle.price * getItemQuantity(detalle.id)}$</Badge>
                  ) : null}
                </span>
                <br />
              </div>
              <span className="h4">
              </span>
            </div>
            <hr />
            <span>
              {detalle.description}
            </span>
            <hr />
            <ItemCount onAdd={onAdd} stock={detalle.stock} initial={1} itemName={detalle.nombre} /> {/* Usar "nombre" en lugar de "name" */}
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemDetail;