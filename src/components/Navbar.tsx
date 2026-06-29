import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Activity, ChevronDown } from 'lucide-react';
import { Button } from './ui/Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on navigate
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Roadmap', path: '/roadmap' },
    { name: 'About Us', path: '/about' },
  ];

  const featuresLinks = [
    { name: 'Platform Overview', path: '/platform', desc: 'Complete operation journey' },
    { name: 'Campaign Management', path: '/campaigns', desc: 'Field agent plans & prospects' },
    { name: 'Collections & Recovery', path: '/collections', desc: 'Allocation & smart worklist' },
    { name: 'Branch Operations', path: '/branch-ops', desc: 'Daily records, cash & audits' },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isFeatureActive = () => featuresLinks.some(link => location.pathname === link.path);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="bg-blue-600 text-white p-2 rounded-xl group-hover:bg-blue-700 transition-colors shadow-md shadow-blue-500/20">
              <Activity className="h-5 w-5 animate-pulse" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Success<span className="text-blue-600">Pulse</span>
              </span>
              <span className="hidden xs:block text-[9px] uppercase tracking-widest text-slate-500 font-semibold leading-none -mt-1">
                Field Operations
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1.5">
            <Link
              to="/"
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive('/') ? 'text-blue-600 bg-blue-50/50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Home
            </Link>

            {/* Features Dropdown */}
            <div className="relative group">
              <button
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${
                  isFeatureActive() ? 'text-blue-600 bg-blue-50/50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                Features
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>

              {/* Dropdown Menu */}
              <div 
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 hidden group-hover:block transition-all duration-300"
              >
                {featuresLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`flex flex-col p-3 rounded-xl transition-colors ${
                      isActive(link.path) ? 'bg-blue-50/50 text-blue-700' : 'hover:bg-slate-50 text-slate-700 hover:text-slate-950'
                    }`}
                  >
                    <span className="text-sm font-semibold">{link.name}</span>
                    <span className="text-xs text-slate-500 mt-0.5">{link.desc}</span>
                  </Link>
                ))}
              </div>
            </div>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.path) ? 'text-blue-600 bg-blue-50/50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/contact">
              <Button variant="outline" size="sm">
                Book Demo
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="primary" size="sm">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-slate-50 border border-slate-200/50 text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-100 animate-fade-in-up">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <Link
              to="/"
              className={`block px-4 py-2.5 rounded-xl text-base font-medium ${
                isActive('/') ? 'text-blue-600 bg-blue-50/50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Home
            </Link>

            {/* Platform Sub-links */}
            <div className="border-l-2 border-slate-100 pl-4 py-1 space-y-1 my-1">
              <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider px-4 mb-2">
                Features & Pillars
              </div>
              {featuresLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-2 rounded-lg text-sm font-medium ${
                    isActive(link.path) ? 'text-blue-600 bg-blue-50/50' : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-2.5 rounded-xl text-base font-medium ${
                  isActive(link.path) ? 'text-blue-600 bg-blue-50/50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <Link to="/contact" className="w-full">
                <Button variant="outline" className="w-full">
                  Book Demo
                </Button>
              </Link>
              <Link to="/contact" className="w-full">
                <Button variant="primary" className="w-full">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
