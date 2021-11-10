import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../actions-types';
import { Action } from '../actions';

export const searchQuizzes = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_QUIZZES,
    });
    try{

    }catch(err){
      
    }
  };
};
