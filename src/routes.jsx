// src/routes.js
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Card from './pages/siddharth/card';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/siddharth/card',
    element: <Card />,
  },
]);

export default router;
