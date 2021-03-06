const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const ZERO = 'counter/ZERO';

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const zero = () => ({ type: ZERO });

const initialState = {
    number: 0
};

function counter(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return{
                number: state.number + 1
            };
        case DECREASE:
            return{
                number: state.number - 1
            };
        case ZERO:
            return{
                number: 0
            };
        default:
            return state;
    }
}

export default counter;
