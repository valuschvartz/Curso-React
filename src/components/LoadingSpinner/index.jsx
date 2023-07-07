import React from 'react';
import { Spinner, Container } from 'react-bootstrap';
import macarons from '../../assets/images/macarons.webp';

function LoadingSpinner() {
  return (
    <Container><img src={macarons} alt="macarons" className="img-fluid" /><Spinner animation="border" role="status">
  <span className="visually-hidden">Cargando...</span>
</Spinner>

</Container>
  )
}

export default LoadingSpinner