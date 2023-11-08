import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../../Reusable/Container';
import classes from './PopulerServices.module.css';
const PopulerServices = () => {
  const [popularServices, setPopularServices] = useState([]);
  useEffect(() => {
    axios.get('/services').then((res) => setPopularServices(res.data));
  }, []);
  return (
    <section>
      <Container>
        <div className={classes.sectionTitle}>
          <h1>Popular Services</h1>
        </div>
        <div className={classes.popularServicesWrap}>
          {popularServices?.slice(0, 4).map((service, index) => (
            <div key={index} className={classes.popularServicesItem}>
              <img src={service.image} alt='services img' />
              <div className={classes.popularServicesItemContent}>
                <h1>{service.name}</h1>

                <p>
                  <b>Description: </b>
                  {service.description.slice(0, 100)}
                </p>
                <p>
                  <b>Price:</b> {service.price}
                </p>
                <p>
                  <b>Area:</b> {service.servicearea}
                </p>
              </div>

              <div className={classes.servicesAuthorWrap}>
                <div className={classes.servicesAuthor}>
                  <img src={service.authorImage} alt='authorimg' />
                  <h3>{service.authorName}</h3>
                </div>
                <div className={classes.viewMore}>
                  <button>
                    <Link to={`/service/${service._id}`}>view Details</Link>
                  </button>
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
