import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './AccountPage.css';

function AccountPage() {
  const { user } = useAuth();

  return (
    <div className="account-page">
      <div className="account-card">
        <h1 className="account-title">You&apos;re in your account</h1>
        {user?.name && (
          <p className="account-name">Hello, <strong>{user.name}</strong></p>
        )}
        {user?.email && (
          <p className="account-email">Signed in as <strong>{user.email}</strong></p>
        )}

        <div className="account-section">
          <h2>App Store Connect</h2>
          <p className="account-placeholder">
            Sign in with your App Store Connect account will go here. For now this is a placeholder — we&apos;re keeping it simple.
          </p>
        </div>

        <p className="account-back">
          <Link to="/">Back to home</Link>
        </p>
      </div>
    </div>
  );
}

export default AccountPage;
