import PropTypes from 'prop-types';
import { useState } from 'react';
import hide from '../../assets/icon/hide.png';
import view from '../../assets/icon/view.png';
import classes from './Input.module.css';

const Input = ({
  id,
  displayName,
  icon,
  type,
  isPassInput,
  error,
  ...rest
}) => {
  const [isPassHide, setIsPassHide] = useState(false);
  return (
    <div className={classes.inputDiv}>
      <label htmlFor={id} className={classes.label}>
        {displayName}
      </label>
      <div className={classes.inputWrap}>
        <img src={icon} className={classes.icon} />
        <input
          id={id}
          type={isPassHide ? 'text' : type}
          {...rest}
          className={classes.input}
          style={{ padding: type === 'password' && '1rem 3rem 1rem 3.1rem' }}
        />
        {isPassInput && (
          <img
            src={isPassHide ? hide : view}
            className={classes.passIcon}
            onClick={() => setIsPassHide(!isPassHide)}
          />
        )}
      </div>
      {error && <p className={classes.error}>{error}</p>}
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  isPassInput: PropTypes.bool,
  displayName: PropTypes.string,
  error: PropTypes.string,
  icon: PropTypes.node,
};

export default Input;
