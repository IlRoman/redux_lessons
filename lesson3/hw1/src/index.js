import store from './store';
import { removeUser, setUser } from './user.actions';
import { setLanguage } from './language.actions';
import { removeProduct, addProduct } from './cart.actions';

const test = () => {
    store.subscribe(() => console.log(store.getState()));
    store.dispatch(addProduct({ id: 1, name: 'Butter' }));
    store.dispatch(addProduct({ id: 2, name: 'Bread' }));
    store.dispatch(removeProduct(1));
    store.dispatch(setUser({ name: 'Roman' }));
    store.dispatch(removeUser());
    store.dispatch(setLanguage('ru'))
}

test();