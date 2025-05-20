import React from 'react';
import Titles from '../components/Titles'; 

const juegos = [
  {
    titulo: 'Super Mario Odyssey',
    descripcion: 'Una aventura 3D por mundos increíbles junto a Cappy.',
    imagen: 'https://m.media-amazon.com/images/I/81KG3TzZJzL._AC_UF894,1000_QL80_.jpg'
  },
  {
    titulo: 'The Legend of Zelda: Breath of the Wild',
    descripcion: 'Explora un vasto mundo abierto como Link.',
    imagen: 'https://m.media-amazon.com/images/I/81KG+M6B6lL._AC_UF1000,1000_QL80_.jpg'
  },
  {
    titulo: 'Metroid Dread',
    descripcion: 'Samus Aran regresa en una nueva misión intensa.',
    imagen: 'https://m.media-amazon.com/images/I/91mr4J9z0zL._AC_UF1000,1000_QL80_.jpg'
  }
];

function Juegos() {
  return (
    <div className="container mt-5">
    <Titles text={"Juegos"} />
      <div className="row">
        {juegos.map((juego, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100">
              <img src={juego.imagen} className="card-img-top rounded" alt={juego.titulo} />
              <div className="card-body">
                <h5 className="card-title">{juego.titulo}</h5>
                <p className="card-text">{juego.descripcion}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Juegos;
