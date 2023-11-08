import facebook from '../../../assets/icon/facebook.png';
import instagram from '../../../assets/icon/instagram.png';
import twitter from '../../../assets/icon/twitter.png';
import Container from '../../Reusable/Container';
import classes from './OurTeam.module.css';

const teamArr = [
  {
    name: 'John Doe',
    role: 'Electrician',
    image:
      'https://rrgraphdesign.elementor.cloud/wp-content/uploads/2023/06/plumber-in-uniform-holds-wrench-handyman-2021-08-26-16-26-54-utc-800x534.jpg',
  },
  {
    name: 'Alice Smith',
    role: 'Plumber',
    image:
      'https://rrgraphdesign.elementor.cloud/wp-content/uploads/2023/06/concept-for-home-cleaning-services-2022-02-14-17-30-29-utc-800x533.jpg',
  },
  {
    name: 'Mike Johnson',
    role: 'Cleaner',
    image:
      'https://rrgraphdesign.elementor.cloud/wp-content/uploads/2023/06/happy-girl-cleaning-table-with-furniture-polish-at-2022-05-12-00-17-53-utc-800x533.jpg',
  },
  {
    name: 'Emily Brown',
    role: 'Decorator',
    image:
      'https://rrgraphdesign.elementor.cloud/wp-content/uploads/2023/06/hotline-support-service-millennial-male-call-cent-2022-12-16-07-30-22-utc-800x533.jpg',
  },
  {
    name: 'Sarah Davis',
    role: 'Rooftop Reapirer',
    image:
      'https://rrgraphdesign.elementor.cloud/wp-content/uploads/2023/06/technician-of-home-service-company-holding-touchpa-2021-09-24-03-09-39-utc-800x533.jpg',
  },
  {
    name: 'Alex Wilson',
    role: 'Painter',
    image:
      'https://rrgraphdesign.elementor.cloud/wp-content/uploads/2023/06/portrait-business-woman-working-from-home-she-is-t-2022-11-08-00-36-05-utc-800x532.jpg',
  },
];

const OurTeam = () => {
  return (
    <section>
      <Container>
        <div className={classes.sectionTitle}>
          <h1>Our Team</h1>
        </div>
        <div className={classes.teamWrap}>
          {teamArr.map((member, index) => (
            <div key={index} className={classes.teamDiv}>
              <div className={classes.memberImg}>
                <img src={member.image} alt='' />
              </div>
              <div className={classes.memberDetails}>
                <h1>{member.name}</h1>
                <p>{member.role}</p>
              </div>
              <div className={classes.teamSocial}>
                <a href='#'>
                  <img src={facebook} />
                </a>
                <a href='#'>
                  <img src={twitter} />
                </a>
                <a href='#'>
                  <img src={instagram} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default OurTeam;
