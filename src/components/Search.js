import React, { useState } from 'react';
import { useLazyQuery, gql } from '@apollo/client';
import Link from './Link';

const SEARCH_QUERY = gql`
    query artistas($search: String!) {
        artistas(search: $search) {
            nombre
            edad
            anioNac
            nacionalidad
            generoArtist
            generoMusica
            cantAlbumes
            cantSencillos
        }
    }
`

const Search = () => {
  const [searchFilter, setSearchFilter] = useState('');
  const [executeSearch, { data }] = useLazyQuery(SEARCH_QUERY);

  return (
    <>
      <div>
        <div className='buscar'>Search:</div>  
        <input
          className="animal"
          type="text"
          onChange={(e) => setSearchFilter(e.target.value)}
        />
        <button
          className="generadores"
          onClick={() =>
            executeSearch({
              variables: { search: searchFilter }
            })
          }>
          OK
        </button>
      </div>
      {data &&
        data.artistas.map((link) => (
          <Link key={link.id} link={link} />
        ))}
    </>
  );
};

export default Search;