import { Link } from 'react-router-dom';
import logoIcon from '../../assets/logo.png';
import logoText from '../../assets/logoTxt.png';
import classes from './Logo.module.css';

const Logo = () => {
  return (
    <Link to={'/'} className={classes.logoWrap}>
      <img src={logoIcon} width='80px' alt='logo' />
      <img src={logoText} width='130px' alt='logoTxt' />
    </Link>
  );
};

export default Logo;
