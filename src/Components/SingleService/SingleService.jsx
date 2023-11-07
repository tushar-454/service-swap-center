import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import swal from 'sweetalert';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Container from '../Reusable/Container';
import Button from '../UI/Button';
import Input from '../UI/Input';
import classes from './SingleService.module.css';

const SingleService = () => {
  const [service, setService] = useState({});
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [modalShow, setModalShow] = useState(false);
  const [bookingData, setBookingData] = useState({ date: '', instruction: '' });
  const [error, setError] = useState({ date: '' });
  const {
    image,
    name,
    description,
    price,
    servicearea,
    authorImage,
    authorName,
    email,
  } = service;
  // handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData((prevObj) => ({ ...prevObj, [name]: value }));
    setError({ date: '' });
  };
  // handle booking services
  const handleBookingService = (e) => {
    e.preventDefault();
    const { date, instruction } = bookingData;
    if (!date) {
      setError((prevError) => ({ ...prevError, date: 'Date require !' }));
      return;
    }
    const bookedData = {
      image,
      name,
      description,
      price,
      servicearea,
      authorImage,
      authorName,
      email,
      date,
      instruction,
      whoBooked: user?.email,
      customerImg: user?.photoURL,
      customerName: user?.displayName,
      status: '',
    };
    axios
      .post('/booking', bookedData)
      .then((res) => {
        if (res.data.acknowledged) {
          swal('Service Booked', '', 'success');
        }
      })
      .catch((error) => swal('There was an error !', error.message, 'error'));
  };
  useEffect(() => {
    axios(`/service/${id}`).then((res) => setService(res.data[0]));
  }, [id]);
  return (
    <section>
      <Helmet>
        <title>{`Serivce - ${service.name}`}</title>
      </Helmet>
      <Container>
        <div className={classes.servicesItem}>
          <img src={image} alt={image} />
          <div className={classes.servicesItemContent}>
            <h1>{name}</h1>

            <h2>
              <b>Description:</b>
              {description}
            </h2>

            <h3>
              <b>Price:</b> {price}
            </h3>
            <h4>
              <b>Area:</b> {servicearea}
            </h4>
          </div>

          <div className={classes.servicesAuthorWrap}>
            <div className={classes.servicesAuthor}>
              <img src={authorImage} alt={authorImage} />
              <h3>{authorName}</h3>
            </div>
            <div className={classes.viewMore}>
              <button onClick={() => setModalShow(true)}>Book Now</button>
            </div>
          </div>
        </div>
        {modalShow && (
          <div className={classes.bookingModalWrap}>
            <button
              className={classes.modalHideBtn}
              onClick={() => setModalShow(false)}
            >
              X
            </button>
            <div className={classes.bookingModal}>
              <form onSubmit={handleBookingService}>
                <div className={classes.inputGroup}>
                  <Input
                    displayName={'Service Name'}
                    defaultValue={name}
                    readOnly
                  />
                  <div className={classes.modalImage}>
                    <img src={image} />
                  </div>
                </div>
                <div className={classes.inputGroup}>
                  <Input
                    displayName={'Service Provider Email'}
                    defaultValue={email}
                    readOnly
                  />
                  <Input
                    displayName={'Service Provider Name'}
                    defaultValue={authorName}
                    readOnly
                  />
                </div>
                <div className={classes.inputGroup}>
                  <Input
                    displayName={'Service Taking Date'}
                    type={'date'}
                    name={'date'}
                    value={bookingData.date}
                    onChange={handleInputChange}
                    error={error.date}
                  />
                  <Input displayName={'Price'} defaultValue={price} readOnly />
                </div>
                <Input
                  displayName={'Special Instruction'}
                  type={'text'}
                  placeholder={
                    'give your any instruction or customize service you can write here'
                  }
                  name={'instruction'}
                  value={bookingData.instruction}
                  onChange={handleInputChange}
                />
                <Button displayName={'Purchase this Service'} type={'submit'} />
              </form>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

export default SingleService;
