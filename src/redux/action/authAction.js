import AsyncStorage from '@react-native-async-storage/async-storage';

export const loginAction = (username) => {
    return async (dispatch) => {
        try {
            dispatch({ type: "AUTH_START" });
            await AsyncStorage.setItem('username', username);
            dispatch({ type: "AUTH_SUCCESS", payload: username });
        } catch (err) {
            dispatch({ type: "AUTH_FAILED", payload: err.message });
        }
    }
};

export const keepLoginAction = () => {
    return async (dispatch) => {
        try {
            const username = await AsyncStorage.getItem('username');
            if(username){
                dispatch({ type: "AUTH_START" });
                dispatch({ type: "AUTH_SUCCESS", payload: username });
            }
        } catch (err) {
            dispatch({ type: "AUTH_FAILED", payload: err.message });
        }
    }
};

export const logoutAction = () => {
    return async (dispatch) => {
        try {
            await AsyncStorage.removeItem('username');
            dispatch({ type: "LOGOUT" });
        } catch (err) {
            dispatch({ type: "AUTH_FAILED", payload: err.message });
        }
    }
}