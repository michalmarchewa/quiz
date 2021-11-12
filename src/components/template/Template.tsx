import Nav from '../Nav';
import Footer from '../Footer';
import '../styles/template.css';

const Template: React.FC = ({ children }) => {
  return (
    <div className='mainContainer'>
      <Nav />
      <div className='contentContainer'>{children}</div>
      <Footer />
    </div>
  );
};

export default Template;
