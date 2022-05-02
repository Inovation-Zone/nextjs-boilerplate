import { combineReducers } from 'redux';
import counter from "@redux/counter/reducers";

const rootReducer = combineReducers({
    counter,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
