import { useEffect } from 'react';
import sliderOneImg from '../../../assets/services1.jpg';
import sliderTwoImg from '../../../assets/services2.jpg';
import sliderThreeImg from '../../../assets/services3.jpg';
import sliderFourImg from '../../../assets/services4.jpg';
import sliderFiveImg from '../../../assets/services5.jpg';
import sliderSixImg from '../../../assets/services6.jpg';
import sliderSevenImg from '../../../assets/services7.jpg';
// import Container from '../../Reusable/Container';
import { useState } from 'react';
import classes from './Banner.module.css';

const Banner = () => {
  const [counter, setCounter] = useState(0);
  const [buttons, setButtons] = useState([]);
  useEffect(() => {
    const slidesNode = document.querySelectorAll('.allSlider');
    setButtons([...new Array(slidesNode.length).keys()]);
    slidesNode.forEach((slide, index) => {
      slide.style.left = `${index * 100}%`;
    });
    slidesNode.forEach((slide) => {
      slide.style.transform = `translate(-${counter * 100}%) skewX(${
        counter * 360
      }deg)`;
    });
  }, [counter]);
  return (
    <section>
      {/* <Container> */}
      <div className={classes.sliderWrap}>
        <div className={classes.slideWrap}>
          {/* slider - 1  */}
          <div className={`${classes.slide} allSlider`}>
            <img src={sliderOneImg} />
            <div className={classes.sideContentWrap}>
              <div className={classes.slideContent}>
                <h1>Ride Sharing</h1>
                <p>
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
              </div>
            </div>
          </div>
          {/* slider - 2  */}
          <div className={`${classes.slide} allSlider`}>
            <img src={sliderTwoImg} />
            <div className={classes.sideContentWrap}>
              <div className={classes.slideContent}>
                <h1>Tool Sharing</h1>
                <p>
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
              </div>
            </div>
          </div>
          {/* slider - 3  */}
          <div className={`${classes.slide} allSlider`}>
            <img src={sliderThreeImg} />
            <div className={classes.sideContentWrap}>
              <div className={classes.slideContent}>
                <h1>All Home Services</h1>
                <p>
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
              </div>
            </div>
          </div>
          {/* slider - 4  */}
          <div className={`${classes.slide} allSlider`}>
            <img src={sliderFourImg} />
            <div className={classes.sideContentWrap}>
              <div className={classes.slideContent}>
                <h1>Child co-oparative Service</h1>
                <p>
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
              </div>
            </div>
          </div>
          {/* slider - 5  */}
          <div className={`${classes.slide} allSlider`}>
            <img src={sliderFiveImg} />
            <div className={classes.sideContentWrap}>
              <div className={classes.slideContent}>
                <h1>Pet Sitting and Walking</h1>
                <p>
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
              </div>
            </div>
          </div>
          {/* slider - 6  */}
          <div className={`${classes.slide} allSlider`}>
            <img src={sliderSixImg} />
            <div className={classes.sideContentWrap}>
              <div className={classes.slideContent}>
                <h1>Book Swap</h1>
                <p>
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
              </div>
            </div>
          </div>
          {/* slider - 7  */}
          <div className={`${classes.slide} allSlider`}>
            <img src={sliderSevenImg} />
            <div className={classes.sideContentWrap}>
              <div className={classes.slideContent}>
                <h1>Clothing Swap</h1>
                <p>
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.sliderButton}>
          {buttons?.map((btn, index) => (
            <button
              key={index}
              onClick={() => setCounter(index)}
              className={index === counter ? classes.active : undefined}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
      {/* </Container> */}
    </section>
  );
};

export default Banner;
