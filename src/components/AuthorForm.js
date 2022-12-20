import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { createAuthor } from '../graphql-client/mutations';
import { getAuthors } from '../graphql-client/queries';
import { DEFAUTL_AUTHOR } from './constant';

export default function AuthorForm() {
  const [newAuthor, setNewAuthor] = useState(DEFAUTL_AUTHOR);
  const [createAuthorFunction] = useMutation(createAuthor);

  const handleSubmitAuthor = (e) => {
    e.preventDefault();
    createAuthorFunction({
      variables: {
        name: newAuthor.name,
        age: +newAuthor.age,
      },
      refetchQueries: [{ query: getAuthors }],
    });
    setNewAuthor(DEFAUTL_AUTHOR);
  };

  const handleChangeAuthor = (e) => {
    const { name, value } = e.target;
    const author = {
      ...newAuthor,
      [name]: value,
    };
    setNewAuthor(author);
  };

  return (
    <Form onSubmit={handleSubmitAuthor}>
      <Form.Group className="mb-3 invisible">
        <Form.Label>Space</Form.Label>
        <Form.Control />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formAuthorName">
        <Form.Label>Tên tác giả</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          onChange={handleChangeAuthor}
          name="name"
          value={newAuthor.name}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formAuthorAge">
        <Form.Label>Tuổi</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter age"
          onChange={handleChangeAuthor}
          name="age"
          value={newAuthor.age}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
