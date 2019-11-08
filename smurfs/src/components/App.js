import React, { useContext, Component } from "react";
import "./App.css";
import SmurfContext from '../contexts/SmurfContext';
import { reducer, initialState } from '../reducer';
const App = () => {
  const [state, dispatch] = reducer(smurfReducer, initialState);
  const { smurfs, addSmurf } = state;

  return (
    <SmurfContext.Provider value={{
      smurf: smurf,
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    }}>
      {props.children}
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <Smurf />
      </div>
    </SmurfContext.Provider>
  );
}


export default App;
