// src/routes.js
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Team from './pages/Tanmay/Team';
import ErrorComponent from './pages/Abhishree/ErrorComponent';
import TextPage from './pages/Tanmay/TextPage';
import ContactSection from './pages/Tanmay/ContactSection';
import BlogSection from './pages/Tanmay/BlogSection';

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
    path: '/Tanmay/TextPage',
    element: <TextPage />,
  },
  {
    path: '/Tanmay/ContactSection',
    element: <ContactSection />,
  },
  {
    path: '/Tanmay/Blog',
    element: <BlogSection />,
  },
  {
    path: '/Abhishree/Error',
    element: <ErrorComponent />,
  },
]);

export default router;
