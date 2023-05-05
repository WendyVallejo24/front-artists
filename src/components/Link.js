import React from 'react';
// props : parametros
const Link = (props) => {
  const { link } = props;
  return (
    <div>
      <div className="lista">
        <table className="content-table">
          <thead className="encabezados">
            <tr>
              <th>Artista</th>
              <th>Año de nacimiento</th>
              <th>Edad</th>
              <th>Género del artista</th>
              <th>Nacionalidad</th>
              <th>Género de música</th>
              <th>Cantidad de albumes</th>
              <th>Cantidad de sencillos</th>
            </tr>
          </thead>
          <tbody className='contenido'>
            <tr>
              <td>{link.nombre}</td>
              <td>{link.anioNac}</td>
              <td>{link.edad}</td>
              <td>{link.generoArtist}</td>
              <td>{link.nacionalidad}</td>
              <td>{link.generoMusica}</td>
              <td>{link.cantAlbumes}</td>
              <td>{link.cantSencillos}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Link;