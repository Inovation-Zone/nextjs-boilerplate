import { all, AllEffect, ForkEffect } from 'redux-saga/effects';
import counter from '@redux/counter/sagas';

export default function* rootSaga(): Generator<AllEffect<AllEffect<ForkEffect<never>>>, any[], any[]> {
    const sagas: any[] = yield all([
        counter
    ]);
    return sagas;
}
