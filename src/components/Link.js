import React from 'react';
import { useTranslation } from "react-i18next";
// props : parametros
const Link = (props) => {
  const { link } = props;
  const { t } = useTranslation();

  return (
    <div>
      <div className="lista">
        <table className="content-table">
          <thead className="encabezados">
            <tr>
              <th>{t('artist')}</th>
              <th>{t('year')}</th>
              <th>{t('age')}</th>
              <th>{t('genre')}</th>
              <th>{t('nationality')}</th>
              <th>{t('music')}</th>
              <th>{t('album')}</th>
              <th>{t('sencillos')}</th>
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