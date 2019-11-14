
import axios from 'axios';

export const FETCH_SMURF_START = "FETCH_SMURF_START";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_FAIL = "FETCH_SMURF_FAIL";
export const ADD_SMURF = "ADD_SMURF";
export const DELETE_ITEM = "DELETE_ITEM"
export const EDIT_ITEM = "EDIT_ITEM"

export const getSmurf = () => dispatch => {
    console.log("action");
    dispatch({ type: FETCH_SMURF_START });
    axios
        .get("http://localhost:3333/smurfs")
        .then(res =>
            dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: FETCH_SMURF_FAIL, payload: err }));
};
export const addSmurf = smurf => dispatch => {
    axios.post('/smurfs', smurf).then(res =>
        dispatch({
            payload: res.data
        })
    );
}

export function loadSmurf() {
    return (dispatch) => {
        return axios.get("http://localhost:3333/smurfs")
            .then(response => {
                dispatch(loadSmurf(response.data))
            })
    }

}
