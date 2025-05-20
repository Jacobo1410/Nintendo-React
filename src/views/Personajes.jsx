import React from 'react';
import Titles from '../components/Titles';

const personajes = [
  {
    nombre: 'Mario',
    descripcion: 'El fontanero más famoso del mundo, protagonista de la saga Super Mario. Conocido por su valentía, su bigote y su amor por rescatar a la Princesa Peach..',
    imagen: 'https://www.freeiconspng.com/thumbs/mario/super-mario-transparent-background-20.png'
  },
  {
    nombre: 'Link',
    descripcion: 'El héroe de Hyrule, empuña la Espada Maestra para luchar contra el mal. Protagonista de The Legend of Zelda, conocido por su silencio y coraje.',
    imagen: 'https://images.wikidexcdn.net/mwuploads/esssbwiki/thumb/3/32/latest/20230118170552/Link_SSB4.png/800px-Link_SSB4.png'
  },
  {
    nombre: 'Samus',
    descripcion: 'Una cazarrecompensas interestelar equipada con una armadura avanzada. Es la protagonista de la saga Metroid y una figura clave en el mundo de Nintendo.',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStYBm0RQsda7E7HRfMcHmqDFX4f_8_AqWKrw&s.webp'
  },
  {
    nombre: 'Kirby',
    descripcion: 'Una criatura rosa con la habilidad de absorber los poderes de sus enemigos. Es tierno pero poderoso, y estrella de su propia saga de aventuras.',
    imagen: 'https://static.wikia.nocookie.net/supersmashbrosultimate/images/d/d5/Kirby_render_by_nibroc_rock-d9w2r72.png',
  },
  {
    nombre: 'Donkey Kong',
    descripcion: 'Uno de los personajes más clásicos de Nintendo, famoso por su fuerza y por lanzar barriles. Protagonista de juegos de plataformas y carreras.',
    imagen: 'https://preview.redd.it/do-you-consider-donkey-kong-as-part-of-the-mario-franchise-v0-iwt7dba3qxfd1.jpeg?auto=webp&s=c153d960d72ead3ffcac60e985ef92eac8787f9d',
  },
    {
    nombre: 'Yoshi',
    descripcion: 'El fiel compañero de Mario, con la habilidad de comer enemigos y lanzar huevos. Es protagonista de sus propios juegos coloridos y llenos de aventuras.',
    imagen: 'https://static.wikia.nocookie.net/vgcdatabase/images/6/69/Yoshi_MP9.png',
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
              <img height={375} src={personaje.imagen} className="card-img-top" alt={personaje.nombre} />
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

