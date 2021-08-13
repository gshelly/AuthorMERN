import Main from './Views/Main'
import AddEditAuthor from './Components/AddEditAuthor';
import {Router} from '@reach/router'
import React, { useState } from 'react';
import './App.css';

function App() {
  const [editAuthor, setEditAuthor ] = useState("")

  return (
    <div className="App">
      <Router>
        <Main path='/' setEditAuthor={setEditAuthor} />
        <AddEditAuthor path='/new' />
        <AddEditAuthor editAuthor={editAuthor} path='/edit/:id' />
      </Router>
    </div>
  );
}

export default App;
