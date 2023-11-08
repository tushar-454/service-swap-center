import message from '../../../assets/icon/desc.png';
import email from '../../../assets/icon/internet.png';
import user from '../../../assets/icon/user.png';
import AwesomeBtn from '../../Reusable/AwesomeBtn';
import Container from '../../Reusable/Container';
import Input from '../../UI/Input';
import classes from './Feedback.module.css';
const Feedback = () => {
  return (
    <section>
      <Container>
        <div className={classes.sectionTitle}>
          <h1>Feedback</h1>
        </div>
        <div className={classes.feedbackWrap}>
          <div className={classes.map}>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23466.897462946716!2d-93.27303803463687!3d44.9731092718096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b33298e2cb276b%3A0x78dceabfd34b3214!2sHomeservices%20of%20America%20Inc!5e0!3m2!1sen!2sbd!4v1699450477930!5m2!1sen!2sbd'
              frameBorder='0'
              height='450'
              width='425'
              loading='lazy'
            ></iframe>
          </div>
          <div className={classes.feedbackContent}>
            <Input
              displayName={'Your Name'}
              type={'text'}
              placeholder={'jone smit'}
              icon={user}
            />
            <Input
              displayName={'Your email'}
              type={'email'}
              placeholder={'example@gmail.com'}
              icon={email}
            />
            <Input
              displayName={'Message'}
              type={'text'}
              placeholder={
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate animi debitis est necessitatibus in rem reiciendis natus fugit magni perspiciatis!'
              }
              icon={message}
            />
            <AwesomeBtn
              displayName={'Send feedback'}
              btnStyle={{ background: '#00a800' }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Feedback;
