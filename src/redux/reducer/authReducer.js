const INITIAL_STATE = {
    username: '',
    isSignedIn: false,
    loading: false,
    error: false,
    errorMessage: '',
};

export const authReducer = ( state = INITIAL_STATE, action ) => {
    switch(action.type) {
        case "AUTH_START":
            return {
                ...state,
                loading: true,
            };
        case "AUTH_SUCCESS":
            return {
                ...state,
                loading: false,
                isSignedIn: true,
                username: action.payload,
            };
        case "AUTH_FAILED":
            return {
                ...state,
                loading: false,
                error: true,
                errorMessage: action.payload,
            };
        case "LOGOUT":
            return INITIAL_STATE;
        default:
            return state;
    };
};