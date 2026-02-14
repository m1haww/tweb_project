import { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Layout.css';

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="layout-header">
        <div className="layout-brand">
          <button
            type="button"
            className="layout-menu-trigger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="menu-line" />
            <span className="menu-line" />
            <span className="menu-line" />
          </button>
          <Link to="/" className="layout-logo" onClick={closeMenu}>
            Dashboard
          </Link>
        </div>
        <nav className="layout-nav">
          <Link to="/">Home</Link>
          <Link to="/login">Pricing</Link>
          <Link to="/login">Blog</Link>
        </nav>
        <div className="layout-actions">
          {user ? (
            <>
              <Link to="/account" className="btn-login">Account</Link>
              <button type="button" className="btn-cta" onClick={logout}>
                Log out
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn-login">Log In</Link>
              <Link to="/login" className="btn-cta">Book a call</Link>
              <Link to="/signup" className="btn-cta primary">Sign up</Link>
            </>
          )}
        </div>
      </header>

      {menuOpen && (
        <div className="layout-sidebar-backdrop" onClick={closeMenu} aria-hidden="true" />
      )}
      <aside className={`layout-sidebar ${menuOpen ? 'open' : ''}`}>
        <NavLink to="/aso" className={({ isActive }) => isActive ? 'layout-menu-item active' : 'layout-menu-item'} onClick={closeMenu}>
          ASO
        </NavLink>
        <NavLink to="/asa" className={({ isActive }) => isActive ? 'layout-menu-item active' : 'layout-menu-item'} onClick={closeMenu}>
          ASA
        </NavLink>
        <NavLink to="/appsflyer" className={({ isActive }) => isActive ? 'layout-menu-item active' : 'layout-menu-item'} onClick={closeMenu}>
          AppsFlyer
        </NavLink>
        <NavLink to="/upup" className={({ isActive }) => isActive ? 'layout-menu-item active' : 'layout-menu-item'} onClick={closeMenu}>
          UpUp
        </NavLink>
      </aside>

      <main className="layout-main">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
