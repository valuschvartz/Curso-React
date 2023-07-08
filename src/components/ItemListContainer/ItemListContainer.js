import React, { useEffect, useState } from 'react';
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from '../../services/FireStore';
import LoadingSpinner from '../LoadingSpinner';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const q = query(collection(db, 'items'));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setItems(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="PositionContainer">
      {isLoading ? (
        <div className="Spinner">
          <LoadingSpinner />
        </div>
      ) : (
        <ItemList items={items || []} />
      )}
    </div>
  );
};

export default ItemListContainer;
