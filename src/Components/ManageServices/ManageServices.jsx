import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import swal from 'sweetalert';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Container from '../Reusable/Container';
import classes from './ManageServices.module.css';

const ManageServices = () => {
  const [userAllServices, setUserAllServices] = useState([]);
  const [showingUserServices, setShowingUserServices] = useState([]);
  const { user } = useContext(AuthContext);

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

  useEffect(() => {
    axios.get(`/services?email=${user.email}`).then((res) => {
      setUserAllServices(res.data);
      setShowingUserServices(res.data);
    });
  }, [user.email]);
  return (
    <section>
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
                    <button>Update</button>{' '}
                    <button onClick={() => handleDeleteAddService(item._id)}>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </Container>
    </section>
  );
};

export default ManageServices;
