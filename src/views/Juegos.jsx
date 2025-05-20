import React from 'react';
import Titles from '../components/Titles'; 

const juegos = [
  {
    titulo: 'Super Mario Odyssey',
    descripcion: 'Una colorida aventura 3D en la que Mario viaja por distintos reinos con su nuevo aliado Cappy. Explora, recolecta lunas y salva a Peach de Bowser.',
    imagen: 'https://howlongtobeat.com/games/42833_Super_Mario_Odyssey.png'
  },
  {
    titulo: 'The Legend of Zelda: Breath of the Wild',
    descripcion: 'Una experiencia de mundo abierto donde puedes escalar, planear y cocinar. Explora Hyrule como nunca antes mientras descubres su historia y secretos.',
    imagen: 'https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg'
  },
  {
    titulo: 'Metroid Dread',
    descripcion: 'Samus regresa en un juego de acción en 2D con exploración y suspenso. Enfréntate a los implacables E.M.M.I. mientras descubres una nueva amenaza.',
    imagen: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Metroid_Dread_Banner.png/250px-Metroid_Dread_Banner.png'
  },
  {
    titulo: 'Kirby and the Forgotten Land',
    descripcion: 'Kirby se aventura en un mundo misterioso y semiabandonado. Una mezcla de plataformas en 3D con nuevas habilidades y enemigos.',
    imagen: 'https://static0.dualshockersimages.com/wordpress/wp-content/uploads/sharedimages/2024/12/mixcollage-25-dec-2024-07-23-am-9545.jpg'
  },
  {
    titulo: 'Splatoon 3',
    descripcion: 'Juego competitivo en línea donde equipos se enfrentan con tinta. Personaliza a tu inkling, participa en batallas territoriales y eventos especiales.',
    imagen: 'https://cdn.mobygames.com/covers/11040502-splatoon-3-nintendo-switch-front-cover.jpg'
  },
  {
    titulo: 'Animal Crossing: New Horizons',
    descripcion: 'Crea tu propia isla paradisíaca, decora tu hogar, interactúa con vecinos y relájate en este simulador social muy querido por los fans.',
    imagen: 'https://external-preview.redd.it/XmYU1C6KD9q1m9qY1hnedMhwYbwdWf3J2F-BcDpiav0.png?format=pjpg&auto=webp&s=cbf386c9e839022b6ca98520faafa98a4aa59783'
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
              <img height={500} src={juego.imagen} className="card-img-top rounded" alt={juego.titulo} />
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
