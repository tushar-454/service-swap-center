import { Helmet } from 'react-helmet';
import Banner from './Banner/Banner';
import Faq from './FAQ/FAQ';
import OurTeam from './OurTeam/OurTeam';
import PopulerServices from './PopularSerivces/PopulerServices';
import Pricing from './Pricing/Pricing';

const Home = () => {
  return (
    <main>
      <Helmet>
        <title>Services Swap Center | Home</title>
      </Helmet>
      <Banner />
      <PopulerServices />
      <OurTeam />
      <Pricing />
      <Faq />
    </main>
  );
};

export default Home;
