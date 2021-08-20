import {createStore} from 'redux';
import profileDetailsReducer from './reducer/profile';

const store = createStore(profileDetailsReducer);

export default store;
