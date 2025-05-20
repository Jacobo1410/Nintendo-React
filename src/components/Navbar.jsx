import React from 'react';
import { Link } from 'react-router-dom';

function NavigationBar() {
 return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-mi-color py-4 fs-5">
      <div className="container">
        <Link className="navbar-brand fs-2" to="/"><img width={150} height={100} src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Nintendo.svg" alt="Nintendo" /></Link>
        <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Historia</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Consolas</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Juegos</Link>
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