export const languageReducer = (state = 'ru', action) => {
    switch (action.type) {
        case 'LANGUAGE':
            return action.payload.language;
        default:
            return state;
    }
}