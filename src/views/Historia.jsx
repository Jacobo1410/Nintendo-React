import React from 'react';
import Titles from '../components/Titles';

function Historia() {
  return (
    <div className="container mt-5">
    <Titles text ={"Historia de Nintendo"} />
        <div className='row align-items-center'>
            <div className='col-md-7'>
                    <p className="lead text-justify">
                        Nintendo fue fundada en 1889 en Kioto, Japón, por Fusajiro Yamauchi, como una empresa que fabricaba cartas 
                japonesas llamadas "hanafuda". Durante varias décadas, Nintendo experimentó con diferentes industrias, 
                como juguetes, taxis e incluso cadenas hoteleras. No fue hasta los años 70 que se enfocó en los videojuegos, 
                lanzando sus primeros juegos arcade. 
                    </p>
                    <p className='lead text-justify'>
                        Con la llegada de la NES en 1983, Nintendo revolucionó el entretenimiento en casa. A lo largo de los años, 
                la compañía ha creado consolas emblemáticas como la SNES, Game Boy, Nintendo 64, Wii y Nintendo Switch. 
                Su enfoque en la innovación, la jugabilidad y personajes carismáticos ha mantenido a Nintendo como una de 
                las empresas más queridas en el mundo gamer.
                    </p>
            </div>
            <div className='col-md-5'>
                <img className='img-fluid rounded ms-md-3' src="https://img.asmedia.epimg.net/resizer/v2/VKKZIFXLORDTVIJMY6RBPCON5M.jpg?auth=885e4b114588ad002ad4b665a3ecd1645f5fff7d018ebfdf714e7fafdbb51158&width=360&height=203&smart=true" alt="Historia de Nintendo" />
            </div>        
        </div>
    </div>
  );
}

export default Historia;
