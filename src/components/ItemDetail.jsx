import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
  const { addToCart } = useContext(CartContext);

  const onAdd = (quantity) => {
    addToCart(item, quantity);
  };

  return (
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
        <ItemCount stock={10} initial={1} onAdd={onAdd} />
      </div>
    </div>
  );
};

export default ItemDetail;
