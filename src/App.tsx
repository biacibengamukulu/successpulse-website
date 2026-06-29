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

const routeMetadata: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'SuccessPulse | Field Lending Operations Platform',
    description: 'One platform for campaigns, lending operations, collections, and branch control for African microfinance and branch lending teams.',
  },
  '/platform': {
    title: 'SuccessPulse Platform | Field Lending Operations Workflow',
    description: 'Explore the 11-step SuccessPulse workflow for field agent management, branch lending software, collections, POS capture, and audit controls.',
  },
  '/campaigns': {
    title: 'Campaign Management | SuccessPulse',
    description: 'Plan field campaigns, route consultants, track GPS visits, and capture loan enquiries with SuccessPulse field agent management software.',
  },
  '/collections': {
    title: 'Collections & Recovery | SuccessPulse',
    description: 'Improve microfinance collections with ledger imports, promise-to-pay tracking, cash/POS capture, and manager approval workflows.',
  },
  '/branch-ops': {
    title: 'Branch Operations Software | SuccessPulse',
    description: 'Control branch cash, vault balances, expenses, receipts, and audit logs with SuccessPulse branch lending software.',
  },
  '/pricing': {
    title: 'SuccessPulse Pricing | Request Pricing',
    description: 'Request SuccessPulse pricing for microfinance collections software, branch lending operations, and field collection teams.',
  },
  '/roadmap': {
    title: 'SuccessPulse Roadmap | Digital Lending Operations',
    description: 'Review the SuccessPulse roadmap for full digital lending, credit scoring, repayment scheduling, and borrower portals.',
  },
  '/about': {
    title: 'About SuccessPulse | African Microfinance Software',
    description: 'Learn how SuccessPulse supports African microfinance software needs across field operations, branch controls, and collections.',
  },
  '/contact': {
    title: 'Book a SuccessPulse Demo | Schedule Discovery Call',
    description: 'Schedule a SuccessPulse discovery call for field lending operations, loan collections, branch controls, and African microfinance software.',
  },
};

function upsertMeta(nameOrProperty: 'name' | 'property', key: string, content: string) {
  const selector = `meta[${nameOrProperty}="${key}"]`;
  let tag = document.head.querySelector<HTMLMetaElement>(selector);

  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(nameOrProperty, key);
    document.head.appendChild(tag);
  }

  tag.content = content;
}

// ScrollToTop helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    const metadata = routeMetadata[pathname] ?? routeMetadata['/'];
    const canonicalUrl = `https://successpulse.biacibenga.com${pathname === '/' ? '' : pathname}`;

    document.title = metadata.title;
    upsertMeta('name', 'description', metadata.description);
    upsertMeta('property', 'og:title', metadata.title);
    upsertMeta('property', 'og:description', metadata.description);
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('name', 'twitter:title', metadata.title);
    upsertMeta('name', 'twitter:description', metadata.description);
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
