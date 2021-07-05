import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { userLoginReducer } from './reducers/userLoginReducers';

const reducer = combineReducers({ userLogin: userLoginReducer });

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
