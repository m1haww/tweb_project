import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './AccountPage.css';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
const TOKEN_KEY = 'groz_token';

function AccountPage() {
  const { user } = useAuth();
  const [ascStatus, setAscStatus] = useState({ configured: false, keyIdSuffix: null });
  const [loadingStatus, setLoadingStatus] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [keyId, setKeyId] = useState('');
  const [issuerId, setIssuerId] = useState('');
  const [privateKey, setPrivateKey] = useState('');
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const getAuthHeaders = () => {
    const token = localStorage.getItem(TOKEN_KEY);
    return {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    };
  };

  const fetchAscStatus = async () => {
    setLoadingStatus(true);
    setError('');
    try {
      const res = await fetch(`${API_URL}/api/AppStoreConnect`, { headers: getAuthHeaders() });
      const data = await res.json();
      if (res.ok) {
        setAscStatus({ configured: data.configured, keyIdSuffix: data.keyIdSuffix ?? null });
      }
    } catch {
      setError('Failed to load status.');
    } finally {
      setLoadingStatus(false);
    }
  };

  useEffect(() => {
    fetchAscStatus();
  }, []);

  const handleSave = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (!keyId.trim() || !issuerId.trim() || !privateKey.trim()) {
      setError('Key ID, Issuer ID and private key are required.');
      return;
    }
    setSaving(true);
    try {
      const res = await fetch(`${API_URL}/api/AppStoreConnect`, {
        method: 'PUT',
        headers: getAuthHeaders(),
        body: JSON.stringify({
          keyId: keyId.trim(),
          issuerId: issuerId.trim(),
          privateKey: privateKey.trim(),
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.message || data.title || 'Failed to save credentials.');
        return;
      }
      setSuccess('Credentials saved successfully.');
      setPrivateKey('');
      setAscStatus({ configured: true, keyIdSuffix: data.keyIdSuffix ?? null });
      setShowForm(false);
      setError('');
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const handleDisconnect = async () => {
    setError('');
    setSuccess('');
    setDeleting(true);
    try {
      const res = await fetch(`${API_URL}/api/AppStoreConnect`, {
        method: 'DELETE',
        headers: getAuthHeaders(),
      });
      if (res.ok) {
        setAscStatus({ configured: false, keyIdSuffix: null });
        setKeyId('');
        setIssuerId('');
        setPrivateKey('');
        setShowForm(true);
        setSuccess('App Store Connect disconnected.');
      } else {
        const data = await res.json();
        setError(data.message || 'Failed to disconnect.');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setDeleting(false);
    }
  };

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
          {loadingStatus ? (
            <p className="account-muted">Loading…</p>
          ) : ascStatus.configured && !showForm ? (
            <>
              <p className="account-asc-connected">
                Connected {ascStatus.keyIdSuffix && <span>(Key {ascStatus.keyIdSuffix})</span>}
              </p>
              <div className="account-asc-actions">
                <button
                  type="button"
                  className="account-btn account-btn-secondary"
                  onClick={() => setShowForm(true)}
                >
                  Update credentials
                </button>
                <button
                  type="button"
                  className="account-btn account-btn-danger"
                  onClick={handleDisconnect}
                  disabled={deleting}
                >
                  {deleting ? 'Disconnecting…' : 'Disconnect'}
                </button>
              </div>
            </>
          ) : (
            <>
              <p className="account-placeholder">
                Add your App Store Connect API key details so we can fetch your apps and data. You can find these in App Store Connect → Users and Access → Keys.
              </p>
              {error && <p className="account-error">{error}</p>}
              {success && <p className="account-success">{success}</p>}
              <form className="account-form" onSubmit={handleSave}>
                <label htmlFor="asc-keyId">Key ID</label>
                <input
                  id="asc-keyId"
                  type="text"
                  placeholder="e.g. ABC123XYZ"
                  value={keyId}
                  onChange={(e) => setKeyId(e.target.value)}
                  autoComplete="off"
                />
                <label htmlFor="asc-issuerId">Issuer ID</label>
                <input
                  id="asc-issuerId"
                  type="text"
                  placeholder="e.g. 12345678-1234-1234-1234-123456789012"
                  value={issuerId}
                  onChange={(e) => setIssuerId(e.target.value)}
                  autoComplete="off"
                />
                <label htmlFor="asc-privateKey">Private key (.p8)</label>
                <textarea
                  id="asc-privateKey"
                  placeholder="Paste the contents of your .p8 file (including -----BEGIN PRIVATE KEY----- and -----END PRIVATE KEY-----)"
                  value={privateKey}
                  onChange={(e) => setPrivateKey(e.target.value)}
                  rows={6}
                  className="account-textarea"
                />
                <button type="submit" className="account-btn account-btn-primary" disabled={saving}>
                  {saving ? 'Saving…' : 'Save credentials'}
                </button>
              </form>
            </>
          )}
        </div>

        <p className="account-back">
          <Link to="/">Back to home</Link>
        </p>
      </div>
    </div>
  );
}

export default AccountPage;
