import axios from 'axios';
import { RouterProvider } from 'react-router-dom';
import AuthProvider from './AuthProvider/AuthProvider';
import routes from './Routes/Routes';
function App() {
  axios.defaults.withCredentials = true;
  axios.defaults.baseURL = 'http://localhost:5000';
  return (
    <AuthProvider>
      <RouterProvider router={routes} />
    </AuthProvider>
  );
}

export default App;
