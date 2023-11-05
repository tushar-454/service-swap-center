import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';

const Layout = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <>
      <Navbar />
      <Outlet />
      {pathname === '/login' || pathname === '/signup' ? <></> : <Footer />}
    </>
  );
};

export default Layout;
