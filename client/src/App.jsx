import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Home from './pages/Home.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import TermsConditions from './pages/TermsConditions.jsx';
import CookiePolicy from './pages/CookiePolicy.jsx';
import ThankYou from './pages/ThankYou.jsx';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/terms-and-conditions" element={<TermsConditions />} />
        <Route path="/cookies" element={<CookiePolicy />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}
