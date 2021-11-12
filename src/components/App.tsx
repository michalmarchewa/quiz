import { BrowserRouter as Router } from 'react-router-dom';
import Content from './Content';
import './styles/app.css'
const App:React.FC = () => {
  return (
    <Router>
      <Content />
    </Router>
  );
};

export default App;
