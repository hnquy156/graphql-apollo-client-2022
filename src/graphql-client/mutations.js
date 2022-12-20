import { gql } from '@apollo/client';

const createBook = gql`
  mutation createBook($name: String, $genre: String, $authorId: ID!) {
    createBook(name: $name, genre: $genre, authorId: $authorId) {
      id
      name
    }
  }
`;

const createAuthor = gql`
  mutation createAuthor($name: String, $age: Int) {
    createAuthor(name: $name, age: $age) {
      id
      name
    }
  }
`;

export { createBook, createAuthor };
