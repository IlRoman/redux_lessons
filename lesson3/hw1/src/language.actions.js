export const changeLanguage = language => {
    return {
        type: 'LANGUAGE',
        payload: {
            language,
        }
    }
};