import { createStore, combineReducers } from 'redux';
import { flipPageReducer } from './users/user.reducer';

const reducers = combineReducers({
    users: flipPageReducer,
});

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;