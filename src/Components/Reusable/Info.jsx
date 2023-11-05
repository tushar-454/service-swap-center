import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classes from './Info.module.css';

const Info = ({ text, linkText, path }) => {
  return (
    <div className={classes.infoWrap}>
      <p className={classes.info}>
        {text} <Link to={path}>{linkText}</Link>
      </p>
    </div>
  );
};

Info.propTypes = {
  text: PropTypes.string,
  linkText: PropTypes.string,
  path: PropTypes.string,
};

export default Info;
