import { Link } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing">
      <section className="landing-hero">
        <div className="landing-hero-content">
          <h1 className="landing-title">
            Smart and automated Apple Ads.
          </h1>
          <p className="landing-subtitle">
            The expert-built platform that helps you understand, automate, and scale Apple Ads profitably.
          </p>
          <div className="landing-ctas">
            <Link to="/login" className="landing-cta primary">
              Book a call
            </Link>
            <Link to="/login" className="landing-cta secondary">
              Start for free
            </Link>
          </div>
          <div className="landing-social-proof">
            <span className="g2-badge">G2</span>
            <span className="rating">4.8</span>
            <span className="star">★</span>
          </div>
        </div>
        <div className="landing-dashboard-preview">
          <div className="dashboard-preview-card">
            <div className="dashboard-preview-sidebar">
              <div className="sidebar-icon" title="Home" />
              <div className="sidebar-icon" title="Campaigns" />
              <div className="sidebar-icon" title="Analytics" />
              <div className="sidebar-icon" title="Settings" />
            </div>
            <div className="dashboard-preview-main">
              <div className="dashboard-breadcrumb">
                All accounts / Account / Campaign Group
              </div>
              <div className="dashboard-heading">T1 Countries</div>
              <div className="dashboard-toolbar">
                <div className="dashboard-search">Q Search campaigns</div>
                <div className="dashboard-actions">
                  <span className="toolbar-icon" />
                  <span className="toolbar-icon" />
                  <span className="toolbar-icon" />
                </div>
                <div className="dashboard-filters">
                  <span className="filter-chip blue">Installs ×</span>
                  <span className="filter-chip green">Avg CPA ×</span>
                  <span className="filter-chip orange">CR ×</span>
                </div>
              </div>
              <div className="dashboard-chart">
                <div className="chart-placeholder">
                  <svg viewBox="0 0 400 120" className="chart-lines">
                    <path d="M0 80 Q50 75 100 70 T200 55 T300 40 T400 25" fill="none" stroke="#3b82f6" strokeWidth="2" />
                    <path d="M0 60 Q50 65 100 55 T200 70 T300 50 T400 60" fill="none" stroke="#22c55e" strokeWidth="2" />
                    <path d="M0 40 Q50 50 100 45 T200 60 T300 70 T400 55" fill="none" stroke="#f97316" strokeWidth="2" />
                  </svg>
                  <div className="chart-legend">
                    <span className="legend-dot blue" /> Installs
                    <span className="legend-dot green" /> Avg CPA
                    <span className="legend-dot orange" /> CR
                  </div>
                </div>
              </div>
              <div className="dashboard-table">
                <table>
                  <thead>
                    <tr>
                      <th>Campaign Name</th>
                      <th>Status</th>
                      <th>Country</th>
                      <th>Rule Status</th>
                      <th>IPM</th>
                      <th>Total revenue</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>US - Brand</td>
                      <td><span className="status-dot running" /> Running</td>
                      <td>US</td>
                      <td>Enabled</td>
                      <td>12.4</td>
                      <td>$9 289</td>
                    </tr>
                    <tr>
                      <td>AU - Non-Brand</td>
                      <td><span className="status-dot running" /> Running</td>
                      <td>AU</td>
                      <td>Enabled</td>
                      <td>8.1</td>
                      <td>$5 102</td>
                    </tr>
                    <tr>
                      <td>UK - Search</td>
                      <td><span className="status-dot paused" /> Paused</td>
                      <td>UK</td>
                      <td>Paused</td>
                      <td>6.2</td>
                      <td>$3 450</td>
                    </tr>
                  </tbody>
                </table>
                <div className="dashboard-table-footer">
                  <span>Total 54 campaigns</span>
                  <span>97.9 $30 591</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="landing-features">
        <h2>Why this dashboard?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Centralized data</h3>
            <p>App Store, UpUp and AppsFlyer in one place.</p>
          </div>
          <div className="feature-card">
            <h3>Reports and analytics</h3>
            <p>Clear reports and analytics for quick decisions.</p>
          </div>
          <div className="feature-card">
            <h3>ASO/ASA optimization</h3>
            <p>Processing and display for campaign optimization.</p>
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
