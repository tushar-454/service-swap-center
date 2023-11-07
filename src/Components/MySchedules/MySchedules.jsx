import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import swal from 'sweetalert';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Container from '../Reusable/Container';
import classes from './MySchedules.module.css';

const MySchedules = () => {
  const [myBooked, setMybooked] = useState([]);
  const [showingMyBooked, setShowingMyBooked] = useState([]);
  const [myPendingWork, setMyPendingWork] = useState([]);
  const { user } = useContext(AuthContext);
  // const [pendingWorkId, setPendingWorkId] = useState('');

  const handleDeleteUserBookedItem = (id) => {
    axios
      .delete(`/booking?whoBooked=${user?.email}&id=${id}`)
      .then((res) => {
        if (res.data.deletedCount === 1) {
          swal('Delete successfully', '', 'success');
          const remaing = myBooked.filter((item) => item._id !== id);
          setShowingMyBooked(remaing);
        }
      })
      .catch((error) => swal('There was an error', error.message, 'error'));
  };

  const handlePendingStatusChange = (e, id) => {
    const statusValue = e.target.value;
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
    axios.get(`/booking?email=${user?.email}&type=whoBooked`).then((res) => {
      setShowingMyBooked(res.data);
      setMybooked(res.data);
    });
    axios
      .get(`/booking?email=${user?.email}&type=email`)
      .then((res) => setMyPendingWork(res.data));
  }, [user.email, showingMyBooked]);
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
                  <div className={classes.viewMore}>
                    <button
                      onClick={() => handleDeleteUserBookedItem(bookItem._id)}
                    >
                      Delete
                    </button>
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
              <div key={index} className={classes.bookingServicesItem}>
                <img src={pendingItem.image} alt='services img' />
                <div className={classes.bookingServicesItemContent}>
                  <h1>{pendingItem.name}</h1>

                  <p>
                    <b>Description</b>
                    {pendingItem.description}
                  </p>
                  <p>
                    <b>Price:</b> {pendingItem.price}
                  </p>
                </div>

                <div className={classes.servicesAuthorWrap}>
                  <div className={classes.servicesAuthor}>
                    <img src={pendingItem.customerImg} alt='CustomerImg' />
                    <h3>{pendingItem.customerName}</h3>

                    <div className={classes.viewMore}>
                      <p>
                        Take your service, Date: {pendingItem.date}, Area{' '}
                        {pendingItem.servicearea}
                      </p>
                    </div>
                  </div>
                </div>
                <p className={classes.instruction}>
                  <b>Instruction</b>:
                  {pendingItem.instruction || 'No Instruction'}
                </p>
                <div className={classes.servicesAuthorWrap}>
                  <div className={classes.servicesAuthor}>
                    <img src={pendingItem.authorImage} alt='authorimg' />
                    <h3>{pendingItem.authorName}</h3>
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
            ))}
        </div>
      </Container>
    </section>
  );
};

export default MySchedules;
