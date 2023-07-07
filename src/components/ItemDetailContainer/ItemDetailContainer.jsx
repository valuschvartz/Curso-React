import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";

import Spinner from "../../components/LoadingSpinner/index";
import CartView from "../../components/CartView/CartView";

import {
  collection,
  query,
  where,
  getDocs,
  documentId,
} from "firebase/firestore";
import { db } from "../../services/FireStore";

const ProductDetailPage = () => {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

 

  useEffect(() => {
    const getProduct = async () => {
      const q = query(
        collection(db, "items"),
        where(documentId(), "==", id)
      );
      const docs = [];
      const querySnapshot = await getDocs(q);
      // console.log('DATA:', querySnapshot);
      querySnapshot.forEach((doc) => {
        // console.log('DATA:', doc.data(), 'ID:', doc.id);
        docs.push({ ...doc.data(), id: doc.id });
      });
      // console.log(docs);
      setProductData(docs);
    };
    getProduct();
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, [id]);

  return (
    <div className="DetailContainer">
      {isLoading ? (
        <div className="Spinner">
          <Spinner />
        </div>
      ) : (
        productData.map((data) => {
          return <CartView player={data} key={data.id} />;
        })
      )}
    </div>
  );
};

export default ProductDetailPage;
