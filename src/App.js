import './App.css';
import React, {useState, useEffect} from 'react';

import NavBar from './NavBar/NavBar.js'
import MainBody from './MainBody/MainBody'
import Help from './Help/Help.js'
import Contacts from './Contacts/Contacts.js'

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect (()=>{
      const handleResize = () => setWidth(window.innerWidth);

      window.addEventListener('resize', handleResize)
      console.log(width);
      return ()=> {
          window.removeEventListener('resize', handleResize)
      }
  })
  
  return (
    <React.Fragment>
      <NavBar width={width}/>
      <MainBody width={width}/>
      <Help width={width}/>
      <Contacts width={width}/>
    </React.Fragment>
  );
}

export default App;
