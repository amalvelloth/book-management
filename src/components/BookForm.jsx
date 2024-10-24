import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/actions';

const BookForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      const newBook = {
        id: Date.now(),
        title,
        author,
      };
      dispatch(addBook(newBook));
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Book Title"
        className='form-control mt-3'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Author"
        className='form-control mt-2'
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <div className='d-grid mt-3'>
      <button type="submit" className='btn btn-success'>Add Book</button>
      </div>
      
    </form>
  );
};

export default BookForm;