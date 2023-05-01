import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

const CREATE_LINK_MUTATION = gql`
  mutation createArtista(
    $id: Int!
    $nombre: String!
    $anioNac: Int!
    $edad: Int!
    $generoArtist: String!
    $nacionalidad: String!
    $generoMusica: String!
    $cantIntegrantes: Int!
    $cantAlbumes: Int!
    $cantSencillos: Int!
    $cantTours: Int!
  ) {
    createArtista(id: $id, nombre: $nombre, anioNac: $anioNac, edad: $edad, generoArtist: $generoArtist, nacionalidad: $nacionalidad, generoMusica: $generoMusica, cantIntegrantes: $cantIntegrantes, cantAlbumes: $cantAlbumes, cantSencillos: $cantSencillos, cantTours: $cantTours) {
      id
      nombre
      edad
      generoArtist
      nacionalidad
      generoMusica
      cantIntegrantes
      cantAlbumes
      cantSencillos
      cantTours
    }
  }
`;

const CreateLink = () => {
  const [formState, setFormState] = useState({
    id: 0,
    nombre: '',
    anioNac: 0,
    edad: 0,
    generoArtist: '',
    nacionalidad: '',
    generoMusica: '',
    cantIntegrantes: 0,
    cantAlbumes: 0,
    cantSencillos: 0,
    cantTours: 0
  });

  const navigate = useNavigate();

  const [createLink] = useMutation(CREATE_LINK_MUTATION, {
    variables: {
      id: formState.id,
      nombre: formState.nombre,
      anioNac: formState.anioNac,
      edad: formState.edad,
      generoArtist: formState.generoArtist,
      nacionalidad: formState.nacionalidad,
      generoMusica: formState.generoMusica,
      cantIntegrantes: formState.cantIntegrantes,
      cantAlbumes: formState.cantAlbumes,
      cantSencillos: formState.cantSencillos,
      cantTours: formState.cantTours
    },
    onCompleted: () => navigate('/')
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createLink();
        }}
      >
        
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={formState.id}
            onChange={(e) =>
              setFormState({
                ...formState,
                id: e.target.value
              })
            }
            type="text"
            placeholder="ID"
          />
          <input
            className="mb2"
            value={formState.nombre}
            onChange={(e) =>
              setFormState({
                ...formState,
                nombre: e.target.value
              })
            }
            type="text"
            placeholder="Nombre"
          />
          <input
            className="mb2"
            value={formState.anioNac}
            onChange={(e) =>
              setFormState({
                ...formState,
                anioNac: e.target.value
              })
            }
            type="text"
            placeholder="Año de naciomiento"
          />
          <input
            className="mb2"
            value={formState.edad}
            onChange={(e) =>
              setFormState({
                ...formState,
                edad: e.target.value
              })
            }
            type="text"
            placeholder="Edad"
          />
          <input
            className="mb2"
            value={formState.generoArtist}
            onChange={(e) =>
              setFormState({
                ...formState,
                generoArtist: e.target.value
              })
            }
            type="text"
            placeholder="Genero del artista"
          />
          <input
            className="mb2"
            value={formState.nacionalidad}
            onChange={(e) =>
              setFormState({
                ...formState,
                nacionalidad: e.target.value
              })
            }
            type="text"
            placeholder="Nacionalidad"
          />
          <input
            className="mb2"
            value={formState.generoMusica}
            onChange={(e) =>
              setFormState({
                ...formState,
                generoMusica: e.target.value
              })
            }
            type="text"
            placeholder="Genero de musica"
          />
          <input
            className="mb2"
            value={formState.cantIntegrantes}
            onChange={(e) =>
              setFormState({
                ...formState,
                cantIntegrantes: e.target.value
              })
            }
            type="text"
            placeholder="Cantidad de integrantes"
          />
          <input
            className="mb2"
            value={formState.cantAlbumes}
            onChange={(e) =>
              setFormState({
                ...formState,
                cantAlbumes: e.target.value
              })
            }
            type="text"
            placeholder="Cantidad de albumes"
          />
          <input
            className="mb2"
            value={formState.cantSencillos}
            onChange={(e) =>
              setFormState({
                ...formState,
                cantSencillos: e.target.value
              })
            }
            type="text"
            placeholder="Cantidad de sencillos"
          />
          <input
            className="mb2"
            value={formState.cantTours}
            onChange={(e) =>
              setFormState({
                ...formState,
                cantTours: e.target.value
              })
            }
            type="text"
            placeholder="Cantidad de tours"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateLink;