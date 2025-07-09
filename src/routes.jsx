// src/routes.js
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Team from './pages/Tanmay/Team';
import ErrorComponent from './pages/Abhishree/ErrorComponent';
import CompanyValues from './pages/Abhishree/CompanyValues';
import AnnouncementBanner from './pages/Abhishree/AnnouncementBanner';
import TextPage from './pages/Tanmay/TextPage';
import ContactSection from './pages/Tanmay/ContactSection';

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
    path: '/Abhishree/Error',
    element: <ErrorComponent />,
  },
  {
    path: '/Abhishree/ComapanyValues',
    element: <CompanyValues />,
  },
  {
    path: '/Abhishree/AnnouncementBanner',
    element: <AnnouncementBanner />,
  },
]);

export default router;
