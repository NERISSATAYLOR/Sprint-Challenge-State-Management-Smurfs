import React from 'react';
import axios from 'axios';
class SmurfForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: Date.now,
            name: '',
            age: 0,
            height: ''
        };
    }
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state)
        axios.post('http://localhost:3333/smurfs', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { id, name, age, height } = this.state
        return (

            <div>
                <form onSubmit={this.handleSubmit}>

                    <input
                        placeholder="name"
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.handleChange}
                    />
                    <input
                        placeholder="age"
                        type="number"
                        name="age"
                        value={age}
                        onChange={this.handleChange}
                    />
                    <input
                        placeholder="height"
                        type="text"
                        name="height"
                        value={height}
                        onChange={this.handleChange}
                    />
                    <div>
                        <button type="submit">Add Smurf</button>

                    </div>
                </form>
            </div>
        );
    }
}
export default SmurfForm;




