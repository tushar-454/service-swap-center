import Container from '../Reusable/Container';
import classes from './Header.module.css';
import Logo from './Logo';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className={classes.header}>
      <Container>
        <div className={classes.headerWrap}>
          <Logo />
          <Navbar />
        </div>
      </Container>
    </header>
  );
};

export default Header;
