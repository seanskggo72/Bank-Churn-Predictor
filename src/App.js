/////////////////////////////////////////////////////////////////////////////////
// App.js
// Main app
/////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////
// Imports
/////////////////////////////////////////////////////////////////////////////////

import './App.css';
import React, { useState } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

/////////////////////////////////////////////////////////////////////////////////
// Functions
/////////////////////////////////////////////////////////////////////////////////

const App = () => {
  const [response, set_response] = useState("");
  const [values, set_values] = useState({
    'Gender': null,
    'Dependent_count': null,
    'Marital_Status': null,
    'Income_Category': null,
    'Total_Relationship_Count': null,
    'Months_Inactive_12_mon': null,
    'Contacts_Count_12_mon': null,
    'Total_Revolving_Bal': null,
    'Total_Amt_Chng_Q4_Q1': null,
    'Total_Trans_Amt': null,
    'Total_Trans_Ct': null,
    'Total_Ct_Chng_Q4_Q1': null,
  });
  const click = () => {
    // // Check for complete input
    // for (let i of Object.values(values)) {
    //   if (i === null) {
    //     set_response("Please fill in all inputs");
    //     return
    //   }
    // }
    const getData = async () => {
      const rep = await axios.get("/calculate")
      set_response("The chance of attrition is: " + rep.data.value);
    };
    getData();
  }
  return (
    <div className="App">
      <text>{response}</text>
      <input type="text" onChange={(event) => {
        let temp = { ...values }
        temp["Total_Revolving_Bal"] = event.target.value;
        set_values(temp)
      }} />
      <DropdownButton variant="primary" id="dropdown1" title="Gender">
        <Dropdown.Item>Male</Dropdown.Item>
        <Dropdown.Item>Female</Dropdown.Item>
      </DropdownButton>
      <button onClick={click}>Submit</button>
    </div>
  );
}

export default App;
