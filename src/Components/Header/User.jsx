import { useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import classes from './User.module.css';

const User = () => {
  const { user } = useContext(AuthContext);
  const { pathname } = useLocation();
  return (
    <>
      {user ? (
        <></>
      ) : (
        <>
          {pathname === '/login' ? (
            <NavLink
              className={`${classes.login} ${
                pathname === '/login' && classes.active
              }`}
              to={'/signup'}
            >
              signup
            </NavLink>
          ) : (
            <NavLink
              className={`${classes.login} ${
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

export default User;
