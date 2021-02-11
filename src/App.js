/////////////////////////////////////////////////////////////////////////////////
// App.js
// Main app
/////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////
// Imports
/////////////////////////////////////////////////////////////////////////////////

import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

/////////////////////////////////////////////////////////////////////////////////
// Functions
/////////////////////////////////////////////////////////////////////////////////

const App = () => {
  const [response, set_response] = useState("not mounted");
  useEffect(() => {
    const getData = async () => {
      const rep = await axios.get("/calculate")
      set_response(rep.data);
    };
    getData();
  }, [])
  return (
    <div className="App">
      <input />
      <text>The chance of attrition is {response.value}</text>
    </div>
  );
}

export default App;
