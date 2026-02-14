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
          <Link to="/">Acasă</Link>
          <Link to="/login">Login</Link>
        </nav>
      </header>
      <main className="layout-main">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
