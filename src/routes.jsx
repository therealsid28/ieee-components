// src/routes.js
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Team from './pages/Tanmay/Team';
import ErrorComponent from './pages/Abhishree/ErrorComponent';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/Tanmay/Team',
    element: <Team />,
  },
  {
    path: '/Abhishree/Error',
    element: <ErrorComponent />,
  },
]);

export default router;
