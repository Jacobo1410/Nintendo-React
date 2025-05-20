import React from 'react';
import { Link } from 'react-router-dom';

function NavigationBar() {
 return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-mi-color py-4 fs-5">
      <div className="container d-flex justify-content-between align-items-center">
        <Link className="navbar-brand d-flex align-items-center" to="/"><img width={150} height={100} src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Nintendo.svg" alt="Nintendo" /></Link>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/historia">Historia</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/consolas">Consolas</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/juegos">Juegos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/personajes">Personajes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">Contacto</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;