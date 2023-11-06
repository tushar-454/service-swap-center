import PropTypes from 'prop-types';
import { useContext, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import classes from './User.module.css';

const User = ({ setNavShow, setDropDownShow }) => {
  const { user } = useContext(AuthContext);
  const { pathname } = useLocation();
  useEffect(() => {
    const navItems = document.querySelectorAll('.createItem');
    navItems.forEach((item) => {
      item.addEventListener('click', () => {
        setNavShow(false);
        setDropDownShow(false);
      });
    });
  }, [setNavShow, setDropDownShow]);
  return (
    <>
      {user ? (
        <></>
      ) : (
        <>
          {pathname === '/login' ? (
            <NavLink
              className={`createItem ${classes.login} ${
                pathname === '/login' && classes.active
              }`}
              to={'/signup'}
            >
              signup
            </NavLink>
          ) : (
            <NavLink
              className={`createItem ${classes.login} ${
                pathname === '/signup' && classes.active
              }`}
              to={'/login'}
            >
              Login
            </NavLink>
          )}
        </>
      )}
    </>
  );
};
User.propTypes = {
  setNavShow: PropTypes.func,
  setDropDownShow: PropTypes.func,
};
export default User;
