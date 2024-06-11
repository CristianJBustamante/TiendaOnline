// src/components/ItemDetailContainer.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../data/asyncmock';

export const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState(null);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      // Llamamos a getProducts sin argumentos para obtener todos los productos y luego encontrar el producto específico
      getProducts()
        .then(products => {
          const selectedItem = products.find(product => product.id === itemId);
          if (selectedItem) {
            setItem(selectedItem);
          } else {
            setError("Producto no encontrado");
          }
        })
        .catch(err => setError(err));
    }, [itemId]);
  
    return (
      <div className="container mt-5">
        {error ? (
          <p>{error}</p>
        ) : item ? (
          <div className="card">
            <img src={item.img} alt={item.name} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.description}</p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item"><strong>Distribuidor:</strong> {item.distributor}</li>
                <li className="list-group-item"><strong>Precio:</strong> ${item.price}</li>
                <li className="list-group-item"><strong>Cantidad de Jugadores:</strong> {item.players}</li>
                <li className="list-group-item"><strong>Temática:</strong> {item.theme}</li>
              </ul>
            </div>
          </div>
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    );
  };