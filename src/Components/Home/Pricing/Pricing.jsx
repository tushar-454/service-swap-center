import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import Container from '../../Reusable/Container';
import classes from './Pricing.module.css';
const pricingPlan = [
  {
    type: 'Basic',
    price: '99',
    desc: 'Essential home services. Perfect for starters.',
    serviceList: [
      'Plumbing check-up',
      'Electrical inspection',
      'Pool cleaning',
    ],
  },
  {
    type: 'Standard',
    price: '199',
    desc: 'More comprehensive services for an average household.',
    serviceList: [
      'Plumbing repairs',
      'Electrical installations',
      'HVAC maintenance',
    ],
  },
  {
    type: 'Premium',
    price: '299',
    desc: 'Extensive services for larger homes or full overhauls.',
    serviceList: [
      'Full plumbing overhaul',
      'Complete electrical rewiring',
      'HVAC system upgrade',
    ],
  },
];

const Pricing = () => {
  const [counteron, setCounteron] = useState(false);
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
                <ScrollTrigger onEnter={() => setCounteron(true)}>
                  $
                  {counteron && (
                    <CountUp
                      start={0}
                      end={price.price}
                      duration={3}
                      delay={0}
                    />
                  )}
                </ScrollTrigger>
              </h1>
              <span>{price.desc}</span>
              <span>
                <b>What You Get In This Service:</b>
              </span>
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
