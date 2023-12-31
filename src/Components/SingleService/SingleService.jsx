import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import swal from 'sweetalert';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import emailIco from '../../assets/icon/internet.png';
import instruction from '../../assets/icon/planning.png';
import serviceName from '../../assets/icon/serviceTo.png';
import date from '../../assets/icon/timetable.png';
import provider from '../../assets/icon/user.png';
import wallet from '../../assets/icon/wallet.png';
import AwesomeBtn from '../Reusable/AwesomeBtn';
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
  const [allServicesCurProvider, setAllServicesCurProvider] = useState([]);
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
      status: 'Pending',
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
    axios(`/services?email=${email}`).then((res) =>
      setAllServicesCurProvider(res.data)
    );
  }, [id, email]);
  return (
    <section>
      <Helmet>
        <title>{`Serivce - ${service.name}`}</title>
      </Helmet>
      <Container>
        <div className={classes.wrapper}>
          <div className={classes.servicesItem}>
            <div className={classes.servicesItemImg}>
              <img src={image} alt={image} />
            </div>
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
              <div className={classes.servicesAuthorWrap}>
                <div className={classes.servicesAuthor}>
                  <img src={authorImage} alt={authorImage} />
                  <h3>{authorName}</h3>
                </div>
                <AwesomeBtn
                  displayName={'Book now'}
                  onClick={() => setModalShow(true)}
                />
              </div>
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
                    icon={serviceName}
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
                    icon={emailIco}
                    readOnly
                  />
                  <Input
                    displayName={'Service Provider Name'}
                    defaultValue={authorName}
                    icon={provider}
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
                    icon={date}
                  />
                  <Input
                    displayName={'Price'}
                    defaultValue={price}
                    icon={wallet}
                    readOnly
                  />
                </div>
                <Input
                  displayName={'Special Instruction'}
                  type={'text'}
                  placeholder={
                    'give your any instruction or customize service you can write here'
                  }
                  icon={instruction}
                  name={'instruction'}
                  value={bookingData.instruction}
                  onChange={handleInputChange}
                />
                <Button displayName={'Purchase this Service'} type={'submit'} />
              </form>
            </div>
          </div>
        )}
        {allServicesCurProvider?.length > 1 && (
          <div className={classes.sectionTitle}>
            <h1>Other Services</h1>
          </div>
        )}
        {/* {allServicesCurProvider?.length === 1 && (
          <div className={classes.noFound}>
            <p>No more services for this provider</p>
          </div>
        )} */}
        <div className={classes.otherServicesWrap}>
          {allServicesCurProvider
            ?.filter((item) => item._id !== id)
            ?.map((service, index) => (
              <div key={index} className={classes.otherServicesItem}>
                <div className={classes.otherServiceImg}>
                  <img src={service.image} alt='services img' />
                </div>
                <div className={classes.otherServicesItemContent}>
                  <h1>{service.name}</h1>

                  <span>
                    <b>Description</b>
                    {service.description.slice(0, 100)}
                  </span>
                  <p>
                    <b>Price:</b> {service.price}
                  </p>
                </div>

                <div className={classes.servicesAuthorWrap}>
                  <div className={classes.servicesAuthor}>
                    <img src={service.authorImage} alt='authorimg' />
                    <h3>{service.authorName}</h3>
                  </div>
                  <AwesomeBtn
                    displayName={'View Details'}
                    path={`/service/${service._id}`}
                  />
                </div>
              </div>
            ))}
        </div>
      </Container>
    </section>
  );
};

export default SingleService;
