import { FILTER_TEXT } from './users.actions';
import { users } from './users';

const defaultState = {
    usersList: [...users],
    filteredUsers: [],
    filterText: '',
}

export const usersReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FILTER_TEXT: {
            return {
                ...state,
                filterText: action.payload.filterText,
            }
        }
        default:
            return state;
    }
};