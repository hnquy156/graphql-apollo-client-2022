import { gql } from '@apollo/client';

const getBooks = gql`
  query getBooks {
    books {
      name
      id
    }
  }
`;

const getSingleBook = gql`
  query getSingleBook($id: ID!) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          id
          name
        }
      }
    }
  }
`;

export { getBooks, getSingleBook };
