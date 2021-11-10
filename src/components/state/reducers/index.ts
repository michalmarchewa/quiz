import { combineReducers } from 'redux';
import quizReducer from './quizReducer';

const reducers = combineReducers({
  quizzes: quizReducer,
});

export default reducers;
