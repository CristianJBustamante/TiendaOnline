import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { removeFromCart } = useContext(CartContext);

  if (!removeFromCart) {
    console.error("removeFromCart is not defined in CartContext");
    return null;
  }

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={item.img} className="img-fluid rounded-start" alt={item.name} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text"><strong>Distribuidor:</strong> {item.distributor}</p>
            <p className="card-text"><strong>Precio:</strong> ${item.price}</p>
            <p className="card-text"><strong>Cantidad:</strong> {item.quantity}</p>
            <p className="card-text"><strong>Subtotal:</strong> ${item.price * item.quantity}</p>
            <button 
              className="btn btn-danger" 
              onClick={() => removeFromCart(item.id)}>
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

