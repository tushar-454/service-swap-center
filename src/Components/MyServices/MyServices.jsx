import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Container from '../Reusable/Container';
import classes from './MyServices.module.css';

const MyServices = () => {
  const [userAllServices, setUserAllServices] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    axios.get(`/services?email=${user.email}`).then((res) => {
      setUserAllServices(res.data);
    });
  }, [user.email]);
  return (
    <section>
      <Helmet>
        <title>Services Swap Center | My Services</title>
      </Helmet>
      <Container>
        <div className={classes.sectionTitle}>
          <h1>My Services</h1>
        </div>
        {userAllServices.length === 0 && (
          <div className={classes.noFound}>
            <p>You have not added any services</p>
          </div>
        )}
        <div className={classes.manageServicesWrap}>
          {userAllServices.length > 0 &&
            userAllServices?.map((item) => (
              <div key={item._id} className={classes.manageServicesItem}>
                <div className={classes.manageServicesItemImg}>
                  <img src={item.image} alt='services img' />
                </div>
                <div className={classes.manageServicesItemContent}>
                  <h1>{item.name}</h1>

                  <p>
                    <b>Description</b>
                    {item.description}
                  </p>
                  <p>
                    <b>Price:</b> {item.price}
                  </p>
                  <p>
                    <b>Area:</b> {item.servicearea}
                  </p>
                  <div className={classes.servicesAuthorWrap}>
                    <div className={classes.servicesAuthor}>
                      <img src={item.authorImage} alt='authorimg' />
                      <h3>{item.authorName}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </Container>
    </section>
  );
};

export default MyServices;
