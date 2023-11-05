import { Link } from 'react-router-dom';
import Button from '../Components/UI/Button';
import errorGif from '../assets/error.gif';
import classes from './ErrorRoutes.module.css';
const ErrorRoutes = () => {
  return (
    <div className={classes.errorRoutes}>
      <img src={errorGif} alt='' />
      <Link to={'/'}>
        <Button displayName={'Go Home'} />
      </Link>
    </div>
  );
};

export default ErrorRoutes;
