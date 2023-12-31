import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classes from './AwesomeBtn.module.css';
const AwesomeBtn = ({ style, btnStyle, path, displayName, ...rest }) => {
  return (
    <div className={classes.customButton} style={style}>
      <button style={btnStyle} {...rest}>
        <Link to={path}>
          <span className={classes.text}>{displayName}</span>
        </Link>
      </button>
    </div>
  );
};
AwesomeBtn.propTypes = {
  displayName: PropTypes.string.isRequired,
  path: PropTypes.string,
  style: PropTypes.object,
  btnStyle: PropTypes.object,
};
export default AwesomeBtn;
