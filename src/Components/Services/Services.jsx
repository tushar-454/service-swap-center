import axios from 'axios';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Toast from '../../Utils/Toast/Toast';
import search from '../../assets/icon/search.png';
import AwesomeBtn from '../Reusable/AwesomeBtn';
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
          {filterServices.length === 0 && (
            <div className={classes.noFound}>
              <p>No services found</p>
            </div>
          )}
          {filterServices.length > 0 &&
            filterServices?.slice(0, showRange).map((service, index) => (
              <div key={index} className={classes.servicesItem}>
                <div className={classes.servicesImg}>
                  <img src={service.image} alt={service.image} />
                </div>
                <div className={classes.servicesItemContent}>
                  <h1>{service.name}</h1>
                  <h2>{service.description.slice(0, 100)}</h2>
                  <h3>
                    <b>Price:</b> {service.price}
                  </h3>
                  <h4>
                    <b>Area:</b> {service.servicearea}
                  </h4>
                  <div className={classes.servicesAuthorWrap}>
                    <div className={classes.servicesAuthor}>
                      <img
                        src={service.authorImage}
                        alt={service.authorImage}
                      />
                      <h3>{service.authorName}</h3>
                    </div>
                    <AwesomeBtn
                      displayName={'View Details'}
                      path={`/service/${service._id}`}
                      btnStyle={{ background: '#f4ff4e' }}
                    />
                  </div>
                </div>
              </div>
            ))}
        </div>
        {filterServices.length > 6 && showRange === 6 && (
          <AwesomeBtn
            style={{ display: 'block', textAlign: 'center' }}
            displayName={'View All'}
            onClick={() => setShowRange(services.length)}
          />
        )}
      </Container>
    </section>
  );
};

export default Services;
