import React, { createContext, Component } from 'react';
import axios from 'axios';
const SmurfInfoContext = createContext();
class SmurfContext extends Component {
    constructor(props) {
        super(props);
        this.state = {
            SmurfList: null,
            SmurfForm: null
        }
    }
    componentDidMount() {
        this.loadResource();
    }

    loadResource() {
        axios.get('http://localhost:3333/smurfs')
            .then(res => {
                dispatch({ type: FETCHING_SMURFS_SUCCESS, payload: res.data });
            })
            .catch(err => {
                dispatch({
                    type: FETCHING_SMURFS_FAILURE,
                    payload: `${err.response.message} code: ${err.response.code}`
                });
            });
    }
}
export default SmurfContext; 