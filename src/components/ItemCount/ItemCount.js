import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import './ItemCount.css';

const ItemCount = ({ stock, initial, onAdd, itemName }) => {
  const [count, setCount] = useState(initial);

  const handleAgregar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleRestar = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };

  const handleOnAdd = () => {
    const Toast = Swal.mixin({
      toast: true,
      background: '#DFA822',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: false,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      }
    });

    if (count > 0) {
      Toast.fire({
        icon: 'success',
        title: `${count} ${itemName} ${count > 1 ? 'agregadas' : 'agregada'} al carrito`
      });
      if (onAdd) {
        onAdd(count); // This will call the onAdd function provided by the parent component.
      }
      setCount(initial);
    } else {
      Toast.fire({
        icon: 'error',
        title: 'Debes agregar al menos una unidad al carrito'
      });
    }
  };

  return (
    <div className="d-flex justify-content-center text-center align-items-center contador counter-input input-group mb-3">
      <div className="input-group-prepend">
        
      </div>
      
      <div className="input-group-append">
        
      </div>
    </div>
  );
};

export default ItemCount;
