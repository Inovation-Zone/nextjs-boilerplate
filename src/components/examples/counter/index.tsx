import React from "react";

import { increaseAction, decreaseAction } from "@redux/counter/actions";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "@redux/rootReducer";

export default function Counter() {
    const dispatch = useDispatch();
    const count = useSelector((state: RootState) => state.counter.count);

    return (
        <div>
            <div>
                <h2>Counter</h2>
                <button type="button" onClick={() => dispatch(increaseAction())}>
                    +
                </button>
                <span>{count}</span>
                <button type="button" onClick={() => dispatch(decreaseAction())}>
                    -
                </button>
            </div>
            <a href="https://react-redux.js.org/">Go To Documentation</a>
        </div>
    );
}
