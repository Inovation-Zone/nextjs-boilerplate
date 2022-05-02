import { ACTION_TYPES } from '@constants/actionTypes';

const increaseAction = () => {
    return {
        type: ACTION_TYPES.COUNTER.INCREASE,
    };
}

const decreaseAction = () => {
    return {
        type: ACTION_TYPES.COUNTER.DECREASE,
    };
}

const increaseActionSuccess = () => {
    return {
        type: ACTION_TYPES.COUNTER.INCREASE_SUCCESS,
    };
}

const decreaseActionSuccess = () => {
    return {
        type: ACTION_TYPES.COUNTER.DECREASE_SUCCESS,
    };
}

export {
    increaseAction,
    decreaseAction,
    increaseActionSuccess,
    decreaseActionSuccess
}