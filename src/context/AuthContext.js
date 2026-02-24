import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
const TOKEN_KEY = 'groz_token';
const USER_KEY = 'groz_user';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const persistAuth = (token, userData) => {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(USER_KEY, JSON.stringify(userData));
    setUser(userData);
  };

  const clearAuth = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    setUser(null);
  };

  const fetchMe = useCallback(async () => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (!token) {
      setLoading(false);
      return;
    }
    try {
      const res = await fetch(`${API_URL}/api/auth/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        const data = await res.json();
        setUser({ id: data.id, email: data.email, name: data.name });
      } else {
        clearAuth();
      }
    } catch {
      clearAuth();
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      fetchMe();
    } else {
      setLoading(false);
    }
  }, [fetchMe]);

  const parseResponse = async (res) => {
    const text = await res.text();
    try {
      return text ? JSON.parse(text) : {};
    } catch {
      return { message: text || 'Server error.' };
    }
  };

  const signUp = async (email, password, name = '') => {
    const res = await fetch(`${API_URL}/api/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, name: name || null }),
    });
    const data = await parseResponse(res);
    if (!res.ok) {
      throw new Error(data.message || data.title || 'Registration failed.');
    }
    persistAuth(data.token, data.user);
    return data;
  };

  const login = async (email, password) => {
    const res = await fetch(`${API_URL}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await parseResponse(res);
    if (!res.ok) {
      throw new Error(data.message || data.title || 'Invalid email or password.');
    }
    persistAuth(data.token, data.user);
    return data;
  };

  const logout = () => {
    clearAuth();
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signUp, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
}
