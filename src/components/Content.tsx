import { Routes, Route } from 'react-router-dom';
import MainPage from './views/MainPage';
import QuizView from './views/QuizView';

const Content = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='quizy' element={<QuizView />} />
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
