import styled from 'styled-components';
import { BookListItem } from '../../models/book.model';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import { IoHeartOutline, IoHeartSharp } from 'react-icons/io5';

interface Props {
  book: BookListItem;
  handleLike: (isbn: string) => void;
  handleFinish?: (isbn: string) => void;
}

const BookItem = ({ book, handleLike, handleFinish }: Props) => {
  return (
    <BookItemStyle>
      <Link to={`/book/${book.isbn}`}>
        <img src={book.image} alt={book.title} />
      </Link>
      <div className="info">
        <p className="title">{book.title}</p>
        <p className="author">{book.author}</p>
        <div className="btnGroup">
          <button className="like" onClick={() => handleLike(book.isbn)}>
            {book.likeStatus ? <IoHeartSharp /> : <IoHeartOutline />}
          </button>
          {!book.readStatus && handleFinish && (
            <Button
              size="small"
              scheme="danger"
              onClick={() => handleFinish(book.isbn)}>
              완료
            </Button>
          )}
        </div>
      </div>
    </BookItemStyle>
  );
};

const BookItemStyle = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  color: ${({ theme }) => theme.color.text};

  a {
    width: 100%;
    height: 100%;
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 80%;
      min-width: 60px;
    }
  }

  .info {
    position: relative;
    flex: 2;
    height: 100%;
    padding: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 24px;

    p {
      margin: 0;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      -webkit-line-clamp: 1;
    }

    .title {
      font-size: 1.2rem;
      font-weight: bold;
    }

    .author {
      color: ${({ theme }) => theme.color.gray};
    }
  }

  .btnGroup {
    position: absolute;
    bottom: -6px;
    right: -6px;
    display: flex;
    align-items: center;
    gap: 4px;

    .like {
      background: none;
      border: none;
      cursor: pointer;

      svg {
        font-size: 1.2rem;
        fill: ${({ theme }) => theme.color.like};
        stroke: ${({ theme }) => theme.color.like};
      }
    }
  }

  @media screen and (max-width: 1300px) {
    .info {
      .btnGroup {
        bottom: -4px;
        right: -4px;
      }
    }
  }

  @media (max-width: 700px) {
    .info {
      flex: 1;
      .title {
        font-size: 1rem;
      }
      .author {
        font-size: 0.8rem;
      }

      .btnGroup {
        bottom: -6px;
        right: -6px;
        button {
          font-size: 0.6rem;
        }
        svg {
          font-size: 1rem;
        }
      }
    }
  }
`;

export default BookItem;
