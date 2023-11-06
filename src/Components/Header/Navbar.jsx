import { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import dropdownArrow from '../../assets/icon/arrow-down.png';
import menu from '../../assets/icon/menu.png';
import cross from '../../assets/icon/remove.png';
import classes from './Navbar.module.css';
import User from './User';

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
  const { user, logOutAccount } = useContext(AuthContext);
  const [navShow, setNavShow] = useState(false);
  const [dropDownShow, setDropDownShow] = useState(false);
  useEffect(() => {
    const itemsOfNav = document.querySelectorAll('.itemOfNav');
    itemsOfNav.forEach((item) => {
      item.addEventListener('click', () => {
        setNavShow(false);
        setDropDownShow(false);
      });
    });
    window.addEventListener('scroll', () => {
      setNavShow(false);
      setDropDownShow(false);
    });
  }, []);
  return (
    <>
      <div className={classes.commonNavBar}>
        <img
          src={navShow ? cross : menu}
          alt='menu'
          onClick={() => setNavShow(!navShow)}
        />
      </div>
      <div
        className={`${classes.navItemsWrap} ${navShow ? classes.navShow : ''}`}
      >
        {navItems?.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            className={`itemOfNav ${classes.navItem}`}
          >
            {({ isActive }) => (
              <span className={isActive ? classes.active : ''}>
                {item.name}
              </span>
            )}
          </NavLink>
        ))}
        <>
          {user && (
            <>
              <div className={classes.dropdownWrap}>
                <div
                  className={`${classes.navItem} ${classes.dropdownItem}`}
                  onClick={() => setDropDownShow(!dropDownShow)}
                >
                  <span>Dashboard</span>
                  <img
                    src={dropdownArrow}
                    className={`${classes.arrow} ${
                      dropDownShow && classes.arrowRotate
                    }`}
                  />
                </div>
                <div
                  className={`${classes.dropdown} ${
                    dropDownShow && classes.dropdownShow
                  }`}
                >
                  <Link
                    to={'/my-services'}
                    className={`itemOfNav ${classes.navItem}`}
                  >
                    <span>My-Services</span>
                  </Link>
                  <Link
                    to={'/add-services'}
                    className={`itemOfNav ${classes.navItem}`}
                  >
                    <span>Add-Services</span>
                  </Link>
                  <Link
                    to={'/my-schedules'}
                    className={`itemOfNav ${classes.navItem}`}
                  >
                    <span>My-Schedules</span>
                  </Link>
                </div>
              </div>
              <Link
                className={`itemOfNav ${classes.navItem}`}
                onClick={logOutAccount}
              >
                <span>Logout</span>
              </Link>
            </>
          )}
        </>
        <User setNavShow={setNavShow} setDropDownShow={setDropDownShow} />
      </div>
    </>
  );
};

export default Navbar;
