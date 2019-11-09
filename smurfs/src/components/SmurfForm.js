import React, { useState } from 'react';
import SmurfList from './SmurfList';

const SmurfForm = props => {
    const [addSmurf, setAddSmurf] = useState({
        name: '',
        age: 0,
        height: ''
    })


    const handleSubmit = (e) => {
        e.preventDefault();
        props.addSmurf(addSmurf)
        setAddSmurf('');
    }



    function updateSmurf(addSmurf) {
        const { name, age, height } = this.state;
        this.props.addSmurf(addSmurf)




    }
    // console.log('state',this.state)
    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input
                    className="name-input"
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setAddSmurf(e.target.value)}
                />
                <input
                    className="age-input"
                    type="number"
                    name="age"
                    value={age}
                    onChange={(e) => setAddSmurf(e.target.value)}
                />
                <input
                    className="height-input"
                    type="text"
                    name="height"
                    value={height}
                    onChange={(e) => setAddSmurf(e.target.value)}
                />
                <button onClick={updateSmurf}>Update Smurf</button>
            </form>
        </div>
    )
}
export default Form;