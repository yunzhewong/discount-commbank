import './App.css';
import React from 'react';

import NavBar from './NavBar/NavBar.js'
import MainBody from './MainBody/MainBody'
import Help from './Help/Help.js'
import Contacts from './Contacts/Contacts.js'

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <MainBody />
      <Help />
      <Contacts />
    </React.Fragment>
  );
}

export default App;
