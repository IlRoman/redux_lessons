import { CITIES_LIST } from './weather.actions';

const defaultState = {
    data: [],
}

const dataReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CITIES_LIST: {
            return {
                ...state,
                data: action.payload.data,
            }
        };
        default: return state;
    }
};

export default dataReducer;