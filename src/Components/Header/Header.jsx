import Container from '../Reusable/Container';
import classes from './Header.module.css';
import Logo from './Logo';
import Navbar from './Navbar';
import User from './User';

const Header = () => {
  return (
    <header>
      <Container>
        <div className={classes.headerWrap}>
          <Logo />
          <div className={classes.userWrap}>
            <Navbar />
            <User />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
