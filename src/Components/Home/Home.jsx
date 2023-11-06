import { Helmet } from 'react-helmet';
import Banner from './Banner/Banner';
import PopulerServices from './PopularSerivces/PopulerServices';

const Home = () => {
  return (
    <main>
      <Helmet>
        <title>Services Swap Center | Home</title>
      </Helmet>
      <Banner />
      <PopulerServices />
    </main>
  );
};

export default Home;
