import produce from 'immer';
import { ACTION_TYPES } from '@constants/actionTypes';

interface ICounter {
    count: number;
}

let initialState: ICounter = {
    count: 20,
};

const counter = (state = initialState, action: { type: any; }) => {
    switch (action.type) {
        case ACTION_TYPES.COUNTER.INCREASE_SUCCESS:
            return produce(state, draft => {
                draft.count = draft.count += 1;
            });
        case ACTION_TYPES.COUNTER.DECREASE_SUCCESS:
            return produce(state, draft => {
                draft.count = draft.count -= 1;
            });

        default:
            return state;
    }
}

export default counter;
