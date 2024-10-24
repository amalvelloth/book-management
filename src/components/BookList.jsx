import React from 'react';
import { useSelector } from 'react-redux';
import BookItem from './BookItem';

const BookList = () => {
  const books = useSelector((state) => state.books);

  return (
    <div className='mt-3'>
      {books.length > 0 ? (
        books.map((book) => <BookItem key={book.id} book={book} />)
      ) : (
        <p className='text-center'>No books available</p>
      )}
    </div>
  );
};

export default BookList;