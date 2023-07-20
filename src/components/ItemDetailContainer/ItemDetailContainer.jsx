import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import { db } from "../../services/FireStore";
import { doc, getDoc } from "firebase/firestore";

// Función para obtener el producto desde la base de datos
async function getProducto(itemid) {
  try {
    // Obtener la referencia del documento en la colección "items" con el ID correspondiente al itemid
    const itemRef = doc(db, "items", itemid);

    // Obtener el documento
    const itemSnapshot = await getDoc(itemRef);

    // Verificar si el documento existe
    if (itemSnapshot.exists()) {
      // Si el documento existe, devolver los datos del producto
      return itemSnapshot.data();
    } else {
      // Si el documento no existe, devolver null o lanzar un error según el caso
      throw new Error("El producto no fue encontrado.");
    }
  } catch (error) {
    // Manejar cualquier error que pueda ocurrir durante la consulta
    console.error(error);
    throw error; // Opcional: puedes lanzar nuevamente el error para que el componente padre lo maneje
  }
}

function ItemDetailContainer() {
  const [producto, setProducto] = useState({});
  const { itemid } = useParams();

  console.log("ID del producto:", itemid);

  useEffect(() => {
    getProducto(itemid)
      .then(respuestaPromise => {
        setProducto(respuestaPromise);
      })
      .catch(error => {
        console.error(error);
      });
  }, [itemid]);

  return (
    <section id="menu" className="text-center container">
      <div className="album bg-degrade">
        <div className="container">
          <div className="">
            <ItemDetail detalle={producto} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ItemDetailContainer;
