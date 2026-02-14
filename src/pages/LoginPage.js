import { Link } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
  return (
    <div className="login-page">
      <div className="login-card">
        <h1 className="login-title">Conectare</h1>
        <p className="login-subtitle">Accesează dashboard-ul ASO & Analytics.</p>

        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="email@exemplu.com"
            autoComplete="email"
          />
          <label htmlFor="password">Parolă</label>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            autoComplete="current-password"
          />
          <button type="submit" className="login-submit">
            Autentificare
          </button>
        </form>

        <p className="login-back">
          <Link to="/">Înapoi la pagina principală</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
