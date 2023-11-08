import { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import sliderOneImg from '../../../assets/services1.jpg';
import sliderTwoImg from '../../../assets/services2.jpg';
import sliderThreeImg from '../../../assets/services3.jpg';
import sliderFourImg from '../../../assets/services4.jpg';
import sliderFiveImg from '../../../assets/services5.jpg';
import sliderSixImg from '../../../assets/services6.jpg';
import sliderSevenImg from '../../../assets/services7.jpg';
import classes from './Banner.module.css';

const slidesArray = [
  {
    image: sliderOneImg,
    title: 'House Decoration services',
    desc: 'Transform your space with our expert house decoration services. From concept to creation, well elevate your home aesthetic seamlessly',
  },
  {
    image: sliderTwoImg,
    title: 'Furniture Repair',
    desc: 'Expert furniture repair: Revive your pieces with skilled craftsmanship, restoring beauty and function. Trust us to renew your beloved furniture.',
  },
  {
    image: sliderThreeImg,
    title: 'Pool Cleaning',
    desc: "Professional pool cleaning: Let us maintain your pool's sparkle. Skilled service for crystal-clear water and a pristine swimming experience.",
  },
  {
    image: sliderFourImg,
    title: 'Rooftop Repair',
    desc: 'Skilled rooftop repairs: We fix leaks, damages, and ensure a sturdy, weatherproof roof. Trust us for reliable and efficient repair services.',
  },
  {
    image: sliderFiveImg,
    title: 'AC Installation',
    desc: 'Expert AC installation: Professional service to keep you cool. Quality installations ensuring efficient, reliable cooling for your comfort.',
  },
  {
    image: sliderSixImg,
    title: 'CCTV Installation',
    desc: 'Professional CCTV installations: Secure your space with our expert setup. Trust us for reliable, high-quality surveillance solutions.',
  },
  {
    image: sliderSevenImg,
    title: 'Water Pump Installation',
    desc: 'Efficient water pump installations: Dependable expertise for optimal water flow. Trust our service for reliable and seamless installation.',
  },
];

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
          {slidesArray.map((singleSlide, index) => (
            <div key={index} className={`${classes.slide} allSlider`}>
              <img src={singleSlide.image} />
              <div className={classes.sideContentWrap}>
                <div className={classes.slideContent}>
                  <h1>
                    <Typewriter
                      words={[`${singleSlide.title}`]}
                      loop={1}
                      cursor
                      cursorStyle='_'
                      typeSpeed={70}
                      delaySpeed={1000}
                    />
                  </h1>
                  <span>
                    <Typewriter
                      words={[`${singleSlide.desc}`]}
                      loop={1}
                      cursor
                      cursorStyle='_'
                      typeSpeed={50}
                      delaySpeed={1000}
                    />
                  </span>
                </div>
              </div>
            </div>
          ))}
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
