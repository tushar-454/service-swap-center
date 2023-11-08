import Container from '../../Reusable/Container';
import classes from './Pricing.module.css';
const pricingPlan = [
  {
    type: 'Basic',
    price: '$99',
    desc: 'Essential home services. Perfect for starters.',
    serviceList: [
      'Plumbing check-up',
      'Electrical inspection',
      'Pool cleaning',
    ],
  },
  {
    type: 'Standard',
    price: '$199',
    desc: 'More comprehensive services for an average household.',
    serviceList: [
      'Plumbing repairs',
      'Electrical installations',
      'HVAC maintenance',
    ],
  },
  {
    type: 'Premium',
    price: '$299',
    desc: 'Extensive services for larger homes or full overhauls.',
    serviceList: [
      'Full plumbing overhaul',
      'Complete electrical rewiring',
      'HVAC system upgrade',
    ],
  },
];

const Pricing = () => {
  return (
    <section>
      <Container>
        <div className={classes.sectionTitle}>
          <h1>Our Pricing</h1>
        </div>
        <div className={classes.pricingPlanWrap}>
          {pricingPlan.map((price, index) => (
            <div
              key={index}
              className={classes.signlePlan}
              style={{
                transform: index === 1 ? 'scale(1.1)' : '',
                background: index === 1 ? '#06A440' : '',
                color: index === 1 ? '#FFF' : '',
              }}
            >
              <h2>
                <b>{price.type}</b>
              </h2>
              <h1 style={{ color: index === 1 ? '#FFF' : '' }}>
                {price.price}
              </h1>
              <p>{price.desc}</p>
              <p>
                <b>What You Get In This Service:</b>
              </p>
              <ul>
                {price.serviceList.map((item, index) => (
                  <li key={index}>
                    {index + 1}. {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Pricing;
