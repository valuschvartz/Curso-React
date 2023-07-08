import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";

import LoadingSpinner from "../../components/LoadingSpinner/index";
import CartView from "../../components/CartView/CartView";

import { collection, query, where, getDocs, doc } from "firebase/firestore";
import { db } from "../../services/FireStore";

const ItemDetailContainer = () => {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const q = query(collection(db, "items"), where(doc(db, "items", id)));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setProductData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    getProduct();
  }, [id]);

  return (
    <div className="DetailContainer">
      {isLoading ? (
        <div className="Spinner">
          <LoadingSpinner />
        </div>
      ) : (
        productData.map((data) => (
          <CartView
            key={data.id}
            product={{
              id: data.id,
              name: data.nombre,
              category: data.category,
              img: data.img, // Adjust the field name accordingly
              price: data.precio,
              description: data.descripcion, // Add the description field from the database
            }}
          />
        ))
      )}
    </div>
  );
};

export default ItemDetailContainer;
