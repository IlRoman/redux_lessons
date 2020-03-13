export const NEXT_USER = 'NEXT_USER';
export const PREVIOUS_USER = 'PREVIOUS_USER';

export const nextPage = () => {
    return {
        type: NEXT_USER,
    }
};

export const prevPage = () => {
    return {
        type: PREVIOUS_USER,
    }
};