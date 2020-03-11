import { ADD_PRODUCT, DELETE_PRODUCT } from './cart.actions';

const initialState = {
    products: [],
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                products: state.products.concat(action.payload.data)
            };
        case DELETE_PRODUCT:
            const newProdList = state.products
                .filter(product => product.id !== action.payload.id);
            return {
                ...state,
                products: newProdList,
            };
        default:
            return state;
    };
};