import React from 'react';
// props : parametros
const Link = (props) => {
  const { link } = props;
  return (
    <div>
      <div class="lista">
        Nombre: {link.nombre} <br/>
        {link.anioNac} 
        Edad: {link.edad} <br/>
        {link.generoArtists}
        Nacionalidad: {link.nacionalidad} 
        {link.generoMusica} 
        {link.cantIntegrantes} 
        {link.cantAlbumes}
        {link.cantSencillos} 
        {link.cantTours}
      </div>
    </div>
  );
};

export default Link;