import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import LoadingSpinner from "../LoadingSpinner/index";
import { db } from "../../services/FireStore";
import { doc, getDoc } from "firebase/firestore";

function ItemDetailContainer() {
  const { id } = useParams(); // Asegúrate de usar "id" en lugar de "itemid"
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getProducto(itemid) { // Asegúrate de usar "itemid" en lugar de "id"
      try {
        const itemRef = doc(db, "items", itemid); // Verifica que "items" sea el nombre correcto de la colección en tu base de datos
        const itemSnapshot = await getDoc(itemRef);

        if (itemSnapshot.exists()) {
          setProducto(itemSnapshot.data());
        } else {
          throw new Error("El producto no fue encontrado.");
        }
      } catch (error) {
        console.error(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    getProducto(id); // Asegúrate de pasar "id" como el parámetro de la función
  }, [id]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <ItemDetail detalle={producto} />;
}

export default ItemDetailContainer;
