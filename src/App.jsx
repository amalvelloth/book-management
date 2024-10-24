import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import BookForm from './components/BookForm';
import BookList from './components/BookList';

const App = () => {
  return (
    <div className='Container w-50 mt-5 p-5 border rounded-4 shadow' style={{margin:'auto'}}>
      <Provider store={store}>
      <div >
        <h3 className='text-center fw-bold'>Book Management System</h3>
        <BookForm />
        <BookList />
      </div>
    </Provider>
    </div>
    
  );
};

export default App;