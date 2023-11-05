import PropTypes from 'prop-types';
import classes from './Button.module.css';

const Button = ({ displayName, ...rest }) => {
  return (
    <button {...rest} className={classes.button}>
      {displayName}
    </button>
  );
};

Button.propTypes = {
  displayName: PropTypes.string.isRequired,
};

export default Button;
