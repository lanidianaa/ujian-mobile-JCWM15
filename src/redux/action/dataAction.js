import axios from 'axios';

const url = 'https://api.jsonbin.io/b/603e131481087a6a8b9456d1/1';

export const fetchGlobalData = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${url}`);
            dispatch({ type: "FETCH_GLOBAL", payload: response.data.Global });
        } catch (err) {
            console.log(err);
        }
    };
};

export const fetchCountriesData = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${url}`);
            dispatch({ type: "FETCH_COUNTRIES", payload: response.data.Countries });
        } catch (err) {
            console.log(err);
        }
    };
};