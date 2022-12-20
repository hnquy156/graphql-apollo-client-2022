import { gql } from '@apollo/client';

const createBook = gql`
  mutation createBook($name: String, $genre: String, $authorId: ID!) {
    createBook(name: $name, genre: $genre, authorId: $authorId) {
      id
      name
    }
  }
`;

export { createBook };
