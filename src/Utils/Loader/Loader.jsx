import classes from './Loader.module.css';

const Loader = () => {
  return (
    <div className={classes.animationWrap}>
      <span className={classes.animation}></span>
    </div>
  );
};

export default Loader;
