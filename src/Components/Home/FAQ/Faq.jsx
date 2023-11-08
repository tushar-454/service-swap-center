import { useState } from 'react';
import arrow from '../../../assets/icon/arrow-down.png';
import Container from '../../Reusable/Container';
import classes from './FAQ.module.css';
const faqArr = [
  {
    question: 'Do you provide emergency services?',
    answer:
      'Yes, we offer emergency services round the clock. Contact us for immediate assistance in urgent situations.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'Our services cover urban, suburban, and rural areas. Get in touch to confirm service availability in your location.',
  },
  {
    question: 'Are your technicians certified and experienced?',
    answer:
      'Absolutely, our technicians are certified experts with years of experience. They undergo regular training to provide top-quality service.',
  },
  {
    question: 'How can I schedule an appointment?',
    answer:
      'You can schedule an appointment through our website or by calling our hotline. Our customer service team will assist you.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept various payment methods, including credit/debit cards, online transfers, and, in some cases, cash. Contact us for details.',
  },
];

const Faq = () => {
  const [open, setOpen] = useState(0);
  return (
    <section>
      <Container>
        <div className={classes.sectionTitle}>
          <h1>FAQ</h1>
        </div>
        <div className={classes.faqWrap}>
          {faqArr.map((faq, index) => (
            <div key={index} className={classes.faq}>
              <div
                className={classes.questionWrap}
                onClick={() => setOpen(index)}
              >
                <h4 className={classes.question}>{faq.question}</h4>
                <img
                  src={arrow}
                  style={{
                    transform: `rotate(${open === index ? 180 : 0}deg)`,
                  }}
                />
              </div>
              <div
                className={classes.answer}
                style={{ display: open === index ? 'block' : '' }}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Faq;
