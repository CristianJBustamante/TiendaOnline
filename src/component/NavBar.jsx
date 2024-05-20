import React from 'react';
import CartWidget from './CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../img/dice-club-logo.png';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="MyStore Logo" width="120" height="50" className="d-inline-block align-text-top" />
          </a>
          <ul className="navbar-nav ms-auto flex-row">
            <li className="nav-item">
              <CartWidget />
            </li>
          </ul>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Inicio
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Productos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Contacto</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Socio Club</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Eventos</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;