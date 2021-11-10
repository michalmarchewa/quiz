import { ActionType } from '../actions-types';


interface SearchQuizAction {
  type: ActionType.SEARCH_QUIZZES;
}
interface SearchQuizSuccessAction {
  type: ActionType.SEARCH_QUIZZES_SUCCESS;
  payload: string[];
}
interface SearchQuizErrorAction {
  type: ActionType.SEARCH_QUIZZES_ERROR;
  payload: string;
}

export type Action =
  | SearchQuizAction
  | SearchQuizSuccessAction
  | SearchQuizErrorAction;