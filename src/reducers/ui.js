import * as types from './../constants/ui';

const inititalState = {
    showLoading: false
};

const reducer = (state = inititalState, action) => {
    switch (action.type) {
        case types.SHOW_LOADING:
            return {
                ...state,
                showLoading: true
            };
        case types.HIDE_LOADING:
            return {
                ...state,
                showLoading: false
            };
        default:
            return state;
    }
};

export default reducer;