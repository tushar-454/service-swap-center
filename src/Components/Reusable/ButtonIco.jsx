import PropTypes from 'prop-types';
import classes from './ButtonIco.module.css';

const ButtonIco = ({ icon, displayName, ...rest }) => {
  return (
    <div className={classes.buttonIcoWrap} {...rest}>
      <div className={classes.buttonIco}>
        <img src={icon} />
        <p>{displayName}</p>
      </div>
    </div>
  );
};

ButtonIco.propTypes = {
  icon: PropTypes.node,
  displayName: PropTypes.node,
};

export default ButtonIco;
