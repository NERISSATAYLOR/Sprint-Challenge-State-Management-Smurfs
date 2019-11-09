import React, { Component } from 'react';
import { SmurfContext } from '../contexts/SmurfContext';
import Smurf from './Smurf';
import { Consumer } from 'http'
import Spinner from './Spinner';

class Smurfs extends Component {
    render() {
        return (

            <Consumer>
                {value => {
                    const { smurf_list, heading } = value;
                    if (smurf_list === undefined || smurf_list.length === 0) {
                        return <Spinner />
                    } else {
                        return (
                            <>
                                <h3>{heading}</h3>
                                <div className="row">
                                    {smurf_list.map(item => (
                                        <Smurf key={item.smurf.id} smurf={item.smurf} />
                                    ))}

                                </div>
                            </>
                        )
                    }
                }}
            </Consumer>



        )
    }
}
export default Smurfs;