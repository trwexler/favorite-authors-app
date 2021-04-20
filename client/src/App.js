import React, {useState} from 'react';
import Main from './views/Main';
import Create from './views/Create';
import Edit from './views/Edit';
import './App.css';
import {Router} from '@reach/router';

function App() {

  return (
    <div className="App">

    <Router>
      <Main default />
      <Create path="/newAuthor"/>
      <Edit path="/author/:id/edit"/>
    </Router> 

    </div>
  );
}

export default App;
