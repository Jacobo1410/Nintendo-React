import React from 'react';
import Titles from '../components/Titles';
const consolas = [
  {
    nombre: 'NES',
    descripcion: 'La Nintendo Entertainment System, lanzada en 1983, marcó el inicio del dominio de Nintendo en la industria del videojuego. Introdujo clásicos como Super Mario Bros. y The Legend of Zelda, y se convirtió en la consola que salvó la industria después de su crisis.',
    imagen: 'https://i5.walmartimages.com/asr/09f59f8f-617d-4f29-b067-b6f0c204908a_1.86cd92c32afb3d64e4f578fa1d54a60a.jpeg'
  },
  {
    nombre: 'Nintendo 64',
    descripcion: 'Con gráficos en 3D revolucionarios para su época, el N64 llegó en 1996 con títulos inolvidables como Super Mario 64, The Legend of Zelda: Ocarina of Time y Mario Kart 64. Fue la consola que impulsó el salto real al 3D en los videojuegos.',
    imagen: 'https://i5.walmartimages.com/seo/Nintendo-64-N64-System-Console-Used_3f05ad58-eab0-45ab-a66a-03d99113a617_1.4854fae622648fca1b9163c24ba59e13.jpeg'
  },
  {
    nombre: 'Nintendo Switch',
    descripcion: 'Desde 2017, la Switch ha sido un éxito global por su diseño híbrido que permite jugar en casa y en movimiento. Con títulos como Breath of the Wild, Animal Crossing y Mario Odyssey, ha vendido más de 140 millones de unidades.',
    imagen: 'https://promart.vteximg.com.br/arquivos/ids/8488031-1000-1000/imageUrl_1.jpg?v=638691499209200000'
  },
  {
    nombre: 'Game Boy',
    descripcion: 'Lanzada en 1989, la Game Boy fue la pionera de las consolas portátiles. Su diseño compacto, larga duración de batería y juegos como Tetris la convirtieron en un fenómeno global, vendiendo más de 100 millones de unidades junto con la Game Boy Color.',
    imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Game-Boy-FL.jpg/960px-Game-Boy-FL.jpg',
  },
  {
    nombre: 'GameCube',
    descripcion: 'Lanzada en 2001, fue la primera consola de Nintendo en usar discos ópticos. Aunque no fue la más vendida, ofreció joyas como Super Smash Bros. Melee, Metroid Prime y The Wind Waker, convirtiéndose en una consola de culto.',
    imagen: 'https://igray.store/wa-data/public/shop/products/46/13/1346/images/4023/4023.970.jpg',   
  },
  {
    nombre: 'Wii',
    descripcion: 'En 2006, Nintendo redefinió la jugabilidad con sensores de movimiento. La Wii rompió barreras generacionales con su enfoque en el juego familiar, logrando ventas récord y abriendo las puertas a un público casual.',
    imagen: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Wii_console.png',
    }
];

function Consolas() {
  return (
    <div className="container mt-5">
      <Titles text ={"Consolas de Nintendo"} />
      <div className="row">
        {consolas.map((consola, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100">
              <img height={450}src={consola.imagen} className="card-img-top rounded" alt={consola.nombre} />
              <div className="card-body">
                <h5 className="card-title">{consola.nombre}</h5>
                <p className="card-text">{consola.descripcion}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Consolas;
