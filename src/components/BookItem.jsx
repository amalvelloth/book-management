import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/actions';

const BookItem = ({ book }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteBook(book.id));
  };

  return (
    <div className='mt-4'>
      <h3 className='fw-bold'>{book.title}</h3>
      <p>{book.author}</p>
      <button onClick={handleDelete} className='btn btn-danger'>Delete</button>
    </div>
  );
};

export default BookItem;