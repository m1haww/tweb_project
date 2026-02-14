import { Link } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing">
      <section className="landing-hero">
        <h1 className="landing-title">ASO & Analytics într-un singur loc</h1>
        <p className="landing-subtitle">
          Conectează App Store, UpUp și AppsFlyer. Rapoarte, ASO și analize într-o singură aplicație.
        </p>
        <Link to="/login" className="landing-cta">
          Accesează dashboard-ul
        </Link>
      </section>

      <section className="landing-features">
        <h2>De ce acest dashboard?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Date centralizate</h3>
            <p>App Store, UpUp și AppsFlyer într-un singur loc.</p>
          </div>
          <div className="feature-card">
            <h3>Rapoarte și analize</h3>
            <p>Rapoarte clare și analize pentru decizii rapide.</p>
          </div>
          <div className="feature-card">
            <h3>Optimizare ASO/ASA</h3>
            <p>Prelucrare și afișare pentru optimizarea campaniilor.</p>
          </div>
        </div>
      </section>

      <footer className="landing-footer">
        <Link to="/login">Login</Link>
      </footer>
    </div>
  );
}

export default LandingPage;
