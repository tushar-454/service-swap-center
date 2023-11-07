import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Container from '../Reusable/Container';
import classes from './MySchedules.module.css';

const MySchedules = () => {
  const [myBooked, setMybooked] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    axios
      .get(`/booking?email=${user?.email}&type=whoBooked`)
      .then((res) => setMybooked(res.data));
  }, [user.email]);
  return (
    <section>
      <Helmet>
        <title>Services Swap Center | My Schedules</title>
      </Helmet>
      <Container>
        <div className={classes.sectionTitle}>
          <h1>My Booking</h1>
        </div>{' '}
        {myBooked.length === 0 && (
          <div className={classes.noFound}>
            <p>You have not added any services</p>
          </div>
        )}
        <div className={classes.bookingServicesWrap}>
          {myBooked.length > 0 &&
            myBooked?.map((bookItem, index) => (
              <div key={index} className={classes.bookingServicesItem}>
                <img src={bookItem.image} alt='services img' />
                <div className={classes.bookingServicesItemContent}>
                  <h1>{bookItem.name}</h1>

                  <p>
                    <b>Description</b>
                    {bookItem.description}
                  </p>
                  <p>
                    <b>Price:</b> {bookItem.price}
                  </p>
                </div>

                <div className={classes.servicesAuthorWrap}>
                  <div className={classes.servicesAuthor}>
                    <img src={bookItem.authorImage} alt='authorimg' />
                    <h3>{bookItem.authorName}</h3>
                  </div>
                  <div className={classes.viewMore}>
                    <button>Delete</button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className={classes.sectionTitle}>
          <h1>My Pending Work</h1>
        </div>
      </Container>
    </section>
  );
};

export default MySchedules;
