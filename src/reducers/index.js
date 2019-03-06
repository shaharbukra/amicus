import { combineReducers } from 'redux';
import people from './peopleReduce';

export default combineReducers({
    people: people
});