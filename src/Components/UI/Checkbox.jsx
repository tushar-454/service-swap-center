import PropTypes from 'prop-types';
import classes from './Checkbox.module.css';

const Checkbox = ({ displayName, id, ...rest }) => {
  return (
    <>
      <input type='checkbox' id={id} {...rest} className={classes.checkbox} />{' '}
      <label htmlFor={id} className={classes.label}>
        {displayName}
      </label>
    </>
  );
};

Checkbox.propTypes = {
  displayName: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Checkbox;
