import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../actions-types';
import { Action } from '../actions';

export const searchQuizzes = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_QUIZZES,
    });
    try {
      const myData = await axios.get(
        `https://quiz-74464-default-rtdb.europe-west1.firebasedatabase.app`
      );
      //   `mongodb+srv://MarcheM:${process.env.REACT_APP_mongoPassword}@cluster0.f4eyz.mongodb.net/${process.env.mongoDatabase}?retryWrites=true&w=majority`

      console.log(myData);
    } catch (err: any) {
      dispatch({
        type: ActionType.SEARCH_QUIZZES_ERROR,
        payload: err.message,
      });
    }
  };
};
