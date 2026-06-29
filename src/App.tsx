import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home';
import { Platform } from './pages/Platform';
import { CampaignManagement } from './pages/CampaignManagement';
import { Collections } from './pages/Collections';
import { BranchOperations } from './pages/BranchOperations';
import { Pricing } from './pages/Pricing';
import { Roadmap } from './pages/Roadmap';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

// ScrollToTop helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/campaigns" element={<CampaignManagement />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/branch-ops" element={<BranchOperations />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Fallback route */}
          <Route path="*" element={<Home />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
