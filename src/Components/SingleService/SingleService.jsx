import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from '../Reusable/Container';
import classes from './SingleService.module.css';

const SingleService = () => {
  const [service, setService] = useState({});
  const { id } = useParams();
  const {
    image,
    name,
    description,
    price,
    servicearea,
    authorImage,
    authorName,
  } = service;
  useEffect(() => {
    axios(`/service/${id}`).then((res) => setService(res.data[0]));
  }, [id]);
  return (
    <section>
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
              <button>Book Now</button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SingleService;
