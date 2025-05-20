import React from 'react';
import Titles from '../components/Titles';

const personajes = [
  {
    nombre: 'Mario',
    descripcion: 'El icónico fontanero de Nintendo.',
    imagen: 'https://www.semana.com/resizer/v2/V3EVP6ZUEZFY7AIGESM76I43GE.jpg?auth=730894407f025c4089c9060a8b667fabeb0af4f13e95d17f7f4bde4dc0176d51&smart=true&quality=75&width=1280&height=720'
  },
  {
    nombre: 'Link',
    descripcion: 'El héroe de la saga The Legend of Zelda.',
    imagen: 'https://images.wikidexcdn.net/mwuploads/esssbwiki/thumb/3/32/latest/20230118170552/Link_SSB4.png/800px-Link_SSB4.png'
  },
  {
    nombre: 'Samus',
    descripcion: 'Protagonista de la saga Metroid.',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStYBm0RQsda7E7HRfMcHmqDFX4f_8_AqWKrw&s.webp'
  }
];

function Personajes() {
  return (
    <div className="container mt-5">
      <Titles text ={"Personajes Icónicos"} /> 
      <div className="row">
        {personajes.map((personaje, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100">
              <img height={275} src={personaje.imagen} className="card-img-top" alt={personaje.nombre} />
              <div className="card-body">
                <h5 className="card-title">{personaje.nombre}</h5>
                <p className="card-text">{personaje.descripcion}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Personajes;

