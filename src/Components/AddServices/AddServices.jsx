import axios from 'axios';
import { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Toast from '../../Utils/Toast/Toast';
import area from '../../assets/icon/area.png';
import desc from '../../assets/icon/desc.png';
import email from '../../assets/icon/internet.png';
import link from '../../assets/icon/link.png';
import service from '../../assets/icon/service.png';
import userIco from '../../assets/icon/user.png';
import price from '../../assets/icon/wallet.png';
import Container from '../Reusable/Container';
import Button from '../UI/Button';
import Input from '../UI/Input';
import classes from './AddServices.module.css';
const addServicesInit = {
  serviceName: '',
  servicePhotoUrl: '',
  price: '',
  area: '',
  description: '',
};
const errorInit = {
  serviceName: '',
  servicePhotoUrl: '',
  price: '',
  area: '',
  description: '',
};
const AddServices = () => {
  const { user } = useContext(AuthContext);
  const [addServices, setAddServices] = useState({ ...addServicesInit });
  const [error, setError] = useState({ ...errorInit });
  //handle all input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddServices((prevObj) => ({ ...prevObj, [name]: value }));
    setError((prevError) => ({ ...prevError, [name]: '' }));
  };
  const handleAddService = (e) => {
    e.preventDefault();
    const { serviceName, servicePhotoUrl, price, area, description } =
      addServices;
    if (!serviceName) {
      setError((prevError) => ({
        ...prevError,
        serviceName: 'Service name required !',
      }));
      return;
    }
    if (!servicePhotoUrl) {
      setError((prevError) => ({
        ...prevError,
        servicePhotoUrl: 'Service Photo Url required !',
      }));
      return;
    }
    if (!price) {
      setError((prevError) => ({
        ...prevError,
        price: 'Price required !',
      }));
      return;
    }
    if (!area) {
      setError((prevError) => ({
        ...prevError,
        area: 'Area required !',
      }));
      return;
    }
    if (!description) {
      setError((prevError) => ({
        ...prevError,
        description: 'Description required !',
      }));
      return;
    }
    const addServiceBody = {
      email: user?.email,
      authorImage: user?.photoURL,
      authorName: user?.displayName,
      name: serviceName,
      image: servicePhotoUrl,
      price,
      servicearea: area,
      description,
    };
    axios
      .post('/services', addServiceBody)
      .then((res) => {
        if (res.data.acknowledged) {
          Toast('Service added successfully', 'success');
          setAddServices({ ...addServicesInit });
        }
      })
      .catch(() => Toast('There was an error !', 'error'));
  };
  return (
    <section>
      <Container>
        <div className={classes.sectionTitle}>
          <h1>Add your Services</h1>
        </div>
        <form onSubmit={handleAddService}>
          <Input
            displayName={'Service Name'}
            type={'text'}
            id={'serviceName'}
            name={'serviceName'}
            icon={service}
            placeholder={'Enter your service name'}
            value={addServices.serviceName}
            onChange={handleInputChange}
            error={error.serviceName}
          />
          <div className={classes.inputGroup}>
            <Input
              displayName={'Name'}
              type={'text'}
              defaultValue={user?.displayName}
              icon={userIco}
              readOnly
            />
            <Input
              displayName={'Email'}
              type={'email'}
              defaultValue={user?.email}
              icon={email}
              readOnly
            />
          </div>
          <Input
            displayName={'Service Photo Url'}
            type={'url'}
            id={'servicePhotoUrl'}
            name={'servicePhotoUrl'}
            placeholder={'photo url'}
            icon={link}
            value={addServices.servicePhotoUrl}
            onChange={handleInputChange}
            error={error.servicePhotoUrl}
          />
          <div className={classes.inputGroup}>
            <Input
              displayName={'Price'}
              type={'number'}
              id={'price'}
              name={'price'}
              placeholder={'Price'}
              icon={price}
              value={addServices.price}
              onChange={handleInputChange}
              error={error.price}
            />
            <Input
              displayName={'Area'}
              type={'text'}
              id={'area'}
              name={'area'}
              icon={area}
              placeholder={'london , japan'}
              value={addServices.area}
              onChange={handleInputChange}
              error={error.area}
            />
          </div>
          <Input
            displayName={'Description'}
            type={'text'}
            placeholder={'description'}
            name={'description'}
            icon={desc}
            value={addServices.description}
            onChange={handleInputChange}
            error={error.description}
          />
          <Button displayName={'Add Service'} type={'submit'} />
        </form>
      </Container>
    </section>
  );
};

export default AddServices;
