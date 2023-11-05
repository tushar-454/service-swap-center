import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Loader from '../../Utils/Loader/Loader';
import Toast from '../../Utils/Toast/Toast';
const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const { pathname } = useLocation();

  if (loading) {
    return <Loader />;
  }

  if (!user) {
    Toast('Please Login first.', 'info');
    return <Navigate to={'/login'} state={pathname} />;
  }
  return children;
};

PrivateRoutes.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoutes;
