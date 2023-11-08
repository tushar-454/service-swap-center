import axios from 'axios';
import { RouterProvider } from 'react-router-dom';
import AuthProvider from './AuthProvider/AuthProvider';
import routes from './Routes/Routes';
function App() {
  axios.defaults.withCredentials = true;
  axios.defaults.baseURL = 'https://service-swap-center.vercel.app';
  return (
    <AuthProvider>
      <RouterProvider router={routes} />
    </AuthProvider>
  );
}

export default App;
