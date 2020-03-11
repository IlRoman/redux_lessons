import { createStore, combineReducers } from 'redux';
import { languageReducer } from './language.reducer';
import { cartReducer } from './cart.reducer';
import { userReducer } from './user.reducer';

const reducers = combineReducers({
    language: languageReducer,
    cart: cartReducer,
    user: userReducer,
});

const store = createStore(reducers);

export default store;