import { Link } from 'react-router-dom';
import athor from '../../../assets/icon/user.png';
import service1 from '../../../assets/services1.jpg';
import Container from '../../Reusable/Container';
import classes from './PopulerServices.module.css';
const popularServicesArray = [{}, {}, {}, {}];
const PopulerServices = () => {
  return (
    <section>
      <Container>
        <div className={classes.sectionTitle}>
          <h1>Popular Services</h1>
        </div>
        <div className={classes.popularServicesWrap}>
          {popularServicesArray?.map((item, index) => (
            <div key={index} className={classes.popularServicesItem}>
              <img src={service1} alt='services img' />
              <div className={classes.popularServicesItemContent}>
                <h3>Child Co opareatiov</h3>

                <p>
                  beauty lies in its unpredictable moments; cherish them all.
                </p>

                <p>Price</p>
              </div>

              <div className={classes.servicesAuthorWrap}>
                <div className={classes.servicesAuthor}>
                  <img src={athor} alt='authorimg' />
                  <h3>authorname</h3>
                </div>
                <div className={classes.viewMore}>
                  <button>view more</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={classes.viewAll}>
          <button>
            <Link to={'/services'}>View All</Link>
          </button>
        </div>
      </Container>
    </section>
  );
};

export default PopulerServices;
