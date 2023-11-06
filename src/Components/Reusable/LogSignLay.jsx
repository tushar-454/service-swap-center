import PropTypes from 'prop-types';
import classes from './LogSignLay.module.css';

const LogSignLay = ({
  illustration,
  title,
  handleSubmit,
  isRowDirectionReverse,
  children,
}) => {
  return (
    <div
      className={classes.logSignWrap}
      style={{ flexDirection: isRowDirectionReverse && 'row-reverse' }}
    >
      <div className={classes.logSignImg}>{illustration}</div>
      <div className={classes.logSignForm}>
        <div className={classes.formTitle}>
          <h1>{title}</h1>
        </div>
        <form onSubmit={handleSubmit} className={classes.formWrap}>
          {children}
        </form>
      </div>
    </div>
  );
};

LogSignLay.propTypes = {
  illustration: PropTypes.node,
  children: PropTypes.node,
  title: PropTypes.string,
  handleSubmit: PropTypes.func,
  isRowDirectionReverse: PropTypes.bool,
};

export default LogSignLay;
