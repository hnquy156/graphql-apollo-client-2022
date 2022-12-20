import { useMutation, useQuery } from '@apollo/client';
import { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { createBook } from '../graphql-client/mutations';
import { getAuthors, getBooks } from '../graphql-client/queries';
import { DEFAUTL_BOOK } from './constant';

export default function Forms() {
  const [newBook, setNewBook] = useState(DEFAUTL_BOOK);
  const { loading, error, data } = useQuery(getAuthors);
  const [createBookFunction] = useMutation(createBook);

  const handleSubmitBook = (e) => {
    e.preventDefault();
    createBookFunction({
      variables: newBook,
      refetchQueries: [{ query: getBooks }],
    });
    setNewBook(DEFAUTL_BOOK);
  };

  const handleChangeBook = (e) => {
    const { name, value } = e.target;
    const book = {
      ...newBook,
      [name]: value,
    };
    setNewBook(book);
  };

  return (
    <Row>
      <Col>
        <Form onSubmit={handleSubmitBook}>
          <Form.Group className="mb-3" controlId="formBookName">
            <Form.Label>Tên sách</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              onChange={handleChangeBook}
              name="name"
              value={newBook.name}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBookGenre">
            <Form.Label>Thể loại</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter genre"
              onChange={handleChangeBook}
              name="genre"
              value={newBook.genre}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBookAuthor">
            <Form.Label>Tác giả</Form.Label>
            {loading && 'Loading...'}
            {error && error.message}
            <Form.Select
              onChange={handleChangeBook}
              name="authorId"
              value={newBook.authorId}
            >
              <option>Chọn tác giả</option>
              {data?.authors?.map((a) => (
                <option key={a.id} value={a.id}>
                  {a.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
      <Col>
        <Form>
          <Form.Group className="mb-3 invisible">
            <Form.Label>1</Form.Label>
            <Form.Control />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formAuthorName">
            <Form.Label>Ten tac gia</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formAuthorAge">
            <Form.Label>Tuoi</Form.Label>
            <Form.Control type="text" placeholder="Enter genre" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  );
}
