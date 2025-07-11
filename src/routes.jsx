// src/routes.js
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Team from './pages/Tanmay/Team';
import ErrorComponent from './pages/Abhishree/ErrorComponent';
import CompanyValues from './pages/Abhishree/CompanyValues';
import AnnouncementBanner from './pages/Abhishree/AnnouncementBanner';
import TextPage from './pages/Tanmay/TextPage';
import ContactSection from './pages/Tanmay/ContactSection';
import Gallery from './pages/Abhishree/Gallery';
import StatsSection from './pages/Abhishree/StatsSection';
import BlogSection from './pages/Tanmay/BlogSection';
import Footer from './pages/Tanmay/Footer';

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
    path: '/Tanmay/Footer',
    element: <Footer />,
  },
  {
    path: '/Abhishree/Error',
    element: <ErrorComponent />,
  },
  {
    path: '/Abhishree/CompanyValues',
    element: <CompanyValues />,
  },
  {
    path: '/Abhishree/AnnouncementBanner',
    element: <AnnouncementBanner />,
  },
  {
    path: '/Abhishree/Gallery',
    element: <Gallery />,
  },
  {
    path: '/Abhishree/StatsSection',
    element: <StatsSection />,
  },
]);

export default router;
