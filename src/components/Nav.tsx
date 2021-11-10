import { Link } from 'react-router-dom';
import { NavBar, NavElement } from './styles';

const Nav = () => {
  return (
    <NavBar>
      <NavElement>
        <Link to='/quizy'>Quizy</Link>
      </NavElement>
      <NavElement>
        <Link to='/createquiz'>Stwórz Quiz</Link>
      </NavElement>
    </NavBar>
  );
};

export default Nav;
