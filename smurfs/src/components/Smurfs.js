import React, { useContext } from 'react';
import { SmurfContext } from '../contexts/SmurfContext';
import { get } from 'http'


const Smurfs = ({ name }) => {
    const { smurf } = useContext(SmurfContext);

    get('/smurfs')
    return (
        <div>
            <h1>
                {name}</h1>
            <p>{age}</p>
            <p>  {height}</p>
        </div>
    )
}
export default Smurfs;