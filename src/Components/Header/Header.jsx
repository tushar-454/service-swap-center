import classes from './Header.module.css';
import Logo from './Logo';
import Navbar from './Navbar';
import User from './User';

const Header = () => {
  return (
    <header>
      <div className={classes.headerWrap}>
        <Logo />
        <div className={classes.userWrap}>
          <Navbar />
          <User />
        </div>
      </div>
    </header>
  );
};

export default Header;
