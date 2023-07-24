import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();
const { Provider } = CartContext;

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item, cant) => {
    if (isInCart(item.id)) {
      const newCart = cart.map((cartItem) => {
        if (cartItem.id === item.id) {
          const copyItem = { ...cartItem };
          copyItem.stock += cant; // Cambiar 'cant' por 'stock'
          return copyItem;
        } else return cartItem;
      });
      setCart(newCart);
    } else {
      const newItem = { ...item, stock: cant }; // Cambiar 'cant' por 'stock'
      setCart([...cart, newItem]);
    }
  };

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  const estaEnCarrito = (id) => {
    return cart.some((item) => item.id === id);
  };

  const getItemFromCart = (id) => {
    return cart.find((item) => item.id === id);
  };

  const getItemQuantity = (id) => {
    const item = getItemFromCart(id);
    return item ? item.stock : 0; // Cambiar 'cant' por 'stock'
  };

  function precioTotal() {
    let total = 0;
    cart.forEach((item) => (total += item.precio * item.stock)); // Cambiar 'price' por 'precio' y 'cant' por 'stock'
    return total;
  }

  function itemsTotal() {
    let cantidad = 0;
    cart.forEach((item) => (cantidad += item.stock)); // Cambiar 'cant' por 'stock'
    return cantidad;
  }

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const contextFunction = () => {
    // Aquí puedes definir la lógica de la función contextFunction si la necesitas.
  };

  return (
    <Provider
      value={{
        cart,
        addToCart,
        isInCart,
        estaEnCarrito,
        getItemFromCart,
        getItemQuantity,
        precioTotal,
        itemsTotal,
        removeFromCart,
        clearCart,
        contextFunction,
      }}
    >
      {children}
    </Provider>
  );
}

export default function useCartContext() {
  return useContext(CartContext);
}
