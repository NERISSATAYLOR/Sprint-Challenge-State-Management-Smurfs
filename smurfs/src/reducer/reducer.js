import { FETCH_SMURF_START, FETCH_SMURF_SUCCESS, FETCH_SMURF_FAIL, ADD_SMURF, DELETE_ITEM, EDIT_ITEM } from "../actions/actions";


export const initialState = {
    smurfs: [], error: "",
    isFetching: false,
};

export const reducer = (state = initialState, action) => {
    // console.log("reducer", action);
    switch (action.type) {
        case FETCH_SMURF_START:
            return {
                ...state,
                smurfs: action.payload,
                isFetching: true,
                error: "Uh oh  .. no action built"
            };
        case FETCH_SMURF_SUCCESS:
            return {
                ...state,
                smurf: action.payload,
                isFetching: false,
                error: ""
            };
        case FETCH_SMURF_FAIL:
            return {
                ...state,
                error: action.payload
            };
        case ADD_SMURF:
            return {
                ...state,
                smurfs: [action.payload, ...state.smurfs]
            };
        case DELETE_ITEM:
            return {
                ...state,
                smurfs: state.smurfs.filter(smurf => smurf._id !== action.payload)

            };

        case EDIT_ITEM:
            return {
                ...state,
                smurfs: state.smurf.map(
                    smurf =>
                        smurf._id === action.payload.id
                            ? action.payload : smurf
                )
            }


        default: return state;
    }
}
