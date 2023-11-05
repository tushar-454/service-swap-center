import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';

const Layout = () => {
  const { pathname } = useLocation();
  const [prevPath, setPrevPath] = useState(pathname);
  useEffect(() => {
    if (pathname !== prevPath) {
      setPrevPath(pathname);
      window.scrollTo(0, 0);
    }
  }, [pathname, prevPath]);
  return (
    <>
      <Header />
      <Outlet />
      {pathname === '/login' || pathname === '/signup' ? <></> : <Footer />}
    </>
  );
};

export default Layout;
