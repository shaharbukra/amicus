import { createStore,applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import rootReducer from "./reducers";
// import { requestAllPeople } from './actions';

const store = createStore(rootReducer, applyMiddleware(thunk));
// store.dispatch(requestAllPeople());
export default store;
