import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';

const Cart = () => {
  const { cart, clearCart } = useContext(CartContext);

  return (
    <div className="container mt-5">
      <h2>Carrito de Compras</h2>
      {cart.length > 0 ? (
        <>
          {cart.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
          <div className="d-flex justify-content-between mt-4">
            <button className="btn btn-danger" onClick={clearCart}>Vaciar Carrito</button>
            <Link to="/checkout">
              <button className="btn btn-primary">Finalizar Compra</button>
            </Link>
          </div>
        </>
      ) : (
        <p>El carrito está vacío.</p>
      )}
    </div>
  );
};

export default Cart;
