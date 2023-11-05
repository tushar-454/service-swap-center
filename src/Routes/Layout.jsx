import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';

const Layout = () => {
  const { pathname } = useLocation();
  return (
    <>
      <Header />
      <Outlet />
      {pathname === '/login' || pathname === '/signup' ? <></> : <Footer />}
    </>
  );
};

export default Layout;
