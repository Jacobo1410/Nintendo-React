import React from 'react'
import Titles from '../components/Titles';

function Contacto() {
  return (
    <div>
        <div className="container mt-5 ">
            <div className="bg-light p-5 rounded">
            <Titles text ={"Contacto"} />
            <p className="lead"><strong>Unete a nuestra comunidad de Nintendo en Ibagué!</strong></p>
            <form>
                <div className="mt-5 mb-3">
                <label htmlFor="name" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="name" required />
                </div>
                <div className="mb-3">
                <label htmlFor="email" className="form-label">Correo Electrónico</label>
                <input type="email" className="form-control" id="email" required />
                </div>
                <div className="mb-3">
                <label htmlFor="message" className="form-label">Mensaje</label>
                <textarea className="form-control" id="message" rows="3" required></textarea>
                </div>
                <button type="submit" className="btn btn-danger">Enviar</button>
            </form>
            </div>
        </div>
    </div>

  );
}

export default Contacto;