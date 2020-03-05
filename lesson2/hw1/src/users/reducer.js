const currentState = {
    usersList: []
};

export const usersReducer = (state = currentState, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                usersList: state.usersList.concat(action.user),
            };
        case 'DELETE':
            return {
                ...state,
                usersList: state.usersList.filter(user => user.id !== action.userId),
            };
        default:
            return state
    }
};