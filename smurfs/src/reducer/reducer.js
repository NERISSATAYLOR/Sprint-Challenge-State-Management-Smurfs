import React from 'react';

export const SmurfReducer = (state = initialState, { type: response } = {}) => {
    switch (type) {
        case "ADD":
            return {
                ...state,

                smurfs: [...state.smurfs, { name: action.payload, id: Date.now(), height: action.height, age: action.age, state }],
            };

            export const initialState = {
                status: null,
                response: null,

            }




            export const getSmurfs = () => dispatch => {
                dispatch({ type: FETCHING_SMURFS_START });
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
            export const addNewSmurf = creds => {
                console.log('creds', creds)
                return dispatch => {
                    axios
                        .post('http://localhost:3333/smurfs', creds)
                        .then(res => {
                            console.log('res', res)
                            dispatch({ type: ADD_SMURF, payload: res.data })
                        })
                        .catch(err => console.log(err))
                }
            };

