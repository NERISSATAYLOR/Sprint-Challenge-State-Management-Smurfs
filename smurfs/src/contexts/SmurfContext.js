import React, { createContext, Component } from 'react';
import axios from 'axios';
export const SmurfContext = createContext();
export class Provider extends Component {

    state = {

        smurf_list: [],
        heading: 'Smurfs Here'

    }
    componentDidMount() {
        axios
            .get('http://localhost:3333/smurfs')
            .then(res => {
                console.log(res.data);
                this.setState({ smurf_list: res.data });
            })
            .catch(err => console.log(err));
    }



    addSmurf = (newSmurfs) => {
        console.log('adding to server', newSmurfs)

        axios
            .post('http://localhost:3333/smurfs', newSmurfs)
            .then(res => {
                console.log('res', res)

                    .catch(err => console.log(err))
            }


        }

    render() {
        return (
            <dic>
                <SmurfContext.Provider value={state}>
                    {this.props.children}
                </SmurfContext.Provider>
            </>
        )
    }

}
