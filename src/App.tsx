import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LandingPages from './pages/LandingPages';
import MobileApps from './pages/MobileApps';
import WebApplications from './pages/WebApplications';
import MvpDevelopment from './pages/MvpDevelopment';
import UiUxDesign from './pages/UiUxDesign';
import StartupSolutions from './pages/StartupSolutions';
import Blogs from './pages/Blogs';
import RequestDemo from './pages/RequestDemo';
import BlogStartupLandingPage from './pages/blogs/StartupLandingPage';
import BlogFutureWebDev from './pages/blogs/FutureWebDev';
import BlogBuildingMVPs from './pages/blogs/BuildingMVPs';
import BlogUIUXDesignPrinciples from './pages/blogs/UIUXDesignPrinciples';
import BlogMobileFirstDev from './pages/blogs/MobileFirstDev';
import BlogChoosingTechStack from './pages/blogs/ChoosingTechStack';
import WhatsAppButton from './components/WhatsAppButton';

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <WhatsAppButton />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/request-demo" element={<RequestDemo />} />

        {/* Individual Blog Articles */}
        <Route path="/blog/startup-landing-page" element={<BlogStartupLandingPage />} />
        <Route path="/blog/future-web-development" element={<BlogFutureWebDev />} />
        <Route path="/blog/building-mvps-that-scale" element={<BlogBuildingMVPs />} />
        <Route path="/blog/ui-ux-design-principles" element={<BlogUIUXDesignPrinciples />} />
        <Route path="/blog/mobile-first-development" element={<BlogMobileFirstDev />} />
        <Route path="/blog/choosing-tech-stack" element={<BlogChoosingTechStack />} />

        {/* Service Detail Pages */}
        <Route path="/services/landing-pages" element={<LandingPages />} />
        <Route path="/services/mobile-apps" element={<MobileApps />} />
        <Route path="/services/web-applications" element={<WebApplications />} />
        <Route path="/services/mvp-development" element={<MvpDevelopment />} />
        <Route path="/services/ui-ux-design" element={<UiUxDesign />} />
        <Route path="/services/startup-solutions" element={<StartupSolutions />} />
      </Routes>
    </div>
  );
}

export default App;
