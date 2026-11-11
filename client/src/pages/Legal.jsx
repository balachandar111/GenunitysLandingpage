import PrivacyPolicy from './PrivacyPolicy.jsx';
import TermsConditions from './TermsConditions.jsx';
import CookiePolicy from './CookiePolicy.jsx';

export default function Legal({ page }) {
  if (page === 'terms' || page === 'terms-and-conditions') {
    return <TermsConditions />;
  }
  if (page === 'cookies' || page === 'cookie-policy') {
    return <CookiePolicy />;
  }
  return <PrivacyPolicy />;
}
