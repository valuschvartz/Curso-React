import React from 'react'
import Item from '../Item/Item.js';
import './ItemList.css';
import { Container } from 'react-bootstrap';



function ItemList({ items }) {

  return (
    <>
    { items.map(thisitem => {
      return (
  <Container key={thisitem.id}>
  <Item picture={thisitem.img} category={thisitem.category}  item={thisitem.id} name={thisitem.nombre} description={thisitem.description} price={thisitem.precio}/>
  </Container>
      )
    })}
    </>
  )
}

export default ItemList