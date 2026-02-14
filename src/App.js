import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SectionPage from './pages/SectionPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="aso" element={<SectionPage title="ASO" />} />
          <Route path="asa" element={<SectionPage title="ASA" />} />
          <Route path="appsflyer" element={<SectionPage title="AppsFlyer" />} />
          <Route path="upup" element={<SectionPage title="UpUp" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
