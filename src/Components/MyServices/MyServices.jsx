import { Helmet } from 'react-helmet';
import Container from '../Reusable/Container';

const MyServices = () => {
  return (
    <section>
      <Helmet>
        <title>Services Swap Center | My Services</title>
      </Helmet>
      <Container>
        <h1>This is my services section</h1>
      </Container>
    </section>
  );
};

export default MyServices;
