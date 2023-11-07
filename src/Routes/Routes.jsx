import { createBrowserRouter } from 'react-router-dom';
import AddServices from '../Components/AddServices/AddServices';
import Home from '../Components/Home/Home';
import Login from '../Components/Login/Login';
import ManageServices from '../Components/ManageServices/ManageServices';
import MySchedules from '../Components/MySchedules/MySchedules';
import MyServices from '../Components/MyServices/MyServices';
import Services from '../Components/Services/Services';
import Signup from '../Components/Signup/Signup';
import SingleService from '../Components/SingleService/SingleService';
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
        element: <Services />,
      },
      {
        path: '/my-services',
        element: (
          <PrivateRoutes>
            <MyServices />
          </PrivateRoutes>
        ),
      },
      {
        path: '/add-services',
        element: (
          <PrivateRoutes>
            <AddServices />
          </PrivateRoutes>
        ),
      },
      {
        path: '/my-schedules',
        element: (
          <PrivateRoutes>
            <MySchedules />
          </PrivateRoutes>
        ),
      },
      {
        path: '/service/:id',
        element: (
          <PrivateRoutes>
            <SingleService />
          </PrivateRoutes>
        ),
      },
      {
        path: 'manage-services',
        element: (
          <PrivateRoutes>
            <ManageServices />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default routes;
