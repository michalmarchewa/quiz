import { Link } from 'react-router-dom';
import { NavBar, NavElement } from './styles';
import { navigationItems } from './navigationItems';

const Nav: React.FC = () => {
  return (
    <NavBar>
      {navigationItems.map((item) => {
        return (
          <Link
            key={item.title}
            style={{ textDecoration: 'none' }}
            to={item.linkTo}>
            <NavElement>{item.title}</NavElement>
          </Link>
        );
      })}
    </NavBar>
  );
};

export default Nav;
