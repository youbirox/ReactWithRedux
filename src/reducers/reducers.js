import usersReducer from './usersReducers';
import comptesReducer from './comptesReducers';
import transactionsReducer from './transactionsReducers';
import { combineReducers } from 'redux';

const reducers = combineReducers({
    user: usersReducer,
    compte: comptesReducer,
    transactionsReducer: transactionsReducer,
})

//Ce dernier fera office de "root Reducer"

export default reducers