import { createBrowserRouter } from 'react-router-dom';
import Home from '../Components/Home/Home';
import Login from '../Components/Login/Login';
import Services from '../Components/Services/Services';
import Signup from '../Components/Signup/Signup';
import PrivateRoutes from '../Utils/PrivateRoutes/PrivateRoutes';
import PublicRoutes from '../Utils/PublicRoutes/PublicRoutes';
import ErrorRoutes from './ErrorRoutes';
import Layout from './Layout';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorRoutes />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: (
          <PublicRoutes>
            <Login />
          </PublicRoutes>
        ),
      },
      {
        path: '/signup',
        element: (
          <PublicRoutes>
            <Signup />
          </PublicRoutes>
        ),
      },
      {
        path: '/services',
        element: (
          <PrivateRoutes>
            <Services />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default routes;
