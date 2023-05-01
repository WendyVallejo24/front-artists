import React from 'react';
import Link from './Link';
import { useQuery, gql } from '@apollo/client';

const FEED_QUERY = gql`
query{
  artistas {
    id
    nombre
    edad
  }
}
`
;

const LinkList = () => {
  const { data } = useQuery(FEED_QUERY)

/*const LinkList = () => {
  const linksToRender = [
    {
      id: 'link-id-1',
      description:
        'Prisma gives you a powerful database toolkit 😎',
      url: 'https://prisma.io'
    },
    {
      id: 'link-id-2',
      description: 'The best GraphQL client',
      url: 'https://www.apollographql.com/docs/react/'
    },
    {
        id: 'link-id-3',
        description: 'How To GRAPHQL - React Apollo',
        url: 'https://www.howtographql.com/react-apollo/2-queries-loading-links/'
    }
  ];
*/
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