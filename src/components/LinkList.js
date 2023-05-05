import React from 'react';
import Link from './Link';
import { useQuery, gql } from '@apollo/client';

const FEED_QUERY = gql`
query{
  artistas {
    id
    nombre
    edad
    anioNac
    generoArtist
    nacionalidad
    generoMusica
    cantAlbumes
    cantSencillos
  }
}
`
;

const LinkList = () => {
  const { data } = useQuery(FEED_QUERY)

  return (
    <div>
      {data && (
        <>
          {data.artistas.map((link) => (
            <Link key={link.id} link={link} />
          ))}
        </>
      )}
    </div>
  );
};

export default LinkList;