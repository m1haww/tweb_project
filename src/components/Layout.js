import { Link, Outlet } from 'react-router-dom';
import './Layout.css';

function Layout() {
  return (
    <>
      <header className="layout-header">
        <Link to="/" className="layout-logo">
          ASO Dashboard
        </Link>
        <nav className="layout-nav">
          <Link to="/">Home</Link>
          <Link to="/login">Pricing</Link>
          <Link to="/login">Blog</Link>
        </nav>
        <div className="layout-actions">
          <Link to="/login" className="btn-login">Log In</Link>
          <Link to="/login" className="btn-cta">Book a call</Link>
          <Link to="/login" className="btn-cta primary">Sign up</Link>
        </div>
      </header>
      <main className="layout-main">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
