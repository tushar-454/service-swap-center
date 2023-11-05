import logoIcon from '../../assets/logo.png';
import logoText from '../../assets/logoTxt.png';
import classes from './Logo.module.css';

const Logo = () => {
  return (
    <div className={classes.logoWrap}>
      <img src={logoIcon} width='80px' alt='logo' />
      <img src={logoText} width='130px' alt='logoTxt' />
    </div>
  );
};

export default Logo;
