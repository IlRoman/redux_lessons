export const CITIES_LIST = 'CITIES_LIST';

export const getWeatherData = () => {
    return function (dispatch) {
        return fetch('https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/cities')
            .then(response => response.json())
            .then(elements => {
                dispatch(getCities(elements))
            })
    }
};

export const getCities = data => {
    return {
        type: CITIES_LIST,
        payload: {
            data,
        }
    }
};
