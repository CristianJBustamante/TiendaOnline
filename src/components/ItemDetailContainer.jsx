import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../data/asyncmock';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProducts().then((products) => {
      const selectedItem = products.find((product) => product.id === itemId);
      if (selectedItem) {
        setItem(selectedItem);
      } else {
        setError('Item not found');
      }
    });
  }, [itemId]);

  return (
    <div className="container mt-5">
      {error ? (
        <p>{error}</p>
      ) : item ? (
        <ItemDetail item={item} />
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;