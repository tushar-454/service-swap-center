import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import signout from '../../assets/icon/exit.png';
import classes from './User.module.css';

const User = ({ setNavShow, setDropDownShow }) => {
  const { user, profilePhoto, logOutAccount } = useContext(AuthContext);
  const [isShowProDropdown, setShowProDropdown] = useState(false);
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
        <div className={classes.userWrap}>
          <div className={classes.userProfile}>
            <div className={classes.userProfileWrap}>
              <img
                src={user?.photoURL || profilePhoto}
                alt='profile image'
                onClick={() => setShowProDropdown(!isShowProDropdown)}
              />
              <div
                className={classes.userProfileDropdownWrap}
                style={{
                  transform: `scale(${isShowProDropdown ? 1 : 0})`,
                }}
              >
                <div className={classes.userProfileInfo}>
                  <h4>{user?.displayName}</h4>
                  <p>{user?.email.slice(0, user?.email.indexOf('@'))}</p>
                </div>
                <div
                  className={classes.userProfileDropdown}
                  onClick={logOutAccount}
                >
                  <img src={signout} alt='night mode icon' />
                  <p>Signout</p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
