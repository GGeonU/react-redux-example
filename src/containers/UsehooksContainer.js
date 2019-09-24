import React,{useCallback} from 'react'
import {useDispatch, useSelector} from "react-redux";
import Counter from '../components/Counter';
import {zero, decrease, increase} from "../modules/counter";

const UsehooksContainer = () => {
    const number = useSelector(state => state.counter.number);  // state 조회
    const dispatch = useDispatch(); // Container 에서 dispatch를 사용할 수 있게 해줌

    // useCallback 으로 최적화
    const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
    const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
    const onZero = useCallback(() => dispatch(zero()), [dispatch]);

    return <Counter
        number={number}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        onZero={onZero}
    />
};

export default UsehooksContainer;