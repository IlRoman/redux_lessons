import store from './store';
import { increment, decrement, reset } from './counter.actions';
import { addUser, deleteUser, updateUser } from './users.actions';

store.subscribe(() => console.log(store.getState()));

store.dispatch(decrement());
store.dispatch(increment());
store.dispatch(reset());

store.dispatch(addUser({ name: 'Roma', age: 28, id: 2 }));
store.dispatch(updateUser(2, { name: 'Oleg', age: 50 }));