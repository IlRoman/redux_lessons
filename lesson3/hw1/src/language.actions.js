export const setLanguage = language => {
    return {
        type: 'LANGUAGE',
        payload: {
            language,
        }
    };
};