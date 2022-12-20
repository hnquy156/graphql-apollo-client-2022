import { useQuery } from '@apollo/client';
import { Card } from 'react-bootstrap';
import { getSingleBook } from '../graphql-client/queries';

export default function BookDetail({ bookId }) {
  const { loading, error, data } = useQuery(getSingleBook, {
    variables: { id: bookId },
    skip: bookId === null,
  });
  if (loading) return 'Loading ...';
  if (error) return error.message;
  const book = data.book;

  return (
    <Card>
      <Card.Body>
        <Card.Title>Tên {book.name}</Card.Title>
        <Card.Subtitle>Thể loại {book.genre}</Card.Subtitle>
        <Card.Text>
          <div>Tác giả {book.author.name}</div>
          <div>Tuổi {book.author.age}</div>
          <div>Sách thuộc tác giả</div>
          <ul>
            {book.author.books?.map((b) => (
              <li key={b.id}>{b.name}</li>
            ))}
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
