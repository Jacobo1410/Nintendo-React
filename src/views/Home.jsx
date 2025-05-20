import React from 'react';
import Titles from '../components/Titles';

function Home() {
  return (
    <div className="container mt-5 text-center">
      <div className="bg-white p-5 rounded fondo">
        <Titles text ={"¡Bienvenido al Mundo Nintendo!"} />
        <p className="lead">Explora consolas, juegos y personajes que marcaron generaciones.</p>
        <img className='rounded-pill'
          src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Nintendo.svg" 
          alt="Nintendo Logo" 
          width="200" 
        />
      </div>
    </div>
  );
}

export default Home;