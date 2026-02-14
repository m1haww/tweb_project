import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import AccountPage from './pages/AccountPage';
import SectionPage from './pages/SectionPage';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignUpPage />} />
            <Route path="account" element={<ProtectedRoute><AccountPage /></ProtectedRoute>} />
            <Route path="aso" element={<SectionPage title="ASO" />} />
            <Route path="asa" element={<SectionPage title="ASA" />} />
            <Route path="appsflyer" element={<SectionPage title="AppsFlyer" />} />
            <Route path="upup" element={<SectionPage title="UpUp" />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    </BrowserRouter>
  </AuthProvider>
  );
}

export default App;
