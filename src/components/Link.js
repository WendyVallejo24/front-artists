import React from 'react';
// props : parametros
const Link = (props) => {
  const { link } = props;
  return (
    <div>
      <div>
        {link.id} {link.nombre} {link.anioNac} {link.edad} {link.generoArtists}
        {link.nacionalidad} {link.generoMusica} {link.cantIntegrantes} {link.cantAlbumes}
        {link.cantSencillos} {link.cantTours}
      </div>
    </div>
  );
};

export default Link;