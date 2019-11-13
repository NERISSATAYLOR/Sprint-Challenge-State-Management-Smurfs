import React, { useState, useEffect } from 'react';
import SmurfList from './SmurfList';
import axios from 'axios';

const SmurfForm = props => {
    const initialCard = {

        id: Date.now(),
        name: '',
        age: 0,
        height: ''
    }
    const [smurf, setSmurf] = useState(initialCard);

    const handleChange = event => {
        setSmurf({ ...smurf, [event.target.name]: event.target.value });
    };


    const handleSubmit = event => {
        event.preventDefault();
        console.log(smurf);
        if (!smurf.name || !smurf.SmurfName) return
        props.addSmurf(smurf);
        setSmurf(initialCard)

    };



    // console.log('state',this.state)
    return (
        <div className="form">
            <form onSubmit={handleSubmit}>

                <input
                    className="name-input"
                    type="text"
                    name="name"
                    value={props.name}
                    onChange={handleChange}
                />
                <input
                    className="age-input"
                    type="number"
                    name="age"
                    value={props.age}
                    onChange={handleChange}
                />
                <input
                    className="height-input"
                    type="text"
                    name="height"
                    value={props.height}
                    onChange={handleChange}
                />
                <button>Add Smurf</button>
            </form>
        </div>
    )
}
export default SmurfForm;