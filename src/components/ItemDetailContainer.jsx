import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where, limit } from 'firebase/firestore';
import { db } from '../firebase/client';
import ItemDetail from './ItemDetail'; // Importar el componente ItemDetail

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const filterProducts = query(
      collection(db, "productos"),
      where("id", "==", parseInt(itemId)),
      limit(1)
    );

    getDocs(filterProducts)
      .then((snapshot) => {
        const products = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        const selectedItem = products[0];
        setItem(selectedItem);
      })
      .catch((err) => setError(err.message));
  }, [itemId]);

  return (
    <div className="container mt-5">
      {error ? (
        <p>{error}</p>
      ) : item ? (
        <ItemDetail item={item} /> // Usar el componente ItemDetail
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;