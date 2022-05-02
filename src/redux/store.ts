import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '@redux/rootReducer';
import rootSaga from '@redux/rootSagas';
import { Func1, StoreEnhancerStoreCreator } from '@reduxjs/toolkit';

const sagaMonitor =
    process.env.REACT_APP_NODE_ENV === 'development'
        ? console.tron.createSagaMonitor()
        : null;

const sagaMiddleware = createSagaMiddleware({
    sagaMonitor,
});

const enhancer: Func1<StoreEnhancerStoreCreator<{}, {}>, any> =
    process.env.REACT_APP_NODE_ENV === 'development'
        ? compose(
              console.tron.createEnhancer(),
              applyMiddleware(sagaMiddleware)
          )
        : applyMiddleware(sagaMiddleware);

const store = createStore(rootReducer, enhancer);

// Running the sagas
sagaMiddleware.run(rootSaga);

export default store;
