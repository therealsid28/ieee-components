// src/routes.js
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Team from './pages/Tanmay/Team';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/Tanmay/Team',
    element: <Team />,
  },
]);

export default router;
