import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import Swal from 'sweetalert2';

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handlePurchase = () => {
    if (name && email && phone) {
      // Aquí puedes generar el código de compra y realizar más lógica si es necesario
      const purchaseCode = 'zVatYtycNdRqDWInVNFb';

      Swal.fire({
        title: 'Compra Finalizada con Éxito',
        text: `Su código de compra es: ${purchaseCode}`,
        icon: 'success',
        confirmButtonText: 'Realizar otra compra'
      }).then(() => {
        clearCart(); // Vaciar el carrito
        navigate('/'); // Redirigir a la página principal
      });
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Por favor, complete todos los campos.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    }
  };

  return (
    <div className="container mt-5">
      <h2>Finalizar Compra</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre Completo</label>
          <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo Electrónico</label>
          <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Teléfono</label>
          <input type="tel" className="form-control" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <button type="button" className="btn btn-primary" onClick={handlePurchase}>Finalizar Compra</button>
      </form>
    </div>
  );
};

export default Checkout;
