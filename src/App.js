
import './App.css';
import { TableView } from './component/TableView';
import React, { useState } from 'react';

function App() {

  const [components, setComponents] = useState([]);

  return (
    <div className="App">
      <header>
       <h1>ServSys Interview Demo:</h1>
      </header>
  
  <button onClick={ () =>{
     setComponents([...components, "Table View"]) 
   }
  }>
      Get Facts
    </button>
    {components.map((item,i)=> <TableView/>)}
    </div>
  );
}

export default App;
