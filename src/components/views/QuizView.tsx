import Nav from '../Nav';
import { useActions } from '../hooks/useActions';
import { useEffect } from 'react';

const QuizView = () => {
  const { searchQuizzes } = useActions();

  useEffect(() => {
    searchQuizzes();
  }, []);

  return (
    <>
      <Nav />
      <div>Quizy:</div>
    </>
  );
};

export default QuizView;
