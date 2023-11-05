import { NavLink } from 'react-router-dom';
import classes from './User.module.css';

const User = () => {
  return (
    <div>
      <NavLink className={classes.login}>Login</NavLink>
    </div>
  );
};

export default User;
