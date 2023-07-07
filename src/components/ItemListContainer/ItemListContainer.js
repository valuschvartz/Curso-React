import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../LoadingSpinner/';


import CartView from "../../components/CartView/CartView";

import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../services/FireStore";

import "./ItemListContainer.css";

const ProductsCategorynPage = () => {
  const [productsDataByPCategory, setProductsByCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { category } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      const q = query(
        collection(db, "items"),
        where("category", "==", category)
      );
      const docs = [];
      const querySnapshot = await getDocs(q);
      // console.log('DATA:', querySnapshot);
      querySnapshot.forEach((doc) => {
        // console.log('DATA:', doc.data(), 'ID:', doc.id);
        docs.push({ ...doc.data(), id: doc.id });
      });
      // console.log(docs);
      setProductsByCategory(docs);
    };
    getProduct();
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, [category]);

  return (
    <div className="PositionContainer">
      {isLoading ? (
        <div className="Spinner">
          <LoadingSpinner />
        </div>
      ) : (
        productsDataByPCategory.map((data) => {
          return <CartView product={data} key={data.id} />;
        })
      )}
    </div>
  );
};

export default ProductsCategorynPage;
