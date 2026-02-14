import { Link } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
  return (
    <div className="login-page">
      <div className="login-card">
        <h1 className="login-title">Sign in</h1>
        <p className="login-subtitle">Access the ASO & Analytics dashboard.</p>

        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="email@example.com"
            autoComplete="email"
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            autoComplete="current-password"
          />
          <button type="submit" className="login-submit">
            Sign in
          </button>
        </form>

        <p className="login-back">
          <Link to="/">Back to home</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
