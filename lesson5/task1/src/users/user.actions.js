export const NEXT_USER = 'NEXT_USER';
export const PREVIOUS_USER = 'PREVIOUS_USER';

export const goNext = () => {
    return {
        type: NEXT_USER,
    }
};

export const goPrev = () => {
    return {
        type: PREVIOUS_USER,
    }
};