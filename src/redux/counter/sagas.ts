import { call, put, all, takeLatest } from 'redux-saga/effects';
import { ACTION_TYPES } from '@constants/actionTypes';
// import httpRequest from '~/services/api';
// import { handleGetApiPath } from '~/utils/api';
// import { API } from '~/services/app.routes';
import {
    increaseActionSuccess,
    decreaseActionSuccess
} from '@redux/counter/actions';

function* increaseSaga() {
    yield put(increaseActionSuccess());
}

function* decreaseSaga() {
    yield put(decreaseActionSuccess());
}

export default all([
    takeLatest(ACTION_TYPES.COUNTER.INCREASE, increaseSaga),
    takeLatest(ACTION_TYPES.COUNTER.DECREASE, decreaseSaga),
]);
