import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const navItems = [
  {
    id: 1,
    name: 'Home',
    path: '/',
  },
  {
    id: 2,
    name: 'Services',
    path: '/services',
  },
];
const Navbar = () => {
  return (
    <div className={classes.navItemsWrap}>
      {navItems?.map((item) => (
        <NavLink key={item.id} to={item.path} className={classes.navItem}>
          {({ isActive }) => (
            <span className={isActive ? classes.active : ''}>{item.name}</span>
          )}
        </NavLink>
      ))}
    </div>
  );
};

export default Navbar;
