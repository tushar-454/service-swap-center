import PropTypes from 'prop-types';
import classes from './InputFile.module.css';
const InputFile = ({ id, displayName, photoStatus, error, ...rest }) => {
  return (
    <>
      <div className={classes.inputFileWrap}>
        <label htmlFor={id} className={classes.label}>
          {displayName}
        </label>
        <input
          type='file'
          id={id}
          accept='.png,.jpg'
          className={classes.inputFile}
          {...rest}
        />
        <p className={classes.photoStatus}>{photoStatus}</p>
      </div>
      {error && <p className={classes.error}>{error}</p>}
    </>
  );
};
InputFile.propTypes = {
  id: PropTypes.string,
  displayName: PropTypes.string,
  photoStatus: PropTypes.string,
  error: PropTypes.string,
  icon: PropTypes.node,
};
export default InputFile;
