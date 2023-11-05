import PropTypes from 'prop-types';
import classes from './Divider.module.css';

const Divider = ({ text }) => {
  return (
    <div className={classes.divider}>
      <p>{text}</p>
    </div>
  );
};

Divider.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Divider;
