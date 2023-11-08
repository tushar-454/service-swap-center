import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import swal from 'sweetalert';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import AwesomeBtn from '../Reusable/AwesomeBtn';
import Container from '../Reusable/Container';
import classes from './MySchedules.module.css';

const MySchedules = () => {
  const [myBooked, setMybooked] = useState([]);
  const [showingMyBooked, setShowingMyBooked] = useState([]);
  const [myPendingWork, setMyPendingWork] = useState([]);
  const { user } = useContext(AuthContext);
  const [fetch, setFetch] = useState(false);

  const handleDeleteUserBookedItem = (id) => {
    swal({
      title: 'Are you sure?',
      text: 'You want to delete your booked item.',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`/booking?whoBooked=${user?.email}&id=${id}`)
          .then((res) => {
            if (res.data.deletedCount === 1) {
              swal('Delete successfully', '', 'success');
              const remaing = myBooked.filter((item) => item._id !== id);
              setShowingMyBooked(remaing);
              setFetch(!fetch);
            }
          })
          .catch((error) => swal('There was an error', error.message, 'error'));
      } else {
        swal('Your booking item is not deleted!');
      }
    });
  };

  const handlePendingStatusChange = (e, id) => {
    const statusValue = e.target.value;
    const item =
      e.target.parentElement.parentElement.parentElement.parentElement;
    if (statusValue === 'Completed') {
      item.style.filter = 'brightness(0.9)';
    } else {
      item.style.filter = 'brightness(1)';
    }
    axios
      .put(`/booking?id=${id}`, { status: statusValue })
      .then((res) => {
        if (res.data.modifiedCount === 1) {
          swal('Update status successfully', '', 'success');
        }
      })
      .catch((error) => swal('There was an error !', error.message, 'error'));
  };
  useEffect(() => {
    setTimeout(() => {
      setFetch(!fetch);
    }, 100);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    axios
      .get(`/booking?email=${user?.email}&type=email`)
      .then((res) => setMyPendingWork(res.data));
  }, [user, fetch]);
  useEffect(() => {
    axios.get(`/booking?email=${user?.email}&type=whoBooked`).then((res) => {
      setShowingMyBooked(res.data);
      setMybooked(res.data);
    });
  }, [user, fetch]);
  return (
    <section>
      <Helmet>
        <title>Services Swap Center | My Schedules</title>
      </Helmet>
      <Container>
        <div className={classes.sectionTitle}>
          <h1>My Booking</h1>
        </div>{' '}
        {showingMyBooked.length === 0 && (
          <div className={classes.noFound}>
            <p>You have not added any services</p>
          </div>
        )}
        <div className={classes.bookingServicesWrap}>
          {showingMyBooked.length > 0 &&
            showingMyBooked?.map((bookItem, index) => (
              <div key={index} className={classes.bookingServicesItem}>
                <div className={classes.serviceItemImg}>
                  <img src={bookItem.image} alt='services img' />
                </div>
                <div className={classes.bookingServicesItemContent}>
                  <h1>{bookItem.name}</h1>
                  <p>
                    <b>Description</b>
                    {bookItem.description}
                  </p>
                  <p>
                    <b>Price:</b> {bookItem.price}
                  </p>
                  <p>
                    <b>Instruction: </b>
                    {bookItem.instruction}
                  </p>
                  <p>
                    <b>Status: </b>
                    {bookItem.status}
                  </p>
                  <p>
                    <b>Date: </b>
                    {bookItem.date}
                  </p>
                  <div className={classes.servicesAuthorWrap}>
                    <div className={classes.servicesAuthor}>
                      <img src={bookItem.authorImage} alt='authorimg' />
                      <h3>{bookItem.authorName}</h3>
                    </div>
                    <AwesomeBtn
                      displayName={'Delete'}
                      btnStyle={{ background: '#ff0000a6' }}
                      onClick={() => handleDeleteUserBookedItem(bookItem._id)}
                    />
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className={classes.sectionTitle}>
          <h1>My Pending Work</h1>
        </div>
        {myPendingWork?.length === 0 && (
          <div className={classes.noFound}>
            <p>You have not reaming any pending services</p>
          </div>
        )}
        <div className={classes.bookingServicesWrap}>
          {myPendingWork.length > 0 &&
            myPendingWork?.map((pendingItem, index) => (
              <div
                key={index}
                className={classes.bookingServicesItem}
                style={{
                  filter:
                    pendingItem.status === 'Completed' ? 'brightness(0.9)' : '',
                }}
              >
                <div className={classes.serviceItemImg}>
                  <img src={pendingItem.image} alt='services img' />
                </div>
                <div className={classes.bookingServicesItemContent}>
                  <h1>{pendingItem.name}</h1>

                  <p>
                    <b>Description</b>
                    {pendingItem.description}
                  </p>
                  <p>
                    <b>Price:</b> {pendingItem.price}
                  </p>
                  <p className={classes.instruction}>
                    <b>Instruction</b>:
                    {pendingItem.instruction || 'No Instruction'}
                  </p>
                  <div className={classes.servicesAuthorWrap}>
                    <div className={classes.servicesAuthor}>
                      <img src={pendingItem.customerImg} alt='CustomerImg' />
                      <h3>
                        <b>{pendingItem.customerName}</b>
                      </h3>

                      <div className={classes.viewMore}>
                        <p>
                          Take your service, <b>Date:</b> {pendingItem.date},{' '}
                          <b>Area</b> {pendingItem.servicearea}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className={classes.servicesAuthorWrap}>
                    <div className={classes.servicesAuthor}>
                      <img src={pendingItem.authorImage} alt='authorimg' />
                      <h3>
                        <b>{pendingItem.authorName}</b>
                      </h3>
                    </div>
                    <div className={classes.viewMore}>
                      <select
                        onChange={(e) =>
                          handlePendingStatusChange(e, pendingItem._id)
                        }
                        name='status'
                        defaultValue={pendingItem.status}
                      >
                        <option value='Pending'>Pending</option>
                        <option value='In-Progress'>In-Progress</option>
                        <option value='Completed'>Completed</option>
                      </select>
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

export default MySchedules;
