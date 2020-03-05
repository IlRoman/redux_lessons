import store from './store';
import { addUser, deleteUser } from './users/actions';

const start = () => {
    store.subscribe(() => console.log(store.getState()));
    store.dispatch(addUser({ id: 76, name: 'Sarah' }));
    store.dispatch(deleteUser(76));
}

start();