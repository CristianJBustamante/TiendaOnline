import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const CartWidget = () => {
  const cartItemCount = 5; // Número hardcodeado

  return (
    <div className="cart-widget position-relative">
      <FaShoppingCart size={24} />
      <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
        {cartItemCount}
      </span>
    </div>
  );
};

export default CartWidget;