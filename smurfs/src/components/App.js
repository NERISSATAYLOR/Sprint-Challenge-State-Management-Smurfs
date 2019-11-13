import React, { useState, useEffect } from "react";
import "./App.css";
import SmurfList from './SmurfList';
import axios from 'axios';
import SmurfForm from './SmurfForm';

const App = () => {

  const [smurfs, setSmurfs] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3333/smurfs')
      .then(res => setSmurfs(res.data))
      .catch(err => console.log('could not add item to server', err))
  }, [])

  const addSmurf = smurf => {
    smurf.id = smurfs.length + 1
    setSmurfs([...smurfs, smurf])
  }

  const editSmurf = editedSmurf => {
    axios.put(`http://localhost:3333/smurfs/${editedSmurf.id}`, editedSmurf)
      .then(res => {
        console.log(res.data);
        const smurfsCopy = [...smurfs];
        const oldSmurf = smurfsCopy.find(smurf => smurf.id === editedSmurf.id);
        oldSmurf.smurfName = editedSmurf.smurfName;
        oldSmurf.smurfAge = editedSmurf.smurfAge;
        oldSmurf.smurfHeight = editedSmurf.smurfHeight;
        setSmurfs(smurfsCopy);
      })
      .catch(err => {
        console.error("Can not edit", err);
      })
  }

  return (

    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
      <SmurfForm addSmurf={addSmurf} />
      <SmurfList smurfs={smurfs} />
    </div>

  );
}


export default App;
