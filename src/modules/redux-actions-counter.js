import {createAction, handleActions} from 'redux-actions'

const INCREASE = 'redux-actions-counter/INCREASE';
const DECREASE = 'redux-actions-counter/DECREASE';
const ZERO = 'redux-actions-counter/ZERO';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
export const zero = createAction(ZERO);

const initialState = {
    number: 0
};

const counter = handleActions(
    {
        [INCREASE]: (state, action) => ({number: state.number + 1}),
        [DECREASE]: (state, action) => ({number: state.number - 1}),
        [ZERO]: (state, action) => ({number: 0})
    },
    initialState,
);

export default counter;