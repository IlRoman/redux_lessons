export const USER_SEARCH = 'USER_SEARCH';
export const FILTER_TEXT = 'FILTER_TEXT';

export const textFilter = filterText => {
    return {
        type: FILTER_TEXT,
        payload: {
            filterText,
        }
    }
};