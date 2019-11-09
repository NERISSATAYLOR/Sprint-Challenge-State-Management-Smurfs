import React, { useState } from "react";
import "./App.css";
import { Provider } from '../contexts/SmurfContext';
import SmurfForm from './SmurfForm';
const App = () => {
  const [smurfs] = useState('');
  const [smurf, setSmurf] = useState([]);

  const addItem = item => {
    setSmurf([...smurf, item])
  }
  return (
    <Provider>
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <SmurfForm />
      </div>
    </Provider>
  );
}


export default App;
