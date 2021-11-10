import { Routes, Route } from 'react-router-dom';
import MainPage from './views/MainPage';

const Content = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
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
