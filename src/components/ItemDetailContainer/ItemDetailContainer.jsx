import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner/index";
import ItemDetail from "../ItemDetail/ItemDetail";
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
          <ItemDetail
            key={data.id}
            item={data}
          />
        ))
      )}
    </div>
  );
};

export default ItemDetailContainer;

