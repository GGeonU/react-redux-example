import React from 'react';
import {connect} from 'react-redux';
import Counter from "../components/Counter";
import {decrease, increase, zero} from "../modules/counter";

const CounterContainer = ({number, increase, decrease, zero}) => {
    return (<Counter number={number} onIncrease={increase} onDecrease={decrease} onZero={zero}/>)
};

// 따로 함수를 선언해도 가능
// const mapStateToProps = (state) => ({
//     number: state.counter.number,
// });
//
// const mapDispatchToProps = (dispatch) => ({
//     increase: () => {
//         dispatch(increase());
//     },
//     decrease: () => {
//         dispatch(decrease());
//     },
//     zero: () => {
//         dispatch(zero());
//     }
// });

// 직접 익명 함수 형태로 선언 가능
export default connect(
    // mapStateToProps,
    // mapDispatchToProps,
    state => ({
        number: state.counter.number
    }),
    dispatch => ({
        increase: () => dispatch(increase()),
        decrease: () => dispatch(decrease()),
        zero: () => dispatch(zero())
    })
)(CounterContainer);

