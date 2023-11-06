import { useEffect } from 'react';
import sliderOneImg from '../../../assets/services1.jpg';
import sliderTwoImg from '../../../assets/services2.jpg';
import sliderThreeImg from '../../../assets/services3.jpg';
// import Container from '../../Reusable/Container';
import { useState } from 'react';
import classes from './Banner.module.css';

const Banner = () => {
  const [counter, setCounter] = useState(0);
  const [slideLength, setSlideLength] = useState(0);
  const nextSlide = () => {
    if (counter >= slideLength - 1) {
      setCounter(0);
    } else {
      setCounter((prevCount) => prevCount + 1);
    }
  };
  const prevSlide = () => {
    if (counter <= 0) {
      setCounter(slideLength - 1);
    } else {
      setCounter((prevCount) => prevCount - 1);
    }
  };
  useEffect(() => {
    const slidesNode = document.querySelectorAll('.allSlider');
    setSlideLength(slidesNode.length);
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
                <h1>Affordable Price For Car Servicing</h1>
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
                <h1>Affordable Price For Car Servicing</h1>
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
                <h1>Affordable Price For Car Servicing</h1>
                <p>
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.sliderButton}>
          <button onClick={prevSlide}>prev</button>
          <button onClick={nextSlide}>next</button>
        </div>
      </div>
      {/* </Container> */}
    </section>
  );
};

export default Banner;
