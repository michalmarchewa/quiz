import Template from '../template/Template';
import { useActions } from '../hooks/useActions';
import { useEffect } from 'react';

const QuizView: React.FC = () => {
  const { searchQuizzes } = useActions();

  useEffect(() => {
    searchQuizzes();
  }, [searchQuizzes]);

  return <Template>Quizy:</Template>;
};

export default QuizView;
