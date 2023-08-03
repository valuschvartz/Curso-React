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
          copyItem.cant += cant;
          return copyItem;
        } else return cartItem;
      });
      setCart(newCart);
    } else {
      const newItem = { ...item, cant };
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
    return item ? item.cant : 0;
  };

  function precioTotal() {
    let total = 0;
    cart.forEach((i) => (total += i.precio * i.stock));
    return total;
  }

  function itemsTotal() {
    let cantidad = 0;
    cart.forEach((i) => (cantidad += i.cant));
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
