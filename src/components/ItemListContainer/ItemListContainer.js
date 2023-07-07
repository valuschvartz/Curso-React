import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../LoadingSpinner/';
import CartView from '../../components/CartView/CartView';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../services/FireStore';

const ProductsCategoryPage = () => {
  const [productsDataByCategory, setProductsByCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { category } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      if (category) { // Verifica que category no sea undefined
        try {
          const q = query(collection(db, 'items'), where('category', '==', category));
          const querySnapshot = await getDocs(q);
          const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
          setProductsByCategory(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchData();
  }, [category]);

  return (
    <div className="PositionContainer">
      {isLoading ? (
        <div className="Spinner">
          <LoadingSpinner />
        </div>
      ) : (
        productsDataByCategory.map((data) => <CartView product={data} key={data.id} />)
      )}
    </div>
  );
};

export default ProductsCategoryPage;
