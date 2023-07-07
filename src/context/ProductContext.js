import React, { useState, createContext } from "react";

export const ProductContext = createContext();

const initialState = [
  {
    
    category: "viaje",
    id:3,
    img:"https://firebasestorage.googleapis.com/v0/b/ojala-fb7c7.appspot.com/o/tour.jpg?alt=media&token=42ad6248-9fc4-4ded-bcda-4b009571a411",
    nombre:"viaje",
    precio:"6000",
  },
];

export const ProductProvider = ({ children }) => {
  const [items, setItems] = useState([initialState]);

  return (
    <ProductContext.Provider value={{ items, setItems }}>
      {children}
    </ProductContext.Provider>
  );
};
