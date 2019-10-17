import * as Constants from './../constants/task';


const initialState = {};
const reducer = (state = initialState, action) => {

    switch (action.type) {
        case Constants.FETCH_TASK:
            return {
                ...state,
                listTask: []
            };
        case Constants.FETCH_TASK_SUCCESS:
            return {
                ...state,
                listTask: action.payload.data
            };
        case Constants.FETCH_TASK_FAILED:
            return {
                ...state,
                listTask: []
            };
        case Constants.FILTER_TASK_SUCCESS: {
            const { data } = action.payload;
            return {
                ...state,
                listTask: data
            };
        }

        default:
            return state;
    }
};

export default reducer;