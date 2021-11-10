import { Action } from '../actions';
import { ActionType } from '../actions-types';

interface QuizState {
  quizes: {
    id: number;
    title: string;
    quiz: {
      question: string;
      ans1: string;
      ans2: string;
      ans3: string;
      ans4: string;
    }[];
  }[];
  loading: false;
  error: string | null;
}

const initialState: QuizState = {
  loading: false,
  error: null,
  quizes: [],
};

const quizReducer = (state: QuizState = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SEARCH_QUIZZES:
      return { loading: true, error: null, quizes: [] };
    case ActionType.SEARCH_QUIZZES_SUCCESS:
      return { loading: false, error: null, quizes: action.payload };
    case ActionType.SEARCH_QUIZZES_ERROR:
      return { loading: false, error: action.payload, quizes: [] };
    default:
      return state;
  }
};

export default quizReducer;
