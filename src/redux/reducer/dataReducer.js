const INITIAL_STATE = {
    global: {},
    countries: [],
};

export const dataReducer = ( state = INITIAL_STATE, action ) => {
    switch(action.type) {
        case "FETCH_GLOBAL":
            return {
                ...state,
                global: action.payload,
            }
        case "FETCH_COUNTRIES":
            return {
                ...state,
                countries: action.payload,
            }
        default:
            return state;
    };
};