import { Routes, Route } from 'react-router-dom';
import CreateQuiz from './views/CreateQuiz';
import MainPage from './views/MainPage';
import QuizView from './views/QuizView';

const Content: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='quizzes' element={<QuizView />} />
      <Route path='createquiz' element={<CreateQuiz />} />
      <Route
        path='*'
        element={
          <main style={{ padding: '1rem' }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  );
};

export default Content;
