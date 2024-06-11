import React from 'react';
import CartWidget from './CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../img/dice-club-logo.png';
import { Link, NavLink } from 'react-router-dom'
import './css/Navbar.css';

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <Link to={'/'}>
            <img src={logo} alt="MyStore Logo" width="120" height="50" className="d-inline-block align-text-top" />
          </Link>
          <ul className="navbar-nav ms-auto flex-row">
            <li className="nav-item">
              <CartWidget />
            </li>
          </ul>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 distributor-list">
              <Link to={'/distributor/Devir'} className='link'>
                <li className="nav-item">Devir</li>
              </Link>
              <Link to={'/distributor/Libellud'} className='link'>
                <li className="nav-item">Libellud</li>
              </Link>
              <Link to={'/distributor/Z-ManGames'} className='link'>
                <li className="nav-item">Z-ManGames</li>
              </Link>
              <Link to={'/distributor/CephalofairGames'} className='link'>
                <li className="nav-item">CephalofairGames</li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;