import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import swal from 'sweetalert';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Container from '../Reusable/Container';
import Button from '../UI/Button';
import Input from '../UI/Input';
import classes from './ManageServices.module.css';

const ManageServices = () => {
  const [userAllServices, setUserAllServices] = useState([]);
  const [showingUserServices, setShowingUserServices] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const { user } = useContext(AuthContext);
  const [willUpdate, setWillUpadate] = useState({});
  const [willUpdateId, setWillUpdateId] = useState('');
  const [fetch, setFetch] = useState(false);

  // handle user added service delete
  const handleDeleteAddService = (id) => {
    swal({
      title: 'Are you sure?',
      text: 'You want to delete your added service',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios.delete(`/services/${id}`).then((res) => {
          if (res.data.deletedCount === 1) {
            swal(
              'Deleted',
              'Your added services deleted successfully',
              'success'
            );
            const remaining = userAllServices.filter((item) => item._id !== id);
            setShowingUserServices(remaining);
          } else {
            swal('There was an error !', '', 'error');
          }
        });
      } else {
        swal('Your services is not deleted!');
      }
    });
  };
  // handle user added sevice update
  const handleUpdateAddServices = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.serviceName.value;
    const image = form.servicePhotoUrl.value;
    const authorName = form.authorName.value;
    const price = form.price.value;
    const servicearea = form.area.value;
    const description = form.desc.value;
    const updatedServicesData = {
      name,
      image,
      authorImage: willUpdate.authorImage,
      authorName,
      price,
      servicearea,
      description,
      email: willUpdate.email,
    };
    axios.put(`/service/${willUpdateId}`, updatedServicesData).then((res) => {
      if (res.data.modifiedCount === 1) {
        swal('Services Data Updated', '', 'success');
        setFetch(!fetch);
      }
    });
  };

  useEffect(() => {
    axios.get(`/services?email=${user.email}`).then((res) => {
      setUserAllServices(res.data);
      setShowingUserServices(res.data);
    });
  }, [user.email, fetch]);
  useEffect(() => {
    axios
      .get(`/service/${willUpdateId}`)
      .then((res) => setWillUpadate(res.data[0]));
  }, [willUpdateId, fetch]);
  return (
    <section>
      <Helmet>
        <title>Services Swap Center | Manage Services</title>
      </Helmet>
      <Container>
        <div className={classes.sectionTitle}>
          <h1>Manage your Services</h1>
        </div>
        {showingUserServices.length === 0 && (
          <div className={classes.noFound}>
            <p>You have not added any services</p>
          </div>
        )}
        <div className={classes.manageServicesWrap}>
          {showingUserServices.length > 0 &&
            showingUserServices?.map((item) => (
              <div key={item._id} className={classes.manageServicesItem}>
                <img src={item.image} alt='services img' />
                <div className={classes.manageServicesItemContent}>
                  <h1>{item.name}</h1>

                  <p>
                    <b>Description</b>
                    {item.description}
                  </p>
                  <p>
                    <b>Price:</b> {item.price}
                  </p>
                </div>

                <div className={classes.servicesAuthorWrap}>
                  <div className={classes.servicesAuthor}>
                    <img src={item.authorImage} alt='authorimg' />
                    <h3>{item.authorName}</h3>
                  </div>
                  <div className={classes.viewMore}>
                    <button
                      onClick={() => {
                        setWillUpdateId(item._id);
                        setModalShow(true);
                      }}
                    >
                      Update
                    </button>{' '}
                    <button onClick={() => handleDeleteAddService(item._id)}>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </Container>
      {modalShow && (
        <div className={classes.bookingModalWrap}>
          <button
            className={classes.modalHideBtn}
            onClick={() => setModalShow(false)}
          >
            X
          </button>
          <div className={classes.bookingModal}>
            <form onSubmit={handleUpdateAddServices}>
              <div className={classes.inputGroup}>
                <Input
                  displayName={'Service Name'}
                  defaultValue={willUpdate.name}
                  name={'serviceName'}
                  type={'text'}
                />
                <Input
                  displayName={'Service PhotoUrl'}
                  defaultValue={willUpdate.image}
                  name={'servicePhotoUrl'}
                  type={'link'}
                />
              </div>
              <div className={classes.inputGroup}>
                <Input
                  displayName={'Service Provider Email'}
                  defaultValue={willUpdate.email}
                  readOnly
                />
                <Input
                  displayName={'Service Provider Name'}
                  defaultValue={willUpdate.authorName}
                  name={'authorName'}
                  type={'text'}
                />
              </div>
              <div className={classes.inputGroup}>
                <Input
                  displayName={'Price'}
                  defaultValue={willUpdate.price}
                  name={'price'}
                  type={'number'}
                />
                <Input
                  displayName={'Services Area'}
                  defaultValue={willUpdate.servicearea}
                  name={'area'}
                  type={'text'}
                />
              </div>
              <Input
                displayName={'Description'}
                defaultValue={willUpdate.description}
                name={'desc'}
                type={'text'}
              />
              <Button displayName={'Update Service'} type={'submit'} />
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default ManageServices;
