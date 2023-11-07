import axios from 'axios';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Toast from '../../Utils/Toast/Toast';
import search from '../../assets/icon/search.png';
import Container from '../Reusable/Container';
import Input from '../UI/Input';
import classes from './Services.module.css';
const Services = () => {
  const [services, setServices] = useState([]);
  const [filterServices, setFilterServices] = useState([]);
  const [showRange, setShowRange] = useState(6);
  const handleSearch = (e) => {
    const value = e.target.value;
    const searchServices = services.filter((service) =>
      service.name.toLowerCase().includes(value.toLowerCase())
    );
    if (searchServices.length === 0) {
      Toast('No services Found!', 'info');
    }
    if (value === '') {
      setFilterServices(services);
      return;
    }
    setFilterServices(searchServices);
  };
  useEffect(() => {
    axios.get('/services').then((res) => {
      setServices(res.data);
      setFilterServices(res.data);
    });
  }, []);
  return (
    <section>
      <Helmet>
        <title>Services Swap Center | Services</title>
      </Helmet>
      <Container>
        <div className={classes.sectionTitle}>
          <h1>Our All Services</h1>
        </div>
        <div className={classes.searchServices}>
          <Input
            displayName={'Service Name'}
            id={'search'}
            type={'text'}
            icon={search}
            placeholder={'Search your services'}
            onChange={handleSearch}
          />
        </div>
        <div className={classes.servicesWraper}>
          {filterServices?.slice(0, showRange).map((service, index) => (
            <div key={index} className={classes.servicesItem}>
              <img src={service.image} alt={service.image} />
              <div className={classes.servicesItemContent}>
                <h1>{service.name}</h1>

                <h2>
                  <b>Description:</b>
                  {service.description.slice(0, 100)}
                </h2>

                <h3>
                  <b>Price:</b> {service.price}
                </h3>
                <h4>
                  <b>Area:</b> {service.servicearea}
                </h4>
              </div>

              <div className={classes.servicesAuthorWrap}>
                <div className={classes.servicesAuthor}>
                  <img src={service.authorImage} alt={service.authorImage} />
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
        <div
          className={`${classes.viewAll} ${
            showRange > 6 || services.length === 6 ? classes.hideBtn : undefined
          }`}
          onClick={() => setShowRange(services.length)}
        >
          <button>View All</button>
        </div>
      </Container>
    </section>
  );
};

export default Services;
