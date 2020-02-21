import {combineReducers} from 'redux';
import CustomListReducer from './reducers/CustomListReducer';

const Reducers = combineReducers({
  customList: CustomListReducer,
});

export default Reducers;
